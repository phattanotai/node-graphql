const {
  GraphQLList,
  GraphQLNonNull,
} = require('graphql');

const {
  addCreditInput,
  withdrawCreditInput,
  authType
} = require('../types');

const addCredit = {
  type: new GraphQLList(authType),
  args: {
    dataAdd: {
      type: new GraphQLNonNull(addCreditInput)
    },
  },
  resolve: async function (_, args, context) {
    context.log.debug('addCredit');
    let result = await context.Model.AddCredit.create(args.dataAdd);
    result = result.get({
      plain: true
    });
    if (result) {
      context.socket.publish('EVENT_USER_ADD', {
        addCreditSub: [result]
      });
      return [{
        success: true
      }];
    } else {
      return [{
        success: false
      }];
    }
  }
};

const withdrawCredit = {
  type: new GraphQLList(authType),
  args: {
    dataAdd: {
      type: new GraphQLNonNull(withdrawCreditInput)
    },
  },
  resolve: async function (_, args, context) {
    context.log.debug('withdrawCredit');
    let result = await context.Model.withdrawCredit.create(args.dataAdd);
    result = result.get({
      plain: true
    });
    if (result) {
      context.socket.publish('EVENT_USER_ADD', {
        withdrawCreditSubscribe: [result]
      });
      return [{
        success: true
      }];
    } else {
      return [{
        success: false
      }];
    }
  }
}


//----------------------------------------------------
module.exports = {
  withdrawCredit,
  addCredit,
}