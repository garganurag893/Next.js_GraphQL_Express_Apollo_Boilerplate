import { ApolloServer } from 'apollo-server-express';
import * as cors from 'cors';
import * as express from 'express';
import * as http from 'http';
import schema from '../server/graphql/schema/index';

class Express {
  public express: express.Application;
  // @ts-ignore
  public server: ApolloServer = new ApolloServer(schema);
  public httpServer: http.Server;
  public init = () => {
    this.express = express();
    this.express.use(cors());
    this.server.applyMiddleware({ app: this.express });
    this.httpServer = http.createServer(this.express);
    this.server.installSubscriptionHandlers(this.httpServer);
  }
}

export default Express;
