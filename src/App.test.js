import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App', () => {
    it('should match snapshot', () => {
        const appComponent = render(<BrowserRouter><App/></BrowserRouter>);
        expect(appComponent).toMatchSnapshot();
    });
});
