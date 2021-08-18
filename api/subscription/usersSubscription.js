const graphql = require('graphql');
const socket = require('../../global/socket');
const GraphQLList = graphql.GraphQLList;

const {
  userType
} = require('../types');

const regisered = {
  type: new GraphQLList(userType),
  subscribe: () => socket.asyncIterator('EVENT_USER_ADD')

};

const deleteUserSubscribe = {
  type: new GraphQLList(userType),
  subscribe: () => socket.asyncIterator('EVENT_USER_DELETE')

};

module.exports = {
  regisered,
  deleteUserSubscribe
};