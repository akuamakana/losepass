import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../app/hooks';
import { decrementPage, incrementPage, selectPages, selectUsersCount, setPageLimit } from '../features/dashboard/dashboardSlice';

export const Pagination: React.FC = () => {
  const dispatch = useDispatch();
  const [currentPage, totalPages, pageLimit] = useAppSelector(selectPages);
  const usersCount = useAppSelector(selectUsersCount);

  return (
    <div className="flex justify-between items-center pt-4">
      <div>Total: {usersCount}</div>
      <div className="flex gap-10 items-center">
        <IoMdArrowBack className="cursor-pointer hover:bg-gray-300" size={22} onClick={() => dispatch(decrementPage())} />
        <p>
          {!totalPages ? 0 : currentPage + 1}/{totalPages}
        </p>
        <IoMdArrowForward className="cursor-pointer hover:bg-gray-300" size={22} onClick={() => dispatch(incrementPage())} />
      </div>
      <select className="bg-white" value={pageLimit} onChange={(e) => dispatch(setPageLimit(parseInt(e.target.value)))}>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  );
};
