import { User } from '../../types/User';
import { get } from '../../utils/get';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../features/dashboard/dashboardSlice';
import { useDispatch } from 'react-redux';

interface TableBodyProps {
  data: User[];
  columns: {
    path: string;
    label: string;
  }[];
}

export const TableBody: React.FC<TableBodyProps> = ({ data, columns }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const renderCell = (item: any, column: any) => get(item, column.path);
  const createKey = (item: any, column: any) => item + column.path;

  const handleOnClick = (item: User) => {
    dispatch(setUser(item));
    navigate(`/user/${item.login.uuid}`);
  };

  return (
    <tbody>
      {data.map((item, i) => (
        <tr onClick={() => handleOnClick(item)} className={`border-t-2 cursor-pointer hover:bg-gray-300`} key={item.login.uuid}>
          {columns.map((column: { path: string; label: string }) => (
            <td className="py-4 px-2" key={createKey(item.login.uuid, column)}>
              {renderCell(item, column)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
