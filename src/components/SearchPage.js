import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as BooksAPI from '../BooksAPI';
import Book from './Book';

class SearchPage extends Component {
  state = {
      query: '',
      queryResults: [],
      searchError: false,
  }

search = (query) => {
    if(this.state.query.length > 0) {
        BooksAPI.search(query).
            then((queryResults) => {
                this.setState(() => ({
                    queryResults,
                    searchError: false,
                }));
            }).
            catch(() => {
                this.setState(() => ({
                    queryResults: [],
                    searchError: true
                }));
            });
    } else {
        this.setState(() => ({
            queryResults: []
        }));
    }
}

updateQuery = (query) => {
    this.setState(() => ({
        query
    }), this.search(query));
}

render() {
    console.log(this.props.userBooksIds);
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
                {this.state.query ?
                    <ol className="books-grid">
                        {this.state.queryResults && this.state.queryResults.filter((book) => (
                            this.props.userBooksIds.every(element => (
                                element !== book.id
                            ))
                        )).map((book) => (
                            <li key={book.id}>
                                <Book
                                    book={book}
                                    onBookShelfChange={this.props.onBookShelfChange}
                                />
                            </li>
                        ))}
                    </ol>
                    : <p>No search results to display</p>}
            </div>
        </div>
    );
}
}

SearchPage.propTypes = {
    onBookShelfChange: PropTypes.func.isRequired,
    userBooksIds: PropTypes.array.isRequired,
};

export default SearchPage;
