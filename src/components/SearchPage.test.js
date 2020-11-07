import React from 'react';
import { fireEvent, getByPlaceholderText, render } from '@testing-library/react';
import SearchPage from './SearchPage';

describe('SearchPage', () => {
    it('should render search field', () => {
        const onReturnClickMock = jest.fn();
        const searchPageComponent = render(<SearchPage onReturnClick = { onReturnClickMock } />);
        expect(searchPageComponent).toMatchSnapshot();
    });

    it('should update component state when a text is input', () => {
      const onReturnClickMock = jest.fn();
      const inputMock = 'Lahiri';
      const searchPageComponent = render(<SearchPage onReturnClick = { onReturnClickMock } />);
      //const inputNode = screen.getByPlaceohlderText('Search by title or author');
      fireEvent.change(searchPageComponent.getByPlaceholderText(/Search by title or author/i), {
        target: {
          value: inputMock
        }
      });
      expect(searchPageComponent).toMatchSnapshot();
    });
});
