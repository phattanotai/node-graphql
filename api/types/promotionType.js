const {
    GraphQLBoolean,
    GraphQLObjectType ,
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt
  } = require('graphql');

  
  const userType = new GraphQLObjectType({
    name: "usersType",
    description: "Detail of The users",
    fields: () => ({
        user_id: {
        type: GraphQLInt,
        description: "id of the users",
      },
      user_name: {
        type: GraphQLString,
        description: "name of the users",
      },
      user_address: {
        type: GraphQLString,
        description: "address of users",
      },
      user_tel: {
        type: GraphQLString,
        description: "tel of users",
      },
      user_email: {
        type: GraphQLString,
        description: "email of users",
      },
      user_username: {
        type: GraphQLString,
        description: "username of users",
      },
      user_password: {
        type: GraphQLString,
        description: "password of users",
      },
      userType: {
        type: new GraphQLList(userTypeType),
        description: "usersType of users",
      }
    })
  });
  
  const userInput = new GraphQLInputObjectType({
    name: "usersInput",
    description: "Detail of The users",
    fields: () => ({
      user_id: {
        type: GraphQLInt,
        description: "id of the users",
      },
      user_name: {
        type: GraphQLString,
        description: "name of the users",
      },
      user_address: {
        type: GraphQLString,
        description: "address of users",
      },
      user_tel: {
        type: GraphQLString,
        description: "tel of users",
      },
      user_email: {
        type: GraphQLString,
        description: "email of users",
      },
      user_type_id: {
        type: GraphQLInt,
        description: "user_type_id of the users",
      },
      user_username: {
        type: GraphQLString,
        description: "username of users",
      },
      user_password: {
        type: GraphQLString,
        description: "password of users",
      },
    })
  });

  
  module.exports = {

  }