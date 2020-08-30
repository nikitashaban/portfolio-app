import express, { Request, Response } from "express";
import { gql, ApolloServer } from 'apollo-server-express'
import next from "next";


import { portfolioTypes } from './graphql/types'
import { portfolioQueries, portfolioMutations } from './graphql/resolvers'

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;





(async () => {

  try {
    await app.prepare();
    const server = express();


    //construct a schema using a graphql language
    const typeDefs = gql`
      ${portfolioTypes}
  
      type Query {
        hello: String
        portfolio(id: ID): Portfolio
        portfolios: [Portfolio]
      }

      type Mutation {
        createPortfolio(input: PortfolioInput): Portfolio
        updatePortfolio(id: ID, input: PortfolioInput): Portfolio
        deletePortfolio(id: ID): ID
      }
    `
    //the root provides a resolver for each API endpoint
    const resolvers = {
      Query: {
        ...portfolioQueries
      },
      Mutation: {
        ...portfolioMutations
      }
    }
    const apolloServer = new ApolloServer({ typeDefs, resolvers }
    )
    apolloServer.applyMiddleware({ app: server })


    server.all("*", (req: Request, res: Response) => {
      return handle(req, res);
    });
    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
