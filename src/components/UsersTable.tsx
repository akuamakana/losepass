import { User } from '../types/User';
import { Table } from './Table/Table';

export const UsersTable: React.FC<{ users: User[] }> = ({ users }) => {
  const columns = [
    { path: ['name', 'first'], label: 'First Name' },
    { path: ['name', 'last'], label: 'Last Name' },
    { path: ['email'], label: 'Email' },
    { path: ['login', 'username'], label: 'Username' },
  ];

  return <Table columns={columns} data={users} />;
};
