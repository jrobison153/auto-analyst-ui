import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useToggle } from '../../../src/hooks/useToggle';

describe('useToggle', () => {
  it('should initialize with false by default', () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current.value).toBe(false);
  });

  it('should initialize with provided value', () => {
    const { result } = renderHook(() => useToggle(true));

    expect(result.current.value).toBe(true);
  });

  it('should toggle value from false to true', () => {
    const { result } = renderHook(() => useToggle(false));

    act((): void => {
      result.current.toggle();
    });

    expect(result.current.value).toBe(true);
  });

  it('should toggle value from true to false', () => {
    const { result } = renderHook(() => useToggle(true));

    act((): void => {
      result.current.toggle();
    });

    expect(result.current.value).toBe(false);
  });
});
