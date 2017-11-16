import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { split } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

const GRAPHQL_WS_URL = 'ws://localhost:60000/subscriptions/v1/cj9y9wqfp000m0161hjrzjtct';
const GRAPHQL_HTTP_URL = 'http://localhost:60000/simple/v1/cj9y9wqfp000m0161hjrzjtct';

const httpLink = createHttpLink({ uri: GRAPHQL_HTTP_URL });

const wsLink = new WebSocketLink({
    uri: GRAPHQL_WS_URL,
    options: {
        reconnect: true,
    },
});

const link = split(
    ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
    },
    wsLink,
    httpLink,
);

export const client = new ApolloClient({
    link,
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});