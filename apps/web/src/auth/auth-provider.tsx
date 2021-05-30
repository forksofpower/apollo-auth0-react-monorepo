import { AppState, Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { useHistory } from "react-router";

type Props = {
  children?: React.ReactNode;
};

const AuthProvider: React.FC<Props> = ({ children }: Props) => {
  const history = useHistory();

  const onRedirectCallback = (appState: AppState) => {
    history.push(appState.returnTo || window.location.pathname);
  };
  return (
    <Auth0Provider
      domain="https://pmjones88.us.auth0.com"
      clientId="5CXqpZf4UPKTDpcZBobR3NFBFvwp5mQB"
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
