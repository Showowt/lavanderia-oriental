interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'open' | 'closed' | 'soon';
  className?: string;
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variantStyles = {
    default: 'bg-oriental-blue text-white',
    open: 'bg-status-open text-white',
    closed: 'bg-status-closed text-white',
    soon: 'bg-status-soon text-white',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-sm font-medium ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
