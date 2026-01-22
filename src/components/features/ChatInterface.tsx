import { useState } from 'react';
import { Button } from '../ui/Button';

interface ChatInterfaceProps {
  onSendMessage: (message: string) => void;
}

/**
 * Chat interface component with text input and send button.
 * @param props - ChatInterface component props
 * @returns A chat interface with input field and send button
 */
export function ChatInterface({ onSendMessage }: ChatInterfaceProps): JSX.Element {
  const [messageText, setMessageText] = useState('');

  const handleSendClick = (): void => {
    if (!canSendMessage(messageText)) return;

    sendMessage(messageText);
    clearMessageInput();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (shouldSendOnEnter(event, messageText)) {
      handleSendClick();
    }
  };

  const sendMessage = (message: string): void => {
    onSendMessage(message);
  };

  const clearMessageInput = (): void => {
    setMessageText('');
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..."
        className="flex-1 rounded border border-gray-600 bg-gray-700 px-4 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
        aria-label="Message input"
      />
      <Button
        onClick={handleSendClick}
        variant="primary"
        className="px-6"
      >
        Send
      </Button>
    </div>
  );
}

/**
 * Checks if a message can be sent (not empty or whitespace-only).
 * @param message - The message text to validate
 * @returns True if the message can be sent
 */
function canSendMessage(message: string): boolean {
  return message.trim().length > 0;
}

/**
 * Checks if the Enter key was pressed and message is valid.
 * @param event - The keyboard event
 * @param message - The current message text
 * @returns True if message should be sent
 */
function shouldSendOnEnter(
  event: React.KeyboardEvent<HTMLInputElement>,
  message: string
): boolean {
  return event.key === 'Enter' && canSendMessage(message);
}

