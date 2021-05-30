import React from "react";
import "./App.css";
import useUsers from "./hooks/useUsers";
import UserList from "./UserList";

const App: React.FC = () => {
  const { users, usersLoading } = useUsers();
  return <div>{!usersLoading && <UserList users={users} />}</div>;
};

export default App;
