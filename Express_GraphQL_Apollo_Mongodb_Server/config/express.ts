import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';
import schema from '../server/graphql/schema/index';
import * as http from 'http';
import * as cors from 'cors';

class Express {
  express: express.Application;
  //@ts-ignore
  server: ApolloServer = new ApolloServer(schema);
  httpServer: http.Server;
  init = () => {
    this.express = express();
    this.express.use(cors());
    this.server.applyMiddleware({ app: this.express });
    this.httpServer = http.createServer(this.express);
    this.server.installSubscriptionHandlers(this.httpServer);
  };
}

export default Express;
