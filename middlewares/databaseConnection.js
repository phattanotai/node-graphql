const express = require('express');
const model = require('../global/sequelize.config');
const log = require('../global/log');
let loop = 0;
const connect = async function (req, res, next) {
    const testMaster = await model.testMaster();
    if(!testMaster){
        if(loop === 0){
            log.warn(loop,'Database Server cannot connect..');
        }
        loop++;
        res.send({
            error: 'Database connot connect '
        })
    }else{
        loop = 0;
        next();
    }
  }

const middleware = express();
middleware.use(connect);
module.exports = middleware;