import React from "react";
import { User } from "./graphql";
import useUsers from "./hooks/useUsers";

const UserList: React.FC = () => {
  const { users, usersLoading } = useUsers();

  return (
    <>
      {!usersLoading
        ? users.map((user: User) => (
            <div key={user.id}>
              {`${user.firstName} ${user.lastName}`}
              <small>{user.email}</small>
            </div>
          ))
        : "loading users..."}
    </>
  );
};

export default UserList;
