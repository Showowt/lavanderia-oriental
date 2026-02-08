interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`bg-white border border-oriental-gray p-6 ${hover ? 'transition-all hover:-translate-y-1 hover:shadow-lg cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
