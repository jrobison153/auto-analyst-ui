import { ChatInterface } from './components/features/ChatInterface';

/**
 * Main application component.
 * @returns The root App component
 */
function App(): JSX.Element {
  const handleSendMessage = (message: string): void => {
    console.log('Message sent:', message);
  };

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
            <h2 className="mb-4 text-2xl font-semibold">Chat Interface</h2>
            <ChatInterface onSendMessage={handleSendMessage} />
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
