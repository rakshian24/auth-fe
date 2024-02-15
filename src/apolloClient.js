import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { APP_TOKEN_KEY, SERVER_ENDPOINT_URI } from "./constants";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({ uri: SERVER_ENDPOINT_URI });

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem(APP_TOKEN_KEY) || "",
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

export default client;
