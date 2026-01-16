# GitHub Copilot Instructions

## Code Quality Standards

When generating code for this project, please follow these guidelines:

### Modularity
- Break down functionality into small, focused modules
- Each module should have a single, well-defined responsibility
- Prefer composition over inheritance
- Keep files small and cohesive (ideally under 200 lines)

### Testing Requirements
- **Every source file must have corresponding unit tests**
- **Unit tests should be placed in a folder named `test/unit` at the root of the project**
- Test files should be named `*.test.ts` or `*.spec.ts`
- Mirror the source directory structure within the test directory (e.g., `src/services/foo.ts` → `test/unit/services/foo.test.ts`)
- Aim for high code coverage (minimum 80% branch coverage)
- Use a testing framework like Jest
- Write tests that are independent and can run in any order
- Use test-driven development (TDD) principles when possible
- Create Acceptance tests for critical user flows that cover end-to-end scenarios
- Acceptance tests should be placed in `test/acceptance` folder
- Use test doubles (mocks, stubs) to isolate units under test

### Dependency Inversion
- **Invert dependencies to facilitate testing and maintainability**
- Depend on abstractions (interfaces/types), not concrete implementations
- Use dependency injection for all external dependencies
- Make dependencies explicit through constructor parameters or function arguments
- This allows for easy mocking and testing in isolation

### Cyclomatic Complexity
- **Keep cyclomatic complexity of any function or method at 3 or less**
- Avoid deeply nested conditionals and loops
- Extract complex logic into smaller, well-named helper functions
- Use early returns to reduce nesting
- Prefer guard clauses over nested if statements

### Code Documentation
- Add JSDoc comments for all public functions, methods, and classes
- Include:
  - Brief description of what the code does
  - `@param` tags for all parameters with types and descriptions
  - `@returns` tag describing the return value
  - `@throws` tag for any exceptions that may be thrown
  - `@example` blocks for complex functions
- Document non-obvious business logic with inline comments
- Keep comments up-to-date with code changes

### Expressive Code
- **Use descriptive names for functions, variables, classes, and methods**
- Names should clearly communicate intent and purpose
- Avoid abbreviations unless they are widely recognized (e.g., `id`, `url`)
- Use verb phrases for functions (e.g., `calculateTotal`, `fetchUserData`)
- Use noun phrases for variables and classes (e.g., `userProfile`, `OrderProcessor`)
- Boolean variables should be prefixed with `is`, `has`, `should`, etc.
- Avoid generic names like `data`, `info`, `handle`, `process` without context

## Examples

### Good Function Structure
```typescript
/**
 * Calculates the total price including tax and discount.
 * @param basePrice - The original price before tax and discount
 * @param taxRate - The tax rate as a decimal (e.g., 0.08 for 8%)
 * @param discountPercentage - The discount percentage (0-100)
 * @returns The final price after applying tax and discount
 * @throws {Error} If basePrice is negative or taxRate is invalid
 */
function calculateFinalPrice(
  basePrice: number,
  taxRate: number,
  discountPercentage: number
): number {
  validatePrice(basePrice);
  validateTaxRate(taxRate);
  
  const discountedPrice = applyDiscount(basePrice, discountPercentage);
  return applyTax(discountedPrice, taxRate);
}
```

### Dependency Injection Pattern
```typescript
// Define interface (abstraction)
interface IDataRepository {
  fetch(id: string): Promise<Data>;
}

// Depend on abstraction, not implementation
class DataService {
  constructor(private readonly repository: IDataRepository) {}
  
  async getData(id: string): Promise<Data> {
    return this.repository.fetch(id);
  }
}
```

### Low Cyclomatic Complexity
```typescript
// BAD: Complexity = 5
function processOrder(order: Order): void {
  if (order.isPaid) {
    if (order.items.length > 0) {
      if (order.hasValidAddress) {
        if (order.inStock) {
          shipOrder(order);
        }
      }
    }
  }
}

// GOOD: Complexity = 1 per function
function processOrder(order: Order): void {
  if (!canProcessOrder(order)) return;
  shipOrder(order);
}

function canProcessOrder(order: Order): boolean {
  return order.isPaid && hasValidItems(order) && order.hasValidAddress && order.inStock;
}

function hasValidItems(order: Order): boolean {
  return order.items.length > 0;
}
```

## TypeScript Specific Guidelines
- Use strict TypeScript settings (already configured in tsconfig.json)
- Prefer `interface` over `type` for object shapes
- Use `readonly` for immutable properties
- Avoid `any` type; use `unknown` if type is truly unknown
- Leverage TypeScript's type system for compile-time safety

