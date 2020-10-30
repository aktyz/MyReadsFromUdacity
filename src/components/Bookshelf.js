import * as React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';



export function Bookshelf(props) {

    return (

        <div className="bookshelf">

            <h2 className="bookshelf-title">{props.bookshelfTitle}</h2>

            <div className="bookshelf-books">

                <ol className="books-grid">

                    {props.shelfBooks.map((book) => (

                        <li key={book.bookTitle}>

                            <Book

                                bookTitle={book.bookTitle}

                                bookAuthors={book.bookAuthors}

                                bookCoverURL={book.bookCoverURL}/>

                        </li>

                    ))}

                </ol>

            </div>

        </div>

    );

}

Bookshelf.propTypes = {
    bookshelfTitle: PropTypes.string.isRequired,
    shelfBooks: PropTypes.array.isRequired
};

export default Bookshelf;
