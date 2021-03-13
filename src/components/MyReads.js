import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Bookshelf from './Bookshelf';

class MyReads extends Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf bookshelfTitle='Currently Reading' shelfBooks={this.props.userBooks.filter(book => book.shelf === 'currentlyReading' )}/>
                        <Bookshelf bookshelfTitle='Want to Read' shelfBooks={this.props.userBooks.filter(book => book.shelf === 'wantToRead' )}/>
                        <Bookshelf bookshelfTitle='Read' shelfBooks={this.props.userBooks.filter(book => book.shelf === 'read' )}/>
                    </div>
                </div>
            </div>
        );
    }
}

MyReads.propTypes = {
    userBooks: PropTypes.array.isRequired,
};

export default MyReads;
