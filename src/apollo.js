import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = new HttpLink({
  uri: process.env.VUE_APP_GRAPHQL_URL
    || process.env.VUE_APP_PROD_GRAPHQL_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem('auth-token');

  return {
    headers: {
      ...headers,
      'x-token': token || '',
    },
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
