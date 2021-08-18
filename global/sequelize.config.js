const {Sequelize,Op,QueryTypes} = require('sequelize');
const isReachable = require('is-reachable');
const dotenv = require('dotenv');
dotenv.config();

const options = {
  database:  process.env._database,
  username:  process.env._username,
  password: process.env._password,
  port: process.env._port,
  masterHost: process.env._masterHost,
  slaveHost:  process.env._slaveHost,
};
// console.log(options)
const reconnectOptions = {
  max_retries: 999,
  onRetry: function (count) {
    console.log("connection lost, trying to reconnect (" + count + ")");
  }
};
const sequelize = new Sequelize(options.database, null, null, {
  dialect: 'postgres',
  // logging: false,
  reconnect: reconnectOptions || true,
  port: options.port,
  replication: {
    read: [
      {
        host: options.masterHost,
        username: options.username,
        password: options.password,
      },
    ],
    write: {
      host: options.masterHost,
      username: options.username,
      password: options.password,
    },
  },
  pool: {
    max: 5,
    idle: 30000,
  },
  query:{
    raw: true
  }
});

const testSlaveConnect = async function () {
  const checkHost = await isReachable(options.slaveHost + ':' + options.port);
  return checkHost;
};
const testMasterConnect = async function () {
  const checkHost = await isReachable(options.masterHost + ':' + options.port);
  return checkHost;
};


const users = require('../api/model/userModel')(sequelize, Sequelize);
const bank = require('../api/model/bankModel')(sequelize, Sequelize);
const credit = require('../api/model/creditModel')(sequelize, Sequelize);
const lotto = require('./../api/model/lottoModel')(sequelize, Sequelize);

// Box.hasMany(GpsObject, {
//   foreignKey: 'object_box_id',
// });

// GpsObject.belongsTo(Box, {
//   foreignKey: 'object_box_id',
// });

// Log.hasMany(GpsObject, {
//   foreignKey: 'object_imei',
// });
// GpsObject.belongsTo(Log, {
//   sourceKey: 'log_imei',
//   foreignKey: 'object_imei',
// });


module.exports = {
  sequelize: sequelize,
  Sequelize: Sequelize,
  options: options,
  testMaster: testMasterConnect,
  testSlave: testSlaveConnect,
  Op: Op,
  QueryTypes: QueryTypes,
  ...users,
  ...credit,
  ...bank,
  ...lotto
};