import { render, screen } from '@testing-library/react';
import App from './App';
import Dropdown from './components/Dropdown';

test('renders Hello link', () => {
  render(<App />);
  const linkElement = screen.getByText(/for/i);
  expect(linkElement).toBeInTheDocument();
});

it('runs without crashing', () => {
  render(<Dropdown />);
});
