import React from 'react';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import SignedIn from '../components/SignedIn';

test('renders testing link', () => {
  const { getByTestId } = render(<SignedIn />);
  const app = getByTestId('signedinTestID');
  expect(app).toBeInTheDocument();
});