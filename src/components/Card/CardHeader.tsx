export const CardHeader: React.FC<{ className?: string }> = ({ children, className }) => {
  return <div className={`items-center justify-between mb-2 ${className}`}>{children}</div>;
};
