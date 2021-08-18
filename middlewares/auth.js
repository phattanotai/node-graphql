const express = require('express');
const passport = require('passport');
const LocalStrategy  = require('passport-local').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;
const dotenv = require('dotenv');
const log = require('../global/log');
const jwt  = require('jsonwebtoken')
dotenv.config();
const model = require('../global/sequelize.config');
const secret = process.env._secret;

passport.use(new BearerStrategy(async (token, done) => {
    jwt.verify(token, secret, function(err, decoded) {
      if (err){
        log.error(err)
      } 
      const user = decoded;
      // log.warn(decoded)
      done(null, user || undefined);
    });
}));

const middleware = express();
middleware.use(passport.initialize());
middleware.use(passport.session());
module.exports  = middleware;
