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
      showSearchPage: false,
      query: ''
  }

onSearchClick = () => {
    this.setState({showSearchPage: true});
}



  onReturnClick = () => {
      this.setState({showSearchPage: false});
  }

  render() {
      return (
          <div className='app'>
              {this.state.showSearchPage ?
                  <SearchPage onReturnClick = {this.onReturnClick} />
                  :
                  <>
                      <MyReads staticBooks={staticBooks} />
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
