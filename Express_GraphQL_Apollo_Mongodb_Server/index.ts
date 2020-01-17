import Promise from 'bluebird';
import mongoose from 'mongoose';
import Express from './config/express';

// Promisify All The Mongoose
Promise.promisifyAll(mongoose);

// Connecting Mongo DB
mongoose.connect(process.env.db, {
  bufferMaxEntries: 0,
  keepAlive: true,
  reconnectInterval: 500,
  reconnectTries: 30,
  socketTimeoutMS: 0,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${process.env.db}`);
});

const ExpressServer = new Express();
ExpressServer.init();

// listen on port
ExpressServer.httpServer.listen(process.env.PORT || process.env.port, () => {
  console.log(`🚀  Server ready at ${process.env.port}`);
  console.log(
    `🚀 Server ready at http://localhost:${process.env.port}${ExpressServer.server.graphqlPath}`
  );
  console.log(
    `🚀 Subscriptions ready at ws://localhost:${process.env.port}${ExpressServer.server.subscriptionsPath}`
  );
});
