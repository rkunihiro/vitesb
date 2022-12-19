import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { createPersistedQueryLink } from "@apollo/client/link/persisted-queries";
import fetch from "cross-fetch";
import { sha256 } from "crypto-hash";

const uri = "http://localhost:4000/";

const httpLink = new HttpLink({ uri, fetch });

const persistedQueryLink = createPersistedQueryLink({ sha256, useGETForHashedQueries: true });

const link = persistedQueryLink.concat(httpLink);

export const client = new ApolloClient({ cache: new InMemoryCache(), link });
