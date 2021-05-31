import { AppState, Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { useHistory } from "react-router";

type Props = {
  children?: React.ReactNode;
};

const AuthProvider: React.FC<Props> = ({ children }: Props) => {
  const history = useHistory();

  const onRedirectCallback = (appState: AppState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain="pmjones88.us.auth0.com"
      clientId="9TclQYulvo4q1gSgfOJTbfVGzXIN1mVw"
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      useRefreshTokens={true}
      scope="read:all"
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
