import React from "react";
import "./App.css";
import useUsers from "./hooks/useUsers";
import UserList from "./UserList";

const App: React.FC = () => {
  const { userList, usersLoading } = useUsers();
  return <div>{!usersLoading && <UserList users={userList} />}</div>;
};

export default App;
