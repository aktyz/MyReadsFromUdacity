import React from 'react';
import { render } from '@testing-library/react';
import BookShelfChanger from './BookShelfChanger';

describe('BookShelfChanger', () => {
    it('should render change shelf menu', () => {
        const onBookShelfChangeMock = jest.fn();
        const bookShelfChangerComponent = render(
            <BookShelfChanger
                selectedValue='read'
                onBookShelfChange={onBookShelfChangeMock}/>
        );
        expect(bookShelfChangerComponent).toMatchSnapshot();
    });
});
