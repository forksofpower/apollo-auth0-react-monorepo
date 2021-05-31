import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import UserList from "./UserList";

const App: React.FC = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div>
      <Switch>
        <Route exact path="/">
          {isAuthenticated ? (
            <button onClick={() => logout()}>Log Out</button>
          ) : (
            <button onClick={() => loginWithRedirect()}>Log In</button>
          )}
          <p>{isAuthenticated ? "Logged In" : "Logged Out"}</p>
          {isAuthenticated && <UserList />}
        </Route>
      </Switch>
    </div>
  );
};

export default App;
