import React, { Component } from 'react';

import PropTypes from 'prop-types';


class SearchPage extends Component {

  state = {

      query: ''

  }



  updateQuery = (query) => {

      this.setState(() => ({

          query: query

      }));

  }



  render() {

      return (

          <div className="search-books">

              <div className="search-books-bar">

                  <button className="close-search" onClick={this.props.onReturnClick}>Close</button>

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

              </div>

          </div>

      );

  }

}

SearchPage.propTypes = {
    onReturnClick: PropTypes.func.isRequired
};


export default SearchPage;
