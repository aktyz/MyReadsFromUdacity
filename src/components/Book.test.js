import React from 'react';
import { render } from '@testing-library/react';
import Book from './Book';
import { bookMock } from './__mock__/mockData';

describe('Book', () => {
    it('should render book representation', () => {
        const bookComponent = render(<Book
            bookCoverURL = {bookMock.bookCoverURL}
            bookTitle = {bookMock.bookTitle}
            bookAuthors = {bookMock.bookAuthors} />);
        expect(bookComponent).toMatchSnapshot();
    });
});
