import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import App from '../components/App';

test('renders testing link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/blockstack boilerplate/i);
  expect(linkElement).toBeInTheDocument();
});
