// pg config
const exportData = {};
const {
  Pool,
  Client
} = require('pg');

const config = {
  host: '150.107.31.9',
  user: 'postgres',
  password: 'XE82>c9Wt[Hn#3)jB^M4',
  database: 'expressdb',
  port: 2432
};

const pool = new Pool(config);
const client = new Client(config);

exportData.pool = pool;
exportData.client = client;
exportData.DBConfig = config;

module.exports = exportData;