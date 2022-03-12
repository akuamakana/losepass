import { useAppSelector } from '../app/hooks';
import { selectUser } from '../features/dashboard/dashboardSlice';
import { UserAccountInfo } from './User/UserAccountInfo';
import { UserBar } from './User/UserBar';
import { UserPersonalInfo } from './User/UserPersonalInfo';

export const UserView: React.FC = () => {
  const user = useAppSelector(selectUser);

  if (!user) {
    return (
      <a href="/dashboard" className="underline">
        Error! Return to dashboard!
      </a>
    );
  }

  return (
    <div className="px-6">
      <UserBar user={user} />
      <div className="grid bg-gray-50 rounded p-6 gap-6">
        <UserPersonalInfo user={user} />
        <UserAccountInfo user={user} />
      </div>
    </div>
  );
};
