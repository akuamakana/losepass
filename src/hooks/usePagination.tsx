import { useDispatch } from 'react-redux';
import { useAppSelector } from '../app/hooks';
import { decrementPage, incrementPage, selectPages, selectUsersCount, setPageLimit } from '../features/dashboard/dashboardSlice';

export const usePagination = () => {
  const dispatch = useDispatch();
  const [currentPage, totalPages, pageLimit] = useAppSelector(selectPages);
  const usersCount = useAppSelector(selectUsersCount);

  const nextPage = () => {
    dispatch(incrementPage());
  };

  const prevPage = () => {
    dispatch(decrementPage());
  };

  const setItemLimit = (limit: number) => {
    dispatch(setPageLimit(limit));
  };

  return { usersCount, currentPage, totalPages, pageLimit, nextPage, prevPage, setItemLimit };
};
