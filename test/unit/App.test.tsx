import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../src/App';

describe('App', () => {
  it('should render the app title', () => {
    render(<App />);
    expect(
      screen.getByText('LLM Engineering Week 2 Exercise')
    ).toBeInTheDocument();
  });

  it('should display initial count of 0', () => {
    render(<App />);
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  });

  it('should increment count when button is clicked', () => {
    render(<App />);
    const incrementButton = screen.getByText('Increment');

    fireEvent.click(incrementButton);
    expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();

    fireEvent.click(incrementButton);
    expect(screen.getByText(/Count: 2/i)).toBeInTheDocument();
  });

  it('should reset count to 0 when reset button is clicked', () => {
    render(<App />);
    const incrementButton = screen.getByText('Increment');
    const resetButton = screen.getByText('Reset');

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(screen.getByText(/Count: 2/i)).toBeInTheDocument();

    fireEvent.click(resetButton);
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  });
});
