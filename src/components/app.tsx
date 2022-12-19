import { ApolloProvider } from "@apollo/client";

import { client } from "../client";

import { Button } from "./button";
import { Message } from "./message";

export function App(): JSX.Element {
    return (
        <ApolloProvider client={client}>
            <div>Hello,World!</div>
            <Message />
            <Button
                title="Click"
                onPress={(...args: unknown[]) => {
                    console.log(`click`, args);
                }}
            />
        </ApolloProvider>
    );
}
