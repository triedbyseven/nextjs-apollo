import { gql } from 'apollo-server-micro';

const data = gql`
    type Data {
        id: ID
        someData: String 
    }
`;

module.exports = {
    data
}