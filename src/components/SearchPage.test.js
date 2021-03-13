import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render } from '@testing-library/react';
import SearchPage from './SearchPage';

describe('SearchPage', () => {
    it('should render search field', () => {
        const searchPageComponent = render(<BrowserRouter><SearchPage /></BrowserRouter >);
        expect(searchPageComponent).toMatchSnapshot();
    });

    it('should update component state when a text is input', () => {
        const inputMock = 'Lahiri';
        const searchPageComponent = render(<BrowserRouter><SearchPage /></BrowserRouter >);
        fireEvent.change(searchPageComponent.getByPlaceholderText(/Search by title or author/i), {
            target: {
                value: inputMock
            }
        });
        expect(searchPageComponent).toMatchSnapshot();
    });
});
