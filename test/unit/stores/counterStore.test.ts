import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useCounterStore } from '../../../src/stores/counterStore';

describe('counterStore', () => {
  beforeEach(() => {
    // Reset the store state before each test
    const { result } = renderHook(() => useCounterStore());
    act(() => {
      result.current.reset();
    });
  });

  it('should initialize with count of 0', () => {
    const { result } = renderHook(() => useCounterStore());

    expect(result.current.count).toBe(0);
  });

  it('should increment count', () => {
    const { result } = renderHook(() => useCounterStore());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  it('should decrement count', () => {
    const { result } = renderHook(() => useCounterStore());

    act(() => {
      result.current.increment();
      result.current.decrement();
    });

    expect(result.current.count).toBe(0);
  });

  it('should reset count to 0', () => {
    const { result } = renderHook(() => useCounterStore());

    act(() => {
      result.current.increment();
      result.current.increment();
      result.current.reset();
    });

    expect(result.current.count).toBe(0);
  });
});
