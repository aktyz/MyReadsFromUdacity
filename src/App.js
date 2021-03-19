import React from 'react';
import './App.css';
import MyReads from './components/MyReads';
import SearchPage from './components/SearchPage';
import * as BooksAPI from './BooksAPI';
import { Link, Route } from 'react-router-dom';

class BooksApp extends React.Component {
    constructor(props) {
        super(props);
        this.onBookShelfChange = this.onBookShelfChange.bind(this);
        this.changeBookShelf = this.changeBookShelf.bind(this);
    }
  state = {
      userBooks: [],
  }

  componentDidMount() {
      BooksAPI.getAll()
          .then((userBooks) => {
              this.setState(() => ({
                  userBooks
              }));
          });
  }

  changeBookShelf (newShelf, book) {
      return { ...book, shelf: newShelf };
  }

  onBookShelfChange(newValue, newBook) {
      if (newBook.shelf && newBook.shelf === 'none') {
          const newBookOnNewShelf = this.changeBookShelf(newValue, newBook);
          this.setState((prevState) => ({
              userBooks: prevState.userBooks.concat([newBookOnNewShelf]),
          }));
      } else
      {
          this.setState((prevState) => ({
              userBooks: prevState.userBooks.map((book) => {
                  if(book.id === newBook.id) {
                      return this.changeBookShelf(newValue, book);
                  }
                  return book;
              }),
          }));
      }
      BooksAPI.update(newBook, newValue);
  }

  render() {
      return (
          <div className='app'>
              <Route path='/search'
                  render={( { history } ) => (
                      <SearchPage
                          onBookShelfChange={(newShelf, aBook) => {
                              this.onBookShelfChange(newShelf, aBook);
                              history.push('/');
                          }}
                      />
                  )} />
              <Route exact path='/' render={() => (
                  <>
                      <MyReads
                          userBooks={this.state.userBooks}
                          onBookShelfChange={this.onBookShelfChange}
                      />
                      <div className="open-search">
                          <Link
                              to='/search'
                          >Add a book</Link>
                      </div>
                  </>
              )} />
          </div>
      );
  }
}

export default BooksApp;
