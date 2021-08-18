const graphql = require('graphql');
const GraphQLList = graphql.GraphQLList;
const GraphQLInt = graphql.GraphQLInt;
const userdata = [
  {user_name: 'test1',user_id: 1},
  {user_name: 'test2',user_id: 2},
  {user_name: 'test3',user_id: 3},
  {user_name: 'test4',user_id: 4},
  {user_name: 'test5',user_id: 5},
  {user_name: 'test6',user_id: 6},
  {user_name: 'test7',user_id: 7},
  {user_name: 'test8',user_id: 8},
  {user_name: 'test9',user_id: 9},
]

const {
  userType,
  userTypeType
} = require('../types');

const getUsers = {
  type: new GraphQLList(userType),
  resolve: async function (_, args,context) {
    const users = await context.Class.UserClass.getUsersData(context,args);
    return users
  }
}

const getUserTypes = {
  type: new GraphQLList(userTypeType),
  resolve: async function (_, args,context) {
    const userType = await context.Model.UserType.findAll();
    return userType
  }
}

const getUserById = {
  type: new GraphQLList(userType),
  args: {
    user_id: {
      type: GraphQLInt
    }
  },
  resolve: function (_, args,context) {
    // const res = [];
    // for(const i of userdata){
      
    //   if(i.user_id === args.user_id){
    //     res.push(i);
    //   }
    // }
    // console.log(res)
    return res;
  }
}


//----------------------------------------------
module.exports = {
  getUsers, 
  getUserById,
  getUserTypes
}