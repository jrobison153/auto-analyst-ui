# LLM Engineering Week 2 Exercise

A modern React Single Page Application built with TypeScript, Vite, and following current best practices (2025).

## Tech Stack

- **React 18**: Modern UI library with concurrent rendering
- **TypeScript**: Strongly-typed JavaScript for better DX
- **Vite**: Next-generation frontend tooling for fast development
- **TailwindCSS**: Utility-first CSS framework
- **TanStack Query**: Powerful data synchronization for server state
- **Zustand**: Lightweight state management
- **Vitest**: Fast unit testing framework
- **Testing Library**: Best practices for component testing

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

## Installation

```bash
npm install
```

## Project Structure

```
.
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── ui/         # Base UI components
│   │   └── features/   # Feature-specific components
│   ├── hooks/          # Custom React hooks
│   ├── stores/         # Zustand stores
│   ├── lib/            # Utilities
│   ├── types/          # TypeScript types
│   ├── App.tsx         # Root component
│   └── main.tsx        # Entry point
├── test/
│   ├── unit/           # Unit tests (mirrors src structure)
│   └── acceptance/     # E2E acceptance tests
└── dist/               # Build output
```

## Available Scripts

### Development
- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Testing
- `npm test` - Run tests in watch mode
- `npm run test:ui` - Run tests with UI dashboard
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:unit` - Run only unit tests
- `npm run test:acceptance` - Run only acceptance tests

### Code Quality
- `npm run lint` - Lint the code
- `npm run lint:fix` - Lint and fix issues automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

### Cleanup
- `npm run clean` - Remove build artifacts and coverage reports

## Development Guidelines

Please refer to `.github/copilot-instructions.md` for comprehensive coding standards including:

### Core Principles
- **Modularity**: Small, focused, single-responsibility modules
- **Testing**: 80%+ branch coverage requirement with unit tests for all files
- **Dependency Inversion**: Depend on abstractions, inject dependencies
- **Low Complexity**: Cyclomatic complexity ≤3 per function
- **Documentation**: JSDoc comments for all public APIs
- **Expressive Code**: Descriptive, intention-revealing names

### React Best Practices
- ✅ Functional components only (no class components)
- ✅ Custom hooks for reusable logic
- ✅ TanStack Query for server state
- ✅ Zustand for lightweight global state
- ✅ Tailwind CSS for styling
- ✅ Testing Library for component tests
- ✅ TypeScript strict mode
- ✅ Accessibility-first approach

## Key Features

- ⚡️ Lightning-fast HMR with Vite
- 🎨 Tailwind CSS with JIT compilation
- 🔍 ESLint + Prettier configured
- 🧪 Vitest with React Testing Library
- 📦 Path aliases (`@/` → `src/`)
- 🎯 TypeScript strict mode
- 📊 Coverage reporting
- 🔄 React Query for data fetching

## Architecture Patterns

### Component Design
- Extract reusable logic into custom hooks
- Keep components focused and composable
- Use proper TypeScript types for props
- Follow single responsibility principle

### State Management
- **Local State**: `useState` for component-specific state
- **Server State**: TanStack Query for API data
- **Global State**: Zustand stores when needed

### Testing Strategy
- Unit tests for all components, hooks, and utilities
- Integration tests for feature flows
- Acceptance tests for critical user journeys
- Maintain 80%+ branch coverage

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open http://localhost:3000 in your browser

4. Start building! Edit `src/App.tsx` to get started.

## Learn More

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [TailwindCSS](https://tailwindcss.com/docs)
- [TanStack Query](https://tanstack.com/query/latest)
- [Vitest](https://vitest.dev/)
{
  "name": "llm-eng-week-2-exercise",
  "version": "1.0.0",
  "description": "LLM Engineering Week 2 Exercise",
  "main": "dist/index.js",
  "scripts": {
    "build": "tsc",
    "dev": "ts-node src/index.ts",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:unit": "jest --testPathPattern=test/unit",
    "test:acceptance": "jest --testPathPattern=test/acceptance",
    "lint": "eslint src test --ext .ts",
    "lint:fix": "eslint src test --ext .ts --fix",
    "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
    "format:check": "prettier --check \"src/**/*.ts\" \"test/**/*.ts\"",
    "clean": "rm -rf dist coverage"
  },
  "keywords": [
    "typescript",
    "llm",
    "gradio"
  ],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/jest": "^29.5.11",
    "@types/node": "^20.10.6",
    "@typescript-eslint/eslint-plugin": "^6.17.0",
    "@typescript-eslint/parser": "^6.17.0",
    "eslint": "^8.56.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-prettier": "^5.1.2",
    "jest": "^29.7.0",
    "prettier": "^3.1.1",
    "ts-jest": "^29.1.1",
    "ts-node": "^10.9.2",
    "typescript": "^5.3.3"
  },
  "dependencies": {
    "@gradio/client": "^0.10.1"
  }
}

