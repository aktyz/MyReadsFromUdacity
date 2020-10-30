import * as React from 'react';
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
