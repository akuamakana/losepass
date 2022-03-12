import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, setFilter } from '../features/dashboard/dashboardSlice';

export const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return <input value={filter} className="border-b-[0.1px] border-gray-300 focus:outline-none" onChange={(e) => dispatch(setFilter(e.target.value))} type="text" placeholder="Filter users by name" />;
};
