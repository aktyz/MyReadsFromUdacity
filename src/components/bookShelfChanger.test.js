import React from 'react';
import { render } from '@testing-library/react';
import BookShelfChanger from './BookShelfChanger';
import { bookMock } from './__mock__/mockData';

describe('BookShelfChanger', () => {
    it('should render change shelf menu', () => {
        const onBookShelfChangeMock = jest.fn();
        const bookShelfChangerComponent = render(
            <BookShelfChanger
                book={bookMock}
                selectedValue='read'
                onBookShelfChange={onBookShelfChangeMock}/>
        );
        expect(bookShelfChangerComponent).toMatchSnapshot();
    });
});
