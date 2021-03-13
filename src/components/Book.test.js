import React from 'react';
import { render } from '@testing-library/react';
import Book from './Book';

describe('Book', () => {
    it('should render book representation', () => {
        const bookComponent = render(<Book
            bookCoverURL = 'bookCoverURLMock'
            bookTitle = 'To Kill a Mockingbird'
            bookAuthors = 'Harper Lee' />);
        expect(bookComponent).toMatchSnapshot();
    });
});
