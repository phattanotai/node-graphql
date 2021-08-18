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
    lottoType,
    authType
  } = require('../types');
  
  const getLottoType = {
    type: new GraphQLList(lottoType),
    resolve: async function (_, args, context) {
      const result = await context.Model.LottoType.findAll();
      return result;
    }
  };
  
 
  
  //----------------------------------------------
  module.exports = {
    getLottoType,
  }