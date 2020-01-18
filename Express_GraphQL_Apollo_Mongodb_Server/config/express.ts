import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';
import * as http from 'http';
import schema from '../server/graphql/schema/index';

class Express {
  public express: express.Application;
  public server: ApolloServer = new ApolloServer(schema);
  public httpServer: http.Server;
  public init = (): void => {
    this.express = express();
    this.express.use(cors());
    this.server.applyMiddleware({ app: this.express });
    this.httpServer = http.createServer(this.express);
    this.server.installSubscriptionHandlers(this.httpServer);
  }
}

export default Express;
