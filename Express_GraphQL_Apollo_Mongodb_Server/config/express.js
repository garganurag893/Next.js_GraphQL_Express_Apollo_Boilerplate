const express = require('express');
const { ApolloServer, } = require('apollo-server-express');
const schema = require("../server/graphql/schema/index");
const isAuth = require("../server/middleware/auth");
const http = require('http');
const cors = require('cors');


const server = new ApolloServer(schema);

const app = express();

app.use(isAuth);

app.use(cors());

server.applyMiddleware({ app });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

module.exports = {httpServer,server};
