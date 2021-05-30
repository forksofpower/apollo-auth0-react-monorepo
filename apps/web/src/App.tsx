import React, { useEffect } from "react";
import "./App.css";
import UserList from "./UserList";
import { User, useUsersListAllQuery } from "./graphql";

const useUserList = () => {
  const { loading, data, error } = useUsersListAllQuery();
  return {
    loading,
    error,
    users: data?.usersListAll.users as User[],
  };
};

const App: React.FC = () => {
  const { loading, users } = useUserList();
  return <div>{!loading && <UserList users={users} />}</div>;
};

export default App;
