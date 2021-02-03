import React from 'react';
import { render } from '@testing-library/react';
import BookShelfChanger from './BookShelfChanger';

describe('BookShelfChanger', () => {
    it('should render change shelf menu', () => {
        const bookShelfChangerComponent = render(<BookShelfChanger />);
        expect(bookShelfChangerComponent).toMatchSnapshot();
    });
});
