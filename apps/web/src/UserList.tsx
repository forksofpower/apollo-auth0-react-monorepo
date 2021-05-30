import React from "react";
import { User } from "./graphql";

interface Props {
  users: User[];
}

const UserList: React.FC<Props> = ({ users }: Props) => {
  if (!users) return null;
  return (
    <>
      {users &&
        users.map((user: User) => (
          <div key={user.id}>
            {`${user.firstName} ${user.lastName}`}
            <small>{user.email}</small>
          </div>
        ))}
    </>
  );
};

export default UserList;
