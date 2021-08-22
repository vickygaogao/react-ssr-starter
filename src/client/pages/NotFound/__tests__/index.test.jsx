import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../index';

test('render NotFound page', () => {
  render(<NotFound />);

  const element = screen.getByText(/Page not found/i);

  expect(element).toBeInTheDocument();
});
