const {
  GraphQLString,
  GraphQLList,
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLInt
} = require('graphql');

const {
  addCreditType,
  withdrawCreditType,
  authType
} = require('../types');

const getAddCredit = {
  type: new GraphQLList(addCreditType),
  resolve: async function (_, args, context) {
    const result = await context.Model.AddCredit.findAll();
    return result;
  }
};

const getWithDrawCredit = {
  type: new GraphQLList(withdrawCreditType),
  resolve: async function (_, args, context) {
    const result = await context.Model.WithdrawCredit.findAll();
    return result;
  }
};

//----------------------------------------------
module.exports = {
  getWithDrawCredit,
  getAddCredit,
}