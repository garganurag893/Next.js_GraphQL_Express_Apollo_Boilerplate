var Promise = require("bluebird");
var mongoose = require("mongoose");
var config = require("./config/env");
var {httpServer,server} = require("./config/express");

// Promisify All The Mongoose
Promise.promisifyAll(mongoose);

// Connecting Mongo DB
mongoose.connect(config.db, {
  reconnectInterval: 500,
  bufferMaxEntries: 0,
  socketTimeoutMS: 0,
  keepAlive: true,
  reconnectTries: 30,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${config.db}`);
});

// listen on port config.port
httpServer.listen(process.env.PORT || config.port, () => {
  console.log(`🚀  Server ready at ${config.port}`);
  console.log(`🚀 Server ready at http://localhost:${config.port}${server.graphqlPath}`)
  console.log(`🚀 Subscriptions ready at ws://localhost:${config.port}${server.subscriptionsPath}`)
});