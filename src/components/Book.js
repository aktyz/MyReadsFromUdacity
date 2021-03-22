import * as React from 'react';
import PropTypes from 'prop-types';

import BookShelfChanger from './BookShelfChanger';

export function Book(props) {
    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{width: 128, height: 193, backgroundImage: `url("${props.book.imageLinks ? props.book.imageLinks.thumbnail : ''}")`}}/>
                <BookShelfChanger
                    book={props.book}
                    onBookShelfChange={props.onBookShelfChange}/>
            </div>
            <div className="book-title">{props.book.title ? props.book.title : ''}</div>
            <div className="book-authors">{props.book.authors ? props.book.authors.join(', ') : ''}</div>
        </div>);
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onBookShelfChange: PropTypes.func.isRequired,
};

export default Book;
