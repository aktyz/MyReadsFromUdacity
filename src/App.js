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

  onBookShelfChange(newValue, bookTitle) {
      console.log(`bookshelfChanged to ${newValue} for ${bookTitle}`);
      //change "shelf" value for the given book by the BookAPI and in App state
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
