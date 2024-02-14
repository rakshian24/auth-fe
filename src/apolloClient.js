import { ApolloClient, InMemoryCache } from "@apollo/client";
import { SERVER_ENDPOINT_URI } from "./constants";

const client = new ApolloClient({
  uri: SERVER_ENDPOINT_URI,
  cache: new InMemoryCache(),
});

export default client;
