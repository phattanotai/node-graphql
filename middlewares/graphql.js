const passport = require('passport');
const graphqlHTTP =  require('express-graphql');
const { graphqlExpress} = require('graphql-server-express')
const schema =  require('../api');
const auth = require('../api/AuthSchema');
const socket = require('../global/socket');
const Model = require('../global/sequelize.config');
const dotenv = require('dotenv');
const log = require('../global/log');
const Class = require('../api/class');
dotenv.config();
const PORT = process.env.port || 3000;
module.exports = graphqlHTTP((req, res) => {
    return new Promise((resolve, reject) => {
        const next = (user, info = {}) => {
                if (user) {
                    resolve({
                        schema,
                        graphiql: process.env.NODE_ENV !== 'production', 
                        endpoint: '/api',
                        subscriptionsEndpoint: `ws://localhost:${PORT}/subscriptions`,
                        context: {
                            user,
                            socket,
                            Model,
                            Class,
                            log
                        },
                        tracing: true,
                    });
                }else{
                    resolve({
                        schema: auth,
                        graphiql: process.env.NODE_ENV !== 'production', 
                        context: {
                            user,
                            socket,
                            Model,
                            Class,
                            log
                        },
                        tracing: true,
                    });
                
                }
        };
        passport.authenticate('bearer', {session: false},async (err, user) => {
            next(user);
        })(req, res, next);

    });
});
