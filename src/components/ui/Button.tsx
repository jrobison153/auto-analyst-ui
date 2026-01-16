interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

/**
 * Reusable button component with variants.
 * @param props - Button component props
 * @returns A styled button element
 */
export function Button({
  onClick,
  children,
  variant = 'primary',
  className = '',
}: ButtonProps): JSX.Element {
  const baseStyles =
    'rounded px-4 py-2 font-semibold text-white transition-colors';

  const variantStyles = getVariantStyles(variant);

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </button>
  );
}

/**
 * Gets the CSS classes for a button variant.
 * @param variant - The button variant
 * @returns CSS class string for the variant
 */
function getVariantStyles(variant: 'primary' | 'secondary'): string {
  if (variant === 'primary') {
    return 'bg-blue-500 hover:bg-blue-600';
  }
  return 'bg-gray-600 hover:bg-gray-700';
}
