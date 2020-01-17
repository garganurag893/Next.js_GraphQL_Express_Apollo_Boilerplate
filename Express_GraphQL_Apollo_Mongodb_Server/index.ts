import * as Promise from 'bluebird';
import * as mongoose from 'mongoose';
import config from './config/env';
import Express from './config/express';

// Promisify All The Mongoose
Promise.promisifyAll(mongoose);

// Connecting Mongo DB
mongoose.connect(config.db, {
  bufferMaxEntries: 0,
  keepAlive: true,
  reconnectInterval: 500,
  reconnectTries: 30,
  socketTimeoutMS: 0,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.db}`);
});

const ExpressServer = new Express();
ExpressServer.init();

// listen on port config.port
ExpressServer.httpServer.listen(process.env.PORT || config.port, () => {
  console.log(`🚀  Server ready at ${config.port}`);
  console.log(
    `🚀 Server ready at http://localhost:${config.port}${ExpressServer.server.graphqlPath}`
  );
  console.log(
    `🚀 Subscriptions ready at ws://localhost:${config.port}${ExpressServer.server.subscriptionsPath}`
  );
});
