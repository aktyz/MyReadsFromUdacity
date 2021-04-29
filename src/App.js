import React from 'react';
import './App.css';
import MyReads from './components/MyReads';
import SearchPage from './components/SearchPage';
import * as BooksAPI from './BooksAPI';
import { Link, Route, Switch } from 'react-router-dom';

class BooksApp extends React.Component {
    constructor(props) {
        super(props);
        this.onBookShelfChange = this.onBookShelfChange.bind(this);
    }
  state = {
      userBooks: [],
  }

  async componentDidMount() {
      const userBooks = await BooksAPI.getAll();
      this.setState({ userBooks });
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
              <Switch>
                  <Route path='/search'
                      render={() => (
                          <SearchPage
                              onBookShelfChange={this.onBookShelfChange}
                              userBooksIds={this.state.userBooks.map((book) => ({
                                  id: book.id,
                                  shelf: book.shelf,
                              }))}
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
                  <Route render={() => (
                      <>
                          <div className="list-books-title">
                              <h1>MyReads</h1>
                          </div>
                          <p>No such page found</p>
                          <div className="open-search">
                              <Link
                                  to='/search'
                              >Add a book</Link>
                          </div>
                      </>
                  )}/>
              </Switch>
          </div>
      );
  }
}

export default BooksApp;
