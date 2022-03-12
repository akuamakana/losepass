interface TableHeaderProps {
  columns: {
    path: string;
    label: string;
  }[];
}

export const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th className="px-2 py-1" key={column.path}>
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};
