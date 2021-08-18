const {
    GraphQLBoolean,
    GraphQLObjectType ,
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt
  } = require('graphql');
  

  const lottoType = new GraphQLObjectType({
    name: "lottoType",
    description: "ประเภทหวย",
    fields: () => ({
      lotto_type_id: {
        type: GraphQLInt,
        description: "รหัสหวย",
      },
      lotto_type_name: {
        type: GraphQLString,
        description: "ชื่อหวย",
      },
      lotto_total_award: {
        type: GraphQLString,
        description: "จำนวนรางวัลที่ให้แทง",
      },
      lotto_type_route: {
        type: GraphQLString,
        description: "path url",
      }
    })
  });
  
  const lottoinput = new GraphQLInputObjectType({
    name: "lottoinput",
    description: "input ประเภทหวย",
    fields: () => ({
      lotto_type_id: {
        type: GraphQLInt,
        description: "รหัสหวย",
      },
      lotto_type_name: {
        type: GraphQLString,
        description: "ชื่อหวย",
      },
      lotto_total_award: {
        type: GraphQLString,
        description: "จำนวนรางวัลที่ให้แทง",
      },
      lotto_type_route: {
        type: GraphQLString,
        description: "path url",
      }
    })
  });


  module.exports = {
    lottoinput,
    lottoType
  }