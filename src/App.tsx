import { useState } from 'react';

/**
 * Main application component.
 * @returns The root App component
 */
function App(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-blue-400">
            LLM Engineering Week 2 Exercise
          </h1>
          <p className="mt-4 text-gray-300">
            React + TypeScript + Vite + TailwindCSS
          </p>
        </header>

        <main>
          <div className="rounded-lg bg-gray-800 p-8 shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold">Counter Example</h2>
            <p className="mb-4 text-lg">Count: {count}</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setCount((c) => c + 1)}
                className="rounded bg-blue-500 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-600"
              >
                Increment
              </button>
              <button
                onClick={() => setCount(0)}
                className="rounded bg-gray-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-gray-700"
              >
                Reset
              </button>
            </div>
          </div>
        </main>

        <footer className="mt-16 text-center text-gray-400">
          <p>Built with modern React best practices</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
