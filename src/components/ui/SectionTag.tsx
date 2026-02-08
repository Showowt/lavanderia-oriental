interface SectionTagProps {
  children: React.ReactNode;
}

export default function SectionTag({ children }: SectionTagProps) {
  return (
    <span className="inline-block bg-oriental-blue/10 text-oriental-blue px-4 py-1 text-sm font-medium mb-4">
      {children}
    </span>
  );
}
