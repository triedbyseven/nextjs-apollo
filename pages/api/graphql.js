import { ApolloServer } from 'apollo-server-micro';

// Resolvers
const Query = require('../../server/resolver/Query');
const Mutation = require('../../server/resolver/Mutation');

// Schema
const { query } = require('../../server/schema/query');
const { mutation } = require('../../server/schema/mutation');
const { data } = require('../../server/schema/data');

const resolvers = {
    Query,
    Mutation
}

const apolloServer = new ApolloServer({
    typeDefs: [query, mutation, data],
    resolvers
})

const handler = apolloServer.createHandler({
    path: '/api/graphql'
});

export const config = {
    api: {
        bodyParser: false
    }
}

export default handler;