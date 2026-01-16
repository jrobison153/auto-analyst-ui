import { create } from 'zustand';

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

/**
 * Example Zustand store for counter state management.
 * Demonstrates lightweight global state management.
 */
export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: (): void => set((state) => ({ count: state.count + 1 })),
  decrement: (): void => set((state) => ({ count: state.count - 1 })),
  reset: (): void => set({ count: 0 }),
}));
