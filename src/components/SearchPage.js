import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as BooksAPI from '../BooksAPI';
import Book from './Book';

class SearchPage extends Component {
  state = {
      query: '',
      queryResults: [],
  }

updateQuery = (query) => {
    this.setState(() => ({
        query: query
    }));
}

static getDerivedStateFromProps = () => {
    if(this.state.query) {
        // ask API and update queryResults
        BooksAPI.search(this.state.query).
            then((queryResults) => {
                this.setState(() => {
                    queryResults;
                });
            });
        return true;
    } else return false;
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
                <ol className="books-grid"></ol>
                {this.state.queryResults.map((book) => (
                    <li key={book.id}>
                        <Book
                            book={book}
                            //onBookShelfChange={props.onBookShelfChange}
                        />
                    </li>
                ))}
            </div>
            <p>{this.state.query}</p>
        </div>
    );
}
}

export default SearchPage;
