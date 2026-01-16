/**
 * Custom hook that demonstrates extracting reusable logic.
 * @param initialValue - The initial boolean value
 * @returns An object containing the current value and a toggle function
 */
export function useToggle(initialValue = false): {
  value: boolean;
  toggle: () => void;
} {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  return { value, toggle };
}

import { useState, useCallback } from 'react';
