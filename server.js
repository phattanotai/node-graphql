// server.js
const express = require('express');
const graphqlHTTP = require('express-graphql');
const cluster = require('cluster');
const bodyParser = require('body-parser');
const cors = require('cors');
const graphqlMiddleware = require('./middlewares/graphql');
const expressPlayground = require('graphql-playground-middleware-express').default
const numCPUs = require('os').cpus().length;
const dotenv = require('dotenv');
const {
  SubscriptionServer
} = require('subscriptions-transport-ws');
const {
  subscribe,
  execute
} = require('graphql');
const {
  createServer
} = require('http');
const schema = require('./api');
const log = require('./global/log');
dotenv.config();
const app = express();
const jwt  = require('jsonwebtoken')
// import middlewares
const authMiddleware = require('./middlewares/auth');
const databaseMiddleware = require('./middlewares/databaseConnection');
const secret = process.env._secret;
const PORT = process.env.port || 3000;
const corsOptions = {
  origin: '*',
  credentials: true,
  optionsSuccessStatus: 200,
};

if (cluster.isMaster) {
  log.info('Server running on port:', PORT);
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on('death', function (worker) {
    log.warn('worker ' + worker.pid + ' died');
  });

} else {
  // use middlewares
  app.use(require('express-status-monitor')());
  app.use(cors(corsOptions), bodyParser.json());
  app.use(authMiddleware);
  app.use(databaseMiddleware);

  app.get('/api/playground', expressPlayground({
    endpoint: '/api/graphql',
    subscriptionsEndpoint: `ws://localhost:${PORT}/subscriptions`
  }));
  app.use('/api/graphql', graphqlMiddleware);
  app.use('/api/auth', graphqlHTTP({
    schema: require('./api/AuthSchema'),
    graphiql: true
  }));

  const server = createServer(app);
  server.listen(PORT, error => {
    if (error) {
      throw error;
    }
    new SubscriptionServer({
      execute,
      subscribe,
      schema,
      onConnect: (connectionParams, webSocket) => {
        if (connectionParams.authToken) {
          jwt.verify(connectionParams.authToken, secret, function(err, decoded) {
            if (err){
              log.err(err);
              throw new Error('Missing auth token!'); 
            } 
          });
        }
 
        throw new Error('Missing auth token!'); 
      } 
    }, {
      server: server,
      path: '/subscriptions',
    });

  });
}