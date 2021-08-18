const {
    GraphQLSchema,
    GraphQLObjectType
} = require('graphql');
const queries = require('./queries');
const subscriptions = require('./subscription');
const mutations = require('./mutation');

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'QueryType',
        description: "query of Graphql",
        fields: queries,
    }),
    mutation: new GraphQLObjectType({
        name: "MutationType",
        description: "mutation of Graphql",
        fields: mutations
    }),
    subscription: new GraphQLObjectType({
        name: "SubscriptionType",
        description: "subscription of Graphql",
        fields: subscriptions
    })
});