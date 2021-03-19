import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as BooksAPI from '../BooksAPI';
import Book from './Book';

class SearchPage extends Component {
  state = {
      query: '',
      queryResults: [],
  }

updateQuery = (query) => {
    this.setState(() => ({
        query
    }));
    if(this.state.query.length > 2) {
        BooksAPI.search(this.state.query).
            then((queryResults) => {
                this.setState(() => ({
                    queryResults
                }));
            });
    } else {
        this.setState(() => ({
            queryResults: []
        }));
    }
}

render() {
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to='/'>Close</Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        value={this.state.query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {this.state.query.length > 2 && this.state.queryResults.map((book) => (
                        <li key={book.id}>
                            <Book
                                book={book}
                                onBookShelfChange={this.props.onBookShelfChange}
                            />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
}

SearchPage.propTypes = {
    onBookShelfChange: PropTypes.func.isRequired,
};

export default SearchPage;
