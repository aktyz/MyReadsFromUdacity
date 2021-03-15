import React from 'react';
import { render } from '@testing-library/react';
import MyReads from './MyReads';
import { userBooksMock } from './__mock__/mockData';

describe('MyReads', () => {
    it('should render three bookshelfs', () => {
        const onBookShelfChangeMock = jest.fn();
        const myReadsComponent = render(
            <MyReads
                userBooks={userBooksMock}
                onBookShelfChange={onBookShelfChangeMock} />);
        expect(myReadsComponent).toMatchSnapshot();
    });
});
