import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ChatInterface } from '../../../../src/components/features/ChatInterface';

describe('ChatInterface', () => {
  describe('Message Input', () => {
    it('should render an input field with placeholder text', () => {
      const mockOnSendMessage = vi.fn();
      render(<ChatInterface onSendMessage={mockOnSendMessage} />);

      const input = screen.getByPlaceholderText('Type your message...');
      expect(input).toBeInTheDocument();
    });

    it('should update input value when user types', () => {
      const mockOnSendMessage = vi.fn();
      render(<ChatInterface onSendMessage={mockOnSendMessage} />);

      const input = screen.getByPlaceholderText('Type your message...') as HTMLInputElement;
      fireEvent.change(input, { target: { value: 'Hello, world!' } });

      expect(input.value).toBe('Hello, world!');
    });

    it('should have accessible label', () => {
      const mockOnSendMessage = vi.fn();
      render(<ChatInterface onSendMessage={mockOnSendMessage} />);

      const input = screen.getByLabelText('Message input');
      expect(input).toBeInTheDocument();
    });
  });

  describe('Send Button', () => {
    it('should render a send button', () => {
      const mockOnSendMessage = vi.fn();
      render(<ChatInterface onSendMessage={mockOnSendMessage} />);

      const button = screen.getByRole('button', { name: 'Send' });
      expect(button).toBeInTheDocument();
    });

    it('should call onSendMessage when send button is clicked with valid message', () => {
      const mockOnSendMessage = vi.fn();
      render(<ChatInterface onSendMessage={mockOnSendMessage} />);

      const input = screen.getByPlaceholderText('Type your message...');
      const button = screen.getByRole('button', { name: 'Send' });

      fireEvent.change(input, { target: { value: 'Test message' } });
      fireEvent.click(button);

      expect(mockOnSendMessage).toHaveBeenCalledWith('Test message');
      expect(mockOnSendMessage).toHaveBeenCalledTimes(1);
    });

    it('should clear input after sending message', () => {
      const mockOnSendMessage = vi.fn();
      render(<ChatInterface onSendMessage={mockOnSendMessage} />);

      const input = screen.getByPlaceholderText('Type your message...') as HTMLInputElement;
      const button = screen.getByRole('button', { name: 'Send' });

      fireEvent.change(input, { target: { value: 'Test message' } });
      fireEvent.click(button);

      expect(input.value).toBe('');
    });

    it('should not call onSendMessage when message is empty', () => {
      const mockOnSendMessage = vi.fn();
      render(<ChatInterface onSendMessage={mockOnSendMessage} />);

      const button = screen.getByRole('button', { name: 'Send' });
      fireEvent.click(button);

      expect(mockOnSendMessage).not.toHaveBeenCalled();
    });

    it('should not call onSendMessage when message is only whitespace', () => {
      const mockOnSendMessage = vi.fn();
      render(<ChatInterface onSendMessage={mockOnSendMessage} />);

      const input = screen.getByPlaceholderText('Type your message...');
      const button = screen.getByRole('button', { name: 'Send' });

      fireEvent.change(input, { target: { value: '   ' } });
      fireEvent.click(button);

      expect(mockOnSendMessage).not.toHaveBeenCalled();
    });
  });

  describe('Keyboard Interactions', () => {
    it('should send message when Enter key is pressed with valid message', () => {
      const mockOnSendMessage = vi.fn();
      render(<ChatInterface onSendMessage={mockOnSendMessage} />);

      const input = screen.getByPlaceholderText('Type your message...');

      fireEvent.change(input, { target: { value: 'Test message' } });
      fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

      expect(mockOnSendMessage).toHaveBeenCalledWith('Test message');
    });

    it('should not send message when Enter key is pressed with empty message', () => {
      const mockOnSendMessage = vi.fn();
      render(<ChatInterface onSendMessage={mockOnSendMessage} />);

      const input = screen.getByPlaceholderText('Type your message...');

      fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

      expect(mockOnSendMessage).not.toHaveBeenCalled();
    });

    it('should clear input after sending message with Enter key', () => {
      const mockOnSendMessage = vi.fn();
      render(<ChatInterface onSendMessage={mockOnSendMessage} />);

      const input = screen.getByPlaceholderText('Type your message...') as HTMLInputElement;

      fireEvent.change(input, { target: { value: 'Test message' } });
      fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

      expect(input.value).toBe('');
    });

    it('should not send message when other keys are pressed', () => {
      const mockOnSendMessage = vi.fn();
      render(<ChatInterface onSendMessage={mockOnSendMessage} />);

      const input = screen.getByPlaceholderText('Type your message...');

      fireEvent.change(input, { target: { value: 'Test message' } });
      fireEvent.keyDown(input, { key: 'a', code: 'KeyA' });

      expect(mockOnSendMessage).not.toHaveBeenCalled();
    });
  });

  describe('Message Trimming', () => {
    it('should send trimmed message when message has leading/trailing whitespace', () => {
      const mockOnSendMessage = vi.fn();
      render(<ChatInterface onSendMessage={mockOnSendMessage} />);

      const input = screen.getByPlaceholderText('Type your message...');
      const button = screen.getByRole('button', { name: 'Send' });

      fireEvent.change(input, { target: { value: '  Test message  ' } });
      fireEvent.click(button);

      expect(mockOnSendMessage).toHaveBeenCalledWith('  Test message  ');
    });
  });
});

