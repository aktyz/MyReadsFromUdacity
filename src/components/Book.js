import * as React from 'react';
import PropTypes from 'prop-types';

import { BookShelfChanger } from './BookShelfChanger';

export function Book(props) {
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url("${props.bookCoverURL}")`}}/>
                <BookShelfChanger />
            </div>
            <div className="book-title">{props.bookTitle}</div>
            <div className="book-authors">{props.bookAuthors}</div>
        </div>);
}

Book.propTypes = {
    bookCoverURL: PropTypes.string.isRequired,
    bookTitle: PropTypes.string.isRequired,
    bookAuthors: PropTypes.string.isRequired
};

export default Book;
