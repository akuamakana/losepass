import { User } from '../../types/User';
import { Card } from '../Card/Card';
import { CardHeader } from '../Card/CardHeader';
import { UserLabel } from './UserLabel';
import { parseDate } from '../../utils/parseDate';
import { useCountdown } from '../../hooks/useCountdown';

interface UserPersonalInfoProps {
  user: User;
}

export const UserPersonalInfo: React.FC<UserPersonalInfoProps> = ({ user }) => {
  const countdownDate = useCountdown(user.registered.date);

  return (
    <Card>
      <CardHeader>
        <h1 className="text-2xl">Personal Info</h1>
      </CardHeader>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <UserLabel label="Email" value={user.email} />
          <UserLabel label="Address" value={`${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state} ${user.location.postcode}`} />
          <UserLabel label="Country" value={user.location.country} />
          <UserLabel label="Latitude" value={user.location.coordinates.latitude} />
          <UserLabel label="Longitude" value={user.location.coordinates.longitude} />
          <UserLabel label="Timezone Description" value={user.location.timezone.description} />
        </div>
        <div>
          <UserLabel label="Phone" value={user.phone} />
          <UserLabel label="Cell" value={user.cell} />
          <UserLabel label="Timezone Offset" value={user.location.timezone.offset} />
          <UserLabel label="DOB" value={parseDate(user.dob.date)} />
          <UserLabel label="Time until next birthday" value={countdownDate} />
          <UserLabel label="Age" value={user.dob.age.toString()} />
        </div>
      </div>
    </Card>
  );
};
