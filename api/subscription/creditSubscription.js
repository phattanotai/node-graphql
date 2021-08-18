const {
    GraphQLList,
    GraphQLNonNull,
} = require('graphql');

const socket = require('../../global/socket');

const {
    addCreditType,
    withdrawCreditType,
    authType
} = require('../types');

const addCreditSubscribe = {
    type: new GraphQLList(addCreditType),
    subscribe: () => socket.asyncIterator('EVENT_ADD_CREDIT')
};

const withdrawCreditSubscribe = {
    type: new GraphQLList(withdrawCreditType),
    subscribe: () => socket.asyncIterator('EVENT_WITHDRAW_CREDIT')
};

module.exports = {
    addCreditSubscribe,
    withdrawCreditSubscribe,
};