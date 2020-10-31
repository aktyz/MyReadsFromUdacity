import React from 'react';
import { render } from '@testing-library/react';
import MyReads from './MyReads';
import { staticBooksMock } from './__mock__/mockData';

describe('MyReads', () => {
    it('should render three bookshelfs', () => {
        const myReadsComponent = render(<MyReads staticBooks = { staticBooksMock } />);
        expect(myReadsComponent).toMatchSnapshot();
    });
});
