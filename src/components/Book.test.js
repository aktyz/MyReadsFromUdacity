import React from 'react';
import { render } from '@testing-library/react';
import Book from './Book';
import { bookMock } from './__mock__/mockData';

describe('Book', () => {
    it('should render book representation', () => {
        const onBookShelfChangeMock = jest.fn();
        const bookComponent = render(<Book
            book={bookMock}
            onBookShelfChange={onBookShelfChangeMock} />);
        expect(bookComponent).toMatchSnapshot();
    });
});
