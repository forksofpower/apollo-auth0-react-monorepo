import React from "react";
import "./App.css";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import UserList from "./UserList";

const USER_LIST = gql`
  query usersListAll {
    usersListAll {
      users {
        email
        firstName
        id
        lastName
      }
    }
  }
`;

const App: React.FC = () => {
  const { loading, data } = useQuery(USER_LIST);

  return <div>{!loading && <UserList users={data.usersListAll.users} />}</div>;
};

export default App;
