import React, { Component } from 'react';
import { Bookshelf } from './Bookshelf';

class MyReads extends Component {
  render() {
    return (
      <div className="list-books">
          <div className="list-books-title">
              <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
              <div>
                  <Bookshelf bookshelfTitle='Currently Reading' shelfBooks={this.props.staticBooks}/>
                  <Bookshelf bookshelfTitle='Want to Read' shelfBooks={this.props.staticBooks}/>
                  <Bookshelf bookshelfTitle='Read' shelfBooks={this.props.staticBooks}/>
              </div>
          </div>
          <div className="open-search">
              <button onClick={this.props.onSearchClick}>Add a book</button>
          </div>
      </div>
    )
  }
}

export default MyReads;
