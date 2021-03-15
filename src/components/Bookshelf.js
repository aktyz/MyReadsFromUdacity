import * as React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

export function Bookshelf(props) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.bookshelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid" >
                    {props.shelfBooks.map((book) => (
                        <li key={book.id}>
                            <Book
                                book={book}
                                onBookShelfChange={props.onBookShelfChange}
                            />
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
    onBookShelfChange: PropTypes.func.isRequired,
};

export default Bookshelf;
