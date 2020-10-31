import React from 'react';
import { render } from '@testing-library/react';
import Book from './Book';
import { staticBooksMock } from './__mock__/mockData';

describe('Book', () => {
  it('should render book representation', () => {
    const bookComponent = render(<Book
                                    bookCoverURL = {staticBooksMock[0].bookCoverURL}
                                    bookTitle = {staticBooksMock[0].bookTitle}
                                    bookAuthors = {staticBooksMock[0].bookAuthors} />);
    expect(bookComponent).toMatchSnapshot();
  });
});