## Testing Guidelines
- Use descriptive test names that explain the behavior being tested
- Follow the Arrange-Act-Assert (AAA) pattern
- Mock external dependencies using interfaces
- Test edge cases and error conditions
- Write tests before implementing features when possible
- Use Vitest for unit testing (configured in vitest.config.ts)
- Use @testing-library/react for component testing
- Use @testing-library/user-event for simulating user interactions

## React Specific Guidelines

### Component Structure
- **Always use functional components** (no class components)
- Use TypeScript for all components with proper prop type definitions
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks
- Co-locate related files (component, styles, tests) together

### Component Patterns
```typescript
// Define props interface
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

// Functional component with explicit return type
export function Button({ onClick, children, variant = 'primary' }: ButtonProps): JSX.Element {
  return <button onClick={onClick}>{children}</button>;
}
```

### Hooks Best Practices
- **Extract reusable logic into custom hooks**
- Custom hooks must start with `use` prefix
- Use `useMemo` for expensive calculations
- Use `useCallback` for memoizing callback functions
- Follow Rules of Hooks (only call at top level, only in React functions)
- Use `useEffect` sparingly; prefer React Query for data fetching

### State Management
- **Local state**: Use `useState` or `useReducer` for component-specific state
- **Server state**: Use TanStack Query (React Query) for server data fetching and caching
- **Global state**: Use Zustand for lightweight global state management
- Avoid prop drilling; use composition or context when needed
- Keep state as local as possible

### Data Fetching
- **Use TanStack Query for all server state** (configured in main.tsx)
- Avoid useEffect for data fetching
- Leverage React Query's caching and background refetching
- Use Suspense boundaries for loading states where appropriate
```typescript
import { useQuery } from '@tanstack/react-query';

function UserProfile({ userId }: { userId: string }): JSX.Element {
  const { data, isLoading, error } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>{data.name}</div>;
}
```

### Performance Optimization
- Use `React.memo` for expensive components that receive same props
- Memoize expensive calculations with `useMemo`
- Memoize callbacks passed to children with `useCallback`
- Use code splitting with `React.lazy()` and dynamic imports
- Avoid inline object/array creation in render (causes re-renders)

### Styling with Tailwind CSS
- Use Tailwind utility classes for styling (configured)
- Follow mobile-first responsive design approach
- Extract repeated patterns into reusable components
- Use Prettier plugin for automatic class sorting (configured)
- Avoid inline styles; prefer Tailwind classes

### Accessibility
- Use semantic HTML elements (`<button>`, `<nav>`, `<main>`, etc.)
- Include ARIA attributes when necessary
- Ensure keyboard navigation works (tab, enter, escape)
- Test with screen readers
- Provide meaningful alt text for images
- Ensure sufficient color contrast

### File Organization
```
src/
├── components/       # Reusable UI components
│   ├── ui/          # Base UI components (Button, Input, etc.)
│   └── features/    # Feature-specific components
├── hooks/           # Custom React hooks
├── stores/          # Zustand stores for global state
├── lib/             # Utilities and helpers
├── services/        # API services and data fetching
├── types/           # TypeScript types/interfaces
└── pages/           # Page components
```

### React Testing
- Test component behavior, not implementation details
- Use @testing-library/react queries (getByRole, getByText, etc.)
- Simulate user interactions with fireEvent or userEvent
- Test accessibility with screen reader queries
- Mock external dependencies and API calls
```typescript
import { render, screen, fireEvent } from '@testing-library/react';

describe('Button', () => {
  it('should call onClick when clicked', () => {
    let clicked = false;
    render(<Button onClick={() => { clicked = true }}>Click</Button>);
    
    fireEvent.click(screen.getByText('Click'));
    expect(clicked).toBe(true);
  });
});
```

### Error Handling
- Use Error Boundaries to catch component errors
- Handle async errors in React Query error states
- Provide user-friendly error messages
- Log errors for debugging (consider error tracking service)

### TypeScript with React
- Define explicit prop types with interfaces
- Use `React.FC` sparingly; prefer explicit return types
- Leverage discriminated unions for variant props
- Use generics for reusable components
- Avoid `any`; use proper types or `unknown`

### Build & Development Tools
- **Vite**: Fast development server and build tool (configured)
- **ESLint**: Code linting with React plugins (configured)
- **Prettier**: Code formatting with Tailwind plugin (configured)
- Hot Module Replacement (HMR) for instant updates
- Path aliases configured (`@/` maps to `src/`)

