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
                        <li key={book.title}>
                            <Book
                                bookTitle={book.title}
                                bookAuthors={book.authors}
                                bookCoverURL={book.imageLinks.thumbnail}/>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

Bookshelf.propTypes = {
    bookshelfTitle: PropTypes.string.isRequired,
    shelfBooks: PropTypes.array.isRequired,
};

export default Bookshelf;
