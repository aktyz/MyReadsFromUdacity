import React from 'react';
import { fireEvent, getByText, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App', () => {
    it('should match snapshot', () => {
        const appComponent = render(<App />);
        expect(appComponent).toMatchSnapshot();
    });

    it('should open Search page when plus button is clicked', () => {
      const appComponent = render(<App />);
      expect(screen.queryByText(/MyReads/i)).toBeVisible();
      fireEvent.click(screen.queryByText(/Add a book/i));
      expect(appComponent).toMatchSnapshot();
    });

    it('should go back to the reader\'s Bookshelf when go back button is clicked', () => {
      const appComponent = render(<App />);
      fireEvent.click(screen.queryByText(/Add a book/i));
      expect(appComponent).toMatchSnapshot();
      fireEvent.click(screen.queryByText(/Close/i));
      expect(appComponent).toMatchSnapshot();
    })
});
