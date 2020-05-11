import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../HomaPage';

describe('<Homepage />', () => {
  it('Contains Match snapshot', () => {
    const { container } = render(<HomePage />);
    expect(container).toMatchSnapshot();
  });
});
