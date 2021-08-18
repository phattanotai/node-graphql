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
  description: "ข้อมูลผู้ใช้",
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
    balance_credit: {
      type: GraphQLInt,
      description: "จำนวนเครดิตที่เหลือ",
    },
    userType: {
      type: new GraphQLList(userTypeType),
      description: "usersType of users",
    }
  })
});

const userInput = new GraphQLInputObjectType({
  name: "usersInput",
  description: "ข้อมูล Input ผู้ใช้",
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
    balance_credit: {
      type: GraphQLInt,
      description: "จำนวนเครดิตที่เหลือ",
    },
  })
});

const userTypeType = new GraphQLObjectType({
  name: "userTypeType",
  description: "ข้อมูลประเภทผู้ใช้",
  fields: () => ({
    user_type_id: {
      type: GraphQLInt,
      description: "user_type_id of the usersType",
    },
    user_type_name: {
      type: GraphQLString,
      description: "user_type_name of the usersType",
    },
    user_type_detail: {
      type: GraphQLString,
      description: "user_type_detail of usersType",
    },
    user_type_rate: {
      type: GraphQLInt,
      description: "user_type_rate of usersType",
    },
    user_type_percent: {
      type: GraphQLInt,
      description: "user_type_percent of usersType",
    },
    user_type_active_ststus: {
      type: GraphQLBoolean,
      description: "user_type_active_ststus of usersType",
    },
  })
});

const userTypeInput = new GraphQLInputObjectType({
  name: "userTypeInput",
  description: "ข้อมูล Input ประเภทผู้ใช้",
  fields: () => ({
    user_type_id: {
      type: GraphQLInt,
      description: "user_type_id of the usersType",
    },
    user_type_name: {
      type: GraphQLString,
      description: "user_type_name of the usersType",
    },
    user_type_detail: {
      type: GraphQLString,
      description: "user_type_detail of usersType",
    },
    user_type_rate: {
      type: GraphQLInt,
      description: "user_type_rate of usersType",
    },
    user_type_percent: {
      type: GraphQLInt,
      description: "user_type_percent of usersType",
    },
    user_type_active_ststus: {
      type: GraphQLBoobean,
      description: "user_type_active_ststus of usersType",
    },
  })
});


const authType = new GraphQLObjectType({
  name: "authType",
  description: "ข้อมูลการเข้าใช้งานระบบ",
  fields: () => ({
    accessToken: {
      type: GraphQLString,
      description: "accessToken of login",
    },
    registered: {
      type: GraphQLBoolean,
      description: "ลงทะเบียนสำเร็จหรือไม่",
    },
    isUsername: {
      type: GraphQLBoolean,
      description: "มี username อยู่หรือไม่",
    },
    success: {
      type: GraphQLBoolean,
      description: "ดำเนินการสำเร็จหรือไม่",
    },
    userData: {
      type: new GraphQLList(userType),
      description: "userData",
    }
  })
});

//--------------------------------------
module.exports = {
  userType,
  userInput,
  userTypeType,
  userTypeInput,
  authType
}