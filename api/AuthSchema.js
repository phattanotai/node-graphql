const {
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLBoolean
} = require('graphql');

const dotenv = require('dotenv');
dotenv.config();

const secret = process.env._secret || 'super secret';
const jwt  = require('jsonwebtoken');
const {userInput,authType} = require('./types');

const doLogin = {
  type: new GraphQLList(authType),
  args: {
    username: {
      type: GraphQLString
    },
    password: {
      type: GraphQLString
    }
  },
  resolve: async function (_, args,context) {
   context.log.debug('doLogin');
   const user = await context.Class.UserClass.getDatalogin(context,args);
   if(user){
    const dataToken  = {
      user_id: user. user_id,
      user_name: user.user_name,
      user_type_name: user.userType[0].user_type_name,
      user_type_id: user.userType[0].user_type_id
    }
      return [{
        success: true,
        accessToken: jwt.sign(dataToken, secret, { expiresIn: '24h' }),
        userData: [user]
      }]
    } else {
      return [{
        success: false,
        userData: []
      }];
    }
  }
};


const doRepassword = {
  type: new GraphQLList(authType),
  args: {
    username: {
      type: GraphQLString
    },
    user_tel: {
      type: GraphQLString
    },
    password: {
      type: GraphQLString
    }
  },
  resolve: async function (_, args,context) {
    context.log.debug('doRepassword');
    const updated = await  context.Model.Users.update(
      { user_password: args.password },
      { where: {
        user_username: args.username,
        user_tel: args.user_tel
      } }
    );
    
    if(updated[0] > 0){
      return [{
        success: true,
        repassword: true
      }]
    }else{
      return [{
        success: true,
        repassword: false
      }];
    }
   
  }
};

const doRegister = {
  type: new GraphQLList(authType),
  args: {
    userData: {
      type: new GraphQLNonNull(userInput)
    },
  },
  resolve: async function (_, args,context) {
    context.log.debug('doRegister');
    const registerData = args.userData;
    const isUsername = await  context.Model.Users.findOne({
      where: {
         user_username: registerData.user_username,
         user_password: registerData.user_password
      },
    });

    if (!isUsername) {
     let user = await context.Model.Users.create( registerData);
     user = user.get({plain:true});
     if(user){
       const userType = await context.Model.UserType.findOne({
         where: {
           user_type_id: user.user_type_id,
         },
      });

      user.userType = [userType];
      context.socket.publish('EVENT_USER_ADD',{
        regisered: [user]
      })
      return [{
        success: true,
        registered: true,
        isUsername: false,
      }]
     }else{
      return [{
        success: true,
        registered: false,
        isUsername: false
      }]
     }
     
    } else {
      return [{
        success: true,
        registered: false,
        isUsername: true
      }];
    }
  }
};


module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
            name: "queryLogin",
            description: "query of Login",
            fields: {
              doLogin,
            }
          }),
  mutation : new GraphQLObjectType({
        name: "mutationUsers",
        description: "mutation of Login",
        fields: {
          doRegister,
          doRepassword
        }
      }),
})

