export const UserLabel: React.FC<{ value: string; label: string }> = ({ value, label }: any) => {
  return (
    <div className="border-t-2 py-4 px-2">
      <span className="text-gray-500 text-sm ">{label}</span> <br /> <span className="text-lg">{value || 'N/A'}</span>
    </div>
  );
};
