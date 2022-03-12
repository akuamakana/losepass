import { Column } from '../../types/Column';
import { TableBody } from './TableBody';
import { TableHeader } from './TableHeader';

interface TablePros {
  columns: Column[];
  data: any;
}

export const Table: React.FC<TablePros> = ({ columns, data }: any) => {
  return (
    <table className="table-auto w-full">
      <TableHeader columns={columns} />
      <TableBody columns={columns} data={data} />
    </table>
  );
};
