import React from 'react';
import './App.css';
import MyReads from './components/MyReads';
import SearchPage from './components/SearchPage';
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {

  state = {
      showSearchPage: false,
      userBooks: [],
  }

  onSearchClick = () => {
      this.setState({showSearchPage: true});
  }

  onReturnClick = () => {
      this.setState({showSearchPage: false});
  }

  componentDidMount() {
      BooksAPI.getAll()
          .then((userBooks) => {
              this.setState(() => ({
                  userBooks
              }));
          });
  }

  render() {
      console.log(this.state.userBooks);
      return (
          <div className='app'>
              {this.state.showSearchPage ?
                  <SearchPage onReturnClick = {this.onReturnClick} />
                  :
                  <>
                      <MyReads userBooks={this.state.userBooks} />
                      <div className="open-search">
                          <button onClick={this.onSearchClick}>Add a book</button>
                      </div>
                  </>
              }
          </div>
      );
  }
}

export default BooksApp;
