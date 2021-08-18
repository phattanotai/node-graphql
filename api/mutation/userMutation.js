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
  userInput,
  authType
} = require('../types');

const addUser = {
  type: new GraphQLList(authType),
  args: {
    userData: {
      type: new GraphQLNonNull(userInput)
    },
  },
  resolve: async function (_, args, context) {
    context.log.debug('addUser');
    const registerData = args.userData;
    const isUsername = await context.Model.Users.findOne({
      where: {
        user_username: registerData.user_username,
        user_password: registerData.user_password
      },
    });

    if (!isUsername) {
      let user = await context.Model.Users.create(registerData);
      user = user.get({
        plain: true
      });
      if (user) {
        const userType = await context.Model.UserType.findOne({
          where: {
            user_type_id: user.user_type_id,
          },
        });
        user.userType = [userType];
        context.socket.publish('EVENT_USER_ADD', {
          regisered: [user]
        });
        return [{
          registered: true,
          isUsername: false,
        }];
      } else {
        return [{
          registered: false,
          isUsername: false
        }]
      }

    } else {
      return [{
        registered: false,
        isUsername: true
      }];
    }

  }
};


const updateUser = {
  type: new GraphQLList(authType),
  args: {
    userData: {
      type: new GraphQLNonNull(userInput)
    },
  },
  resolve: async function (_, args, context) {
    context.log.debug('updateUser');
    const updated = await context.Model.Users.update(
      args.userData, {
        where: {
          user_id: args.userData.user_id,
        }
      }
    );
    if (updated[0] > 0) {
      console.log(users)
      return [{
        success: true,
        userData: await context.Model.Users.findAll()
      }]
    } else {
      return [{
        success: false
      }];
    }
  }
}

const deleteUser = {
  type: new GraphQLList(authType),
  args: {
    id: {
      type: GraphQLInt
    }
  },
  resolve: async function (_, args, context) {
    context.log.debug('deleteUser');
    const updated = await context.Model.Users.destroy({
      where: {
        user_id: args.id,
      }
    });
    if (updated > 0) {
      return [{
        success: true,
        userData: await context.Model.Users.findAll()
      }]
    } else {
      return [{
        success: false
      }];
    }
  }
}

//----------------------------------------------------
module.exports = {
  addUser,
  updateUser,
  deleteUser,
}