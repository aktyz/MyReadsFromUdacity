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

                        <Bookshelf bookshelfTitle='Currently Reading' shelfBooks={this.props.staticBooks}/>

                        <Bookshelf bookshelfTitle='Want to Read' shelfBooks={this.props.staticBooks}/>

                        <Bookshelf bookshelfTitle='Read' shelfBooks={this.props.staticBooks}/>

                    </div>

                </div>

            </div>

        );

    }

}

MyReads.propTypes = {
    staticBooks: PropTypes.array.isRequired
};

export default MyReads;
