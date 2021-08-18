const {
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} = require('graphql');

const bankType = new GraphQLObjectType({
  name: "ิbankType",
  description: "ข้อมูลธนาคาร",
  fields: () => ({
    bank_id: {
      type: GraphQLInt,
      description: "รหัสธนาคาร",
    },
    bank_name: {
      type: GraphQLString,
      description: "ชื่อธนาคาร",
    },
    bank_nickname: {
      type: GraphQLString,
      description: "ชื่อย่อธนาคาร",
    },
  })
});

const bankInput = new GraphQLInputObjectType ({
  name: "bankInput",
  description: "ข้อมูล Input ธนาคาร",
  fields: () => ({
    bank_id: {
      type: GraphQLInt,
      description: "รหัสธนาคาร",
    },
    bank_name: {
      type: GraphQLString,
      description: "ชื่อธนาคาร",
    },
    bank_nickname: {
      type: GraphQLString,
      description: "ชื่อย่อธนาคาร",
    },
  })
});

const bankAccountType = new GraphQLObjectType({
  name: "bankAccount",
  description: "ข้อมูลบัญชีธนาคาร",
  fields: () => ({
    bank_account_id: {
      type: GraphQLInt,
      description: "ลำดับบัญชีธนาคาร",
    },
    bank_account_name: {
      type: GraphQLString,
      description: "ชื่อบัญชีsนาคาร",
    },
    bank_account_number: {
      type: GraphQLString,
      description: "เลขที่บัญชีsนาคาร",
    },
    bank_id: {
      type: GraphQLString,
      description: "รหัสธนาคาร",
    },
    bank_account_create: {
      type: GraphQLString,
      description: "วันที่เพิ่มบัญชี",
    },
    bank_account_status: {
      type: GraphQLString,
      description: 'สถานะบัญชีธนาคาร',
    },
  })
});

const bankAccountInput = new GraphQLInputObjectType({
  name: "bankAccountInput",
  description: "ข้อมูล Input บัญชีธนาคาร",
  fields: () => ({
    bank_account_id: {
      type: GraphQLInt,
      description: "ลำดับบัญชีธนาคาร",
    },
    bank_account_name: {
      type: GraphQLString,
      description: "ชื่อบัญชีsนาคาร",
    },
    bank_account_number: {
      type: GraphQLString,
      description: "เลขที่บัญชีsนาคาร",
    },
    bank_id: {
      type: GraphQLString,
      description: "รหัสธนาคาร",
    },
    bank_account_create: {
      type: GraphQLString,
      description: "วันที่เพิ่มบัญชี",
    },
    bank_account_status: {
      type: GraphQLInt,
      description: 'สถานะบัญชีธนาคาร',
    },
  })
});

module.exports = {
  bankType,
  bankInput,
  bankAccountInput,
  bankAccountType
};