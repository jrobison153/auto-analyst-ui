import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../../../src/components/ui/Button';

describe('Button', () => {
  it('should render children text', () => {
    render(<Button onClick={() => {}}>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    let clicked = false;
    const handleClick = (): void => {
      clicked = true;
    };

    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));

    expect(clicked).toBe(true);
  });

  it('should apply primary variant styles by default', () => {
    render(<Button onClick={() => {}}>Primary</Button>);
    const button = screen.getByText('Primary');

    expect(button.className).toContain('bg-blue-500');
  });

  it('should apply secondary variant styles when specified', () => {
    render(
      <Button onClick={() => {}} variant="secondary">
        Secondary
      </Button>
    );
    const button = screen.getByText('Secondary');

    expect(button.className).toContain('bg-gray-600');
  });
});
