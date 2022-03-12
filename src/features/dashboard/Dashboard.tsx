import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Card } from '../../components/Card/Card';
import { CardHeader } from '../../components/Card/CardHeader';
import { Pagination } from '../../components/Pagination';
import { SearchBar } from '../../components/SearchBar';
import { UsersTable } from '../../components/UsersTable';
import { fetchUsersAsync, selectPaginatedUsers, selectUser } from './dashboardSlice';
import { Logo } from '../../components/Logo';

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectPaginatedUsers);
  const lastUser = useAppSelector(selectUser);

  const handleOnClick = () => {
    navigate(`/user/${lastUser?.login.uuid}`);
  };

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="flex items-center justify-between">
        <Logo />
        <a href="/" className="bg-red-500 text-white py-2 px-6 rounded">
          Logout
        </a>
      </div>

      <div className="grid bg-gray-50 rounded p-6 gap-6">
        <Card>
          <CardHeader className="flex">
            <h1 className="text-2xl">Users</h1>
            <SearchBar />
          </CardHeader>
          <UsersTable users={users} />
          <Pagination />
        </Card>
        <Card>
          <CardHeader>
            <h1 className="text-2xl">Last Viewed User</h1>
          </CardHeader>
          {lastUser ? (
            <div onClick={handleOnClick} className="flex gap-4 cursor-pointer hover:bg-gray-300 rounded p-2">
              <img src={lastUser?.picture.thumbnail} alt="last user" className="rounded-full" />
              <div>
                <p className="font-bold">
                  {lastUser?.name.title} {lastUser?.name.first} {lastUser?.name.last}
                </p>
                <p>{lastUser?.email}</p>
              </div>
            </div>
          ) : (
            <div className="text-gray-500">No user viewed yet...</div>
          )}
        </Card>
      </div>
    </div>
  );
};
