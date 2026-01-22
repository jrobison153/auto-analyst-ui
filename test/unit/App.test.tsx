import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../../src/App';

describe('App', () => {
  it('should render the app title', () => {
    render(<App />);
    expect(
      screen.getByText('LLM Engineering Week 2 Exercise')
    ).toBeInTheDocument();
  });

  it('should render the chat interface', () => {
    render(<App />);
    expect(screen.getByText('Chat Interface')).toBeInTheDocument();
  });

  it('should render the message input field', () => {
    render(<App />);
    expect(screen.getByPlaceholderText('Type your message...')).toBeInTheDocument();
  });

  it('should render the send button', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument();
  });
});
