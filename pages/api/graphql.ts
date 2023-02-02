import "reflect-metadata";
import { resolvers } from "prisma/generated/type-graphql";
import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "@apollo/server";
import * as tq from "type-graphql";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

const prisma = new PrismaClient();

const schema = tq.buildSchemaSync({
  resolvers,
  validate: false,
});

const server = new ApolloServer({ schema });

export default startServerAndCreateNextHandler(server, {
  context: async () => ({ prisma }),
});
