import { User } from '../../types/User';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import { IoMdMale, IoMdFemale, IoMdArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

interface UserBarProps {
  user: User;
}

export const UserBar: React.FC<UserBarProps> = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center py-4">
      <IoMdArrowBack onClick={() => navigate('/dashboard')} className="cursor-pointer hover:bg-gray-300" size={30} />
      <img className="rounded-full mx-2" src={user.picture.thumbnail} alt="User" />
      <div className="">
        <h1 className="text-2xl font-bold">
          {user.name.title} {user.name.first} {user.name.last}
        </h1>
        <div className="flex items-center">
          {getUnicodeFlagIcon(user.nat)}
          {user.gender.toLowerCase() === 'male' ? <IoMdMale /> : <IoMdFemale />}
        </div>
      </div>
    </div>
  );
};
