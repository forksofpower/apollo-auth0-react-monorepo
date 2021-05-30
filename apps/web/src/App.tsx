import React from "react";
import "./App.css";
import useUsers from "./hooks/useUsers";
import UserList from "./UserList";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  const { users, usersLoading } = useUsers();
  return (
    <BrowserRouter>{!usersLoading && <UserList users={users} />}</BrowserRouter>
  );
};

export default App;
