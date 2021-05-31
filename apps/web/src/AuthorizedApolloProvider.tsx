import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/link-context";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

interface Props {
  children?: React.ReactNode;
}

const AuthorizedApolloProvider: React.FC<Props> = ({ children }: Props) => {
  const { getAccessTokenSilently, getAccessTokenWithPopup } = useAuth0();

  const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql",
    fetchOptions: { credentials: "include" },
  });

  const authLink = setContext(async () => {
    let token = "";
    try {
      token = await getAccessTokenSilently({
        audience: "localhost:4000",
        scope: "read:all",
      });
    } catch (error) {
      token = await getAccessTokenWithPopup({
        audience: "localhost:4000",
        scope: "read:all",
      });
    }

    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default AuthorizedApolloProvider;
