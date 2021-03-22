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

  async onBookShelfChange(newValue, newBook) {
      await BooksAPI.update(newBook, newValue);
      await BooksAPI.getAll()
          .then((userBooks) => {
              this.setState(() => ({
                  userBooks
              }));
          });
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
                          userBooksIds={this.state.userBooks.map((book) => (book.id))}
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
