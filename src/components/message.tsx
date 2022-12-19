import { useQuery } from "@apollo/client";
import { gql } from "graphql-tag";

const getMessageQuery = gql`
    query getMessage {
        message
    }
`;

export function Message(): JSX.Element {
    const { data, error, loading } = useQuery(getMessageQuery);
    if (loading) {
        return <div>loading...</div>;
    }
    if (error) {
        return <div>{error.message}</div>;
    }
    return <div>{data.message}</div>;
}
