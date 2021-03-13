import * as React from 'react';
import PropTypes from 'prop-types';

import BookShelfChanger from './BookShelfChanger';

export function Book(props) {
    const handleSelectChange = newValue => {
        props.onBookShelfChange(newValue, props.bookTitle);
    };
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url("${props.bookCoverURL}")`}}/>
                <BookShelfChanger selectedValue={props.bookShelf} onBookShelfChange={handleSelectChange}/>
            </div>
            <div className="book-title">{props.bookTitle}</div>
            <div className="book-authors">{props.bookAuthors.join(', ')}</div>
        </div>);
}

Book.propTypes = {
    bookShelf: PropTypes.string.isRequired,
    bookCoverURL: PropTypes.string.isRequired,
    bookTitle: PropTypes.string.isRequired,
    bookAuthors: PropTypes.array.isRequired,
    onBookShelfChange: PropTypes.func.isRequired,
};

export default Book;
