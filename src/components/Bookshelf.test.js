import React from 'react';
import { render } from '@testing-library/react';
import Bookshelf from './Bookshelf';
import { bookshelfTitleMock, bookMock } from './__mock__/mockData';

describe('Bookshelf', () => {
    it('should render its title and books received', () => {
        const onBookShelfChangeMock = jest.fn();
        const bookshelfComponent = render(
            <Bookshelf
                bookshelfTitle={bookshelfTitleMock}
                shelfBooks={[bookMock]}
                onBookShelfChange={onBookShelfChangeMock} />);
        expect(bookshelfComponent).toMatchSnapshot();
    });
});
