import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('should match snapshot', () => {
        const appComponent = render(<App />);
        expect(appComponent).toMatchSnapshot();
    });
});
