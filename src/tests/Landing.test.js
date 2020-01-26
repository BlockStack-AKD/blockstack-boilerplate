import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Landing from '../components/Landing';

test('renders testing link', () => {
  const { getByTestId } = render(<Landing />);
  const app = getByTestId('landingTestID');
  expect(app).toBeInTheDocument();
});