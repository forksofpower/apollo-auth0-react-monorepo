import React from "react";

type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
};

interface Props {
  users: User[];
}

const UserList: React.FC<Props> = ({ users }: Props) => {
  return (
    <>
      {users.map((user: User) => (
        <div key={user.id}>
          {`${user.firstName} ${user.lastName}`}
          <small>{user.email}</small>
        </div>
      ))}
    </>
  );
};

export default UserList;
