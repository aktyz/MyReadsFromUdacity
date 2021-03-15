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
                        <Bookshelf
                            key='Currently Reading'
                            bookshelfTitle='Currently Reading'
                            shelfBooks={this.props.userBooks.filter(book => book.shelf === 'currentlyReading' )}
                            onBookShelfChange={this.props.onBookShelfChange}
                        />
                        <Bookshelf
                            key='Want to Read'
                            bookshelfTitle='Want to Read'
                            shelfBooks={this.props.userBooks.filter(book => book.shelf === 'wantToRead' )}
                            onBookShelfChange={this.props.onBookShelfChange}
                        />
                        <Bookshelf
                            key='Read'
                            bookshelfTitle='Read'
                            shelfBooks={this.props.userBooks.filter(book => book.shelf === 'read' )}
                            onBookShelfChange={this.props.onBookShelfChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

MyReads.propTypes = {
    userBooks: PropTypes.array.isRequired,
    onBookShelfChange: PropTypes.func.isRequired,
};

export default MyReads;
