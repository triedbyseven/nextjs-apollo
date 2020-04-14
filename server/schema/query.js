import { gql } from 'apollo-server-micro';

const query = gql`
    type Query {
        getData: String!
    }
`;

module.exports = {
    query
}