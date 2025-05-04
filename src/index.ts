import express from "express";
import { ApolloServer } from "apollo-server-express";
import { AppDataSource } from "./data-source";
import { userTypeDefs } from "./schema/user";
import { userResolvers } from "./resolvers/user";
import { productTypeDefs } from "./schema/product";
import { productResolvers } from "./resolvers/product";
import { reviewTypeDefs } from "./schema/review";
import { reviewResolvers } from "./resolvers/review";

async function startServer() {
  await AppDataSource.initialize();
  const app = express();

  const server = new ApolloServer({
    typeDefs: [userTypeDefs, productTypeDefs, reviewTypeDefs],
    resolvers: [userResolvers, productResolvers, reviewResolvers],
  });
  await server.start();
  server.applyMiddleware({ app: app as any });

  app.listen(4000, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startServer();
