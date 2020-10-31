import React from 'react';
import { shallow, expect } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../src/App';

describe('App', () => {
  afterEach(cleanup)

  it('should match snapshot', () => {
    const appComponent = shallow(<App />);
    expect(appComponent).toMatchSnapshot();
  });
});
