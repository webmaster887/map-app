import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the map component', () => {
  render(<App />);
  const linkElement = screen.getByText(/FugroMap/i);
  expect(linkElement).toBeInTheDocument();
});
