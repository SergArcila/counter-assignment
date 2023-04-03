// Import necessary react testing library helpers
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
// Import the Counter component
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
});

test('renders counter message', () => {
  // Check if the Counter header is rendered in the document
  const counterHeader = screen.getByText(/Counter/i);
  expect(counterHeader).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Check if the initial count value is 0
  const initialCount = screen.getByTestId('count');
  expect(initialCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Click the increment button and check if the count is incremented
  const incrementButton = screen.getByText('+');
  userEvent.click(incrementButton);
  const incrementedCount = screen.getByTestId('count');
  expect(incrementedCount).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Click the decrement button and check if the count is decremented
  const decrementButton = screen.getByText('-');
  userEvent.click(decrementButton);
  const decrementedCount = screen.getByTestId('count');
  expect(decrementedCount).toHaveTextContent('-1');
});
