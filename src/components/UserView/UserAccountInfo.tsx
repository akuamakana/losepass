import { useState } from 'react';
import { User } from '../../types/User';
import { parseDate } from '../../utils/parseDate';
import { Card } from '../Card/Card';
import { CardHeader } from '../Card/CardHeader';
import { UserLabel } from './UserLabel';
import { IoMdEyeOff, IoMdEye } from 'react-icons/io';

interface UserAccountInfoProps {
  user: User;
}

export const UserAccountInfo: React.FC<UserAccountInfoProps> = ({ user }) => {
  const [privacy, setPrivacy] = useState(true);
  const masked = '*************';

  return (
    <Card>
      <CardHeader className="flex">
        <h1 className="text-2xl">Account Info</h1>
        {privacy ? <IoMdEyeOff size={26} onClick={() => setPrivacy(!privacy)} /> : <IoMdEye size={26} onClick={() => setPrivacy(!privacy)} />}
      </CardHeader>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <UserLabel label="UUID" value={user.login.uuid} />
          <UserLabel label="Username" value={user.login.username} />
          <UserLabel label="Password" value={privacy ? masked : user.login.password} />
          <UserLabel label="Salt" value={user.login.salt} />
          <UserLabel label="MD5" value={user.login.md5} />
          <UserLabel label="SHA1" value={user.login.sha1} />
          <UserLabel label="SHA256" value={user.login.sha256} />
        </div>
        <div>
          <UserLabel label="ID Name" value={user.id.name} />
          <UserLabel label="ID Value" value={user.id.value} />
          <UserLabel label="Registered" value={parseDate(user.registered.date)} />
          <UserLabel label="Account Age" value={user.registered.age.toString()} />
        </div>
      </div>
    </Card>
  );
};
