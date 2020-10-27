import React from 'react';
import './App.css';
import MyReads from './components/MyReads';
import SearchPage from './components/SearchPage';

const staticBooks = [
  {
    'bookTitle': 'To Kill a Mockingbird',
    'bookAuthors': 'Harper Lee',
    'bookCoverURL': 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'
  }
];

class BooksApp extends React.Component {
  state = {
      /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
      showSearchPage: false,
      query: ''
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query
    }))
  }

  onSearchClick = () => {
    this.setState({showSearchPage: true})
  }

  onReturnClick = () => {
    this.setState({showSearchPage: false})
  }

  render() {
      return (
          <div className='app'>
              {this.state.showSearchPage ?
                  <SearchPage onReturnClick = {this.onReturnClick} />
                  :
                  <MyReads staticBooks={staticBooks} onSearchClick = {this.onSearchClick}/>
              }
          </div>
      );
  }
}

export default BooksApp;
