const {
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} = require('graphql');

const {
  userType
} = require('./userType');
const {
  bankAccountType
} = require('./bankType');

const addCreditType = new GraphQLObjectType({
  name: "addCreditType",
  description: "ข้อมูลการแจ้งเติมเครดิต",
  fields: () => ({
    add_credit_id: {
      type: GraphQLInt,
      description: "ลำดับข้อมูลการแจ้งเติมเครดิต",
    },
    add_credit_receipt: {
      type: GraphQLString,
      description: "ข้อมูลหลักฐานการโอนเงิน",
    },
    add_credit_status_id: {
      type: GraphQLString,
      description: "สถานะของข้อมูลสำเร็จหรือไม่สำเร็จ",
    },
    add_credit_trx: {
      type: GraphQLString,
      description: "trx ข้อมูลการแจ้งเติมเครดิต",
    },
    add_credit_amount: {
      type: GraphQLString,
      description: "จำนวนเงินที่โอน",
    },
    add_credit_date: {
      type: GraphQLString,
      description: "วันเวลาที่แจ้งเติมเครดิต",
    },
    add_credit_bank: {
      type:  new GraphQLList(bankAccountType),
      description: "รหัสธนาคาร",
    },
    add_credit_user: {
      type: new GraphQLList(userType),
      description: "ข้อมูลผู้โอนเงิน",
    }
  })
});

const addCreditInput = new GraphQLInputObjectType({
  name: "addCreditInput",
  description: "ข้อมูล Input การแจ้งเติมเครดิต",
  fields: () => ({
    add_credit_id: {
      type: GraphQLInt,
      description: "ลำดับข้อมูลการแจ้งเติมเครดิต",
    },
    add_credit_bank_id: {
      type: GraphQLInt,
      description: "รหัสธนาคาร",
    },
    add_credit_receipt: {
      type: GraphQLString,
      description: "ข้อมูลหลักฐานการโอนเงิน",
    },
    add_credit_status_id: {
      type: GraphQLInt,
      description: "สถานะของข้อมูลสำเร็จหรือไม่สำเร็จ",
    },
    add_credit_trx: {
      type: GraphQLString,
      description: "trx ข้อมูลการแจ้งเติมเครดิต",
    },
    add_credit_amount: {
      type: GraphQLInt,
      description: "จำนวนเงินที่โอน",
    },
    add_credit_date: {
      type: GraphQLString,
      description: "วันเวลาที่แจ้งเติมเครดิต",
    },
    add_credit_user_id: {
      type: GraphQLInt,
      description: "ข้อมูลผู้โอนเงิน",
    }
  })
});


const withdrawCreditType = new GraphQLObjectType({
  name: "withdrawCreditType",
  description: "ข้อมูลการแจ้งถอนเครดิต",
  fields: () => ({
    withdraw_credit_id: {
      type: GraphQLInt,
      description: "ลำดับข้อมูลการแจ้งถอนเครดิต",
    },
    withdraw_credit_amount: {
      type: GraphQLInt,
      description: "จำนวนเครดิตที่ถอน",
    },
    withdraw_credit_trx: {
      type: GraphQLString,
      description: "trx ข้อมูลการแจ้งถอนเครดิต",
    },
    withdraw_credit_bank_number: {
      type: GraphQLString,
      description: "เลขที่บัญชี",
    },
    withdraw_credit_date: {
      type: GraphQLString,
      description: "วันเวลาที่แจ้งถอน",
    },
    withdraw_credit_ststus_id: {
      type: GraphQLString,
      description: "สถานะการแจ้งถอนเครดิต",
    },
    withdraw_credit_bank: {
      type: new GraphQLList(bankAccountType),
      description: "ข้อมูลบัญชีธนาคาร",
    },
    withdraw_credit_user: {
      type: new GraphQLList(userType),
      description: "ข้อมูลผู้ถอนเครดิต",
    }
  })
});

const withdrawCreditInput = new GraphQLInputObjectType({
  name: "withdrawCreditInput",
  description: "ข้อมูลการแจ้งถอนเครดิต",
  fields: () => ({
    withdraw_credit_id: {
      type: GraphQLInt,
      description: "ลำดับข้อมูลการแจ้งถอนเครดิต",
    },
    withdraw_credit_bank_id: {
      type: GraphQLInt,
      description: "ข้อมูลบัญชีธนาคาร",
    },
    withdraw_credit_amount: {
      type: GraphQLInt,
      description: "จำนวนเครดิตที่ถอน",
    },
    withdraw_credit_trx: {
      type: GraphQLString,
      description: "trx ข้อมูลการแจ้งถอนเครดิต",
    },
    withdraw_credit_bank_number: {
      type: GraphQLString,
      description: "เลขที่บัญชี",
    },
    withdraw_credit_date: {
      type: GraphQLString,
      description: "วันเวลาที่แจ้งถอน",
    },
    withdraw_credit_ststus_id: {
      type: GraphQLInt,
      description: "สถานะการแจ้งถอนเครดิต",
    },
    withdraw_credit_user_id: {
      type: GraphQLInt,
      description: "ข้อมูลผู้ถอนเครดิต",
    }
  })
});


const creditActivityType = new GraphQLObjectType({
  name: "creditActivityType",
  description: "ข้อมูลประเภทการเคลื่อนไหวเครดิต",
  fields: () => ({
    credit_activity_id: {
      type: GraphQLInt,
      description: "รหัสข้อมูลประเภทการเคลื่อนไหวเครดิต",
    },
    credit_activity_name: {
      type: GraphQLInt,
      description: "ชื่อข้อมูลประเภทการเคลื่อนไหวเครดิต",
    },
  })
});

const creditActivityInput = new GraphQLInputObjectType({
  name: "creditActivityInput",
  description: "ข้อมูล Input ประเภทการเคลื่อนไหวเครดิต",
  fields: () => ({
    credit_activity_id: {
      type: GraphQLInt,
      description: "รหัสข้อมูลประเภทการเคลื่อนไหวเครดิต",
    },
    credit_activity_name: {
      type: GraphQLInt,
      description: "ชื่อข้อมูลประเภทการเคลื่อนไหวเครดิต",
    },
  })
});

module.exports = {
  addCreditType,
  addCreditInput,
  withdrawCreditType,
  withdrawCreditInput,
  creditActivityType,
  creditActivityInput
}