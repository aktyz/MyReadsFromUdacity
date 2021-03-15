import React from 'react';
import './App.css';
import MyReads from './components/MyReads';
import SearchPage from './components/SearchPage';
import * as BooksAPI from './BooksAPI';
import { Link, Route } from 'react-router-dom';

class BooksApp extends React.Component {

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

  changeBookShelf = (newShelf, book) => {
      book.shelf = newShelf;
      return book;
  }

  onBookShelfChange = (newValue, newBook) => {
      console.log(`bookshelfChanged to ${newValue} for ${newBook.title}`);
      //change "shelf" value for the given book by the BookAPI and in App state
      if (newBook.shelf === 'none') {
          const newBookOnNewShelf = this.changeBookShelf(newValue, newBook);
          this.setState((prevState) => ({
              userBooks: prevState.userBooks.concat([newBookOnNewShelf]),
          }));
      } else
      {
          this.setState((prevState) => ({
              userBooks: prevState.userBooks.map(book => {
                  if (book.id === newBook.id) {
                      this.changeBookShelf(newValue, book);
                  }
              })
          }));
      }
  }

  render() {
      return (
          <div className='app'>
              <Route path='/search' component={SearchPage} />
              <Route exact path='/' render={()=>(
                  <>
                      <MyReads userBooks={this.state.userBooks} onBookShelfChange={this.onBookShelfChange}/>
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
