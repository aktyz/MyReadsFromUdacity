import React from 'react';
import { render } from '@testing-library/react';
import Bookshelf from './Bookshelf';
import { bookshelfTitleMock, staticBooksMock } from './__mock__/mockData';

describe('Bookshelf', () => {
  it('should render its title and books received', () => {
    const bookshelfComponent = render(<Bookshelf bookshelfTitle = { bookshelfTitleMock } shelfBooks = { staticBooksMock } />);
    expect(bookshelfComponent).toMatchSnapshot();
  });
});
