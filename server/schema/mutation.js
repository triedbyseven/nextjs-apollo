import { gql } from 'apollo-server-micro';

const mutation = gql`
    type Mutation {
        putData(argument: String!): Data
    }
`;

module.exports = {
    mutation
}