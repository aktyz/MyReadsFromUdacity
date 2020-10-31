import React from 'react';
import { render } from '@testing-library/react';
import SearchPage from './SearchPage';

describe('SearchPage', () => {
  it('should render search field', () => {
    const updateQueryMock = jest.fn();
    const searchPageComponent = render(<SearchPage onReturnClick = { updateQueryMock } />);
    expect(searchPageComponent).toMatchSnapshot();
  });
});
