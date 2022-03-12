import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, setFilter as sF } from '../features/dashboard/dashboardSlice';

export const useFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const setFilter = (filter: string) => {
    dispatch(sF(filter));
  };

  return { filter, setFilter };
};
