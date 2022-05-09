import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import redis from '@app/infrastructure/cache/pubSub';
import config from '@app/config';
import shortUrlResolver from '@app/infrastructure/http/graphql/resolvers/shortUrl.resolver';

export class ApplicationGraphQL {
  async init(app: express.Application) {
    const pubSub = redis;
    const schema = await buildSchema({
      resolvers: [
        shortUrlResolver,
      ],
      validate: false,
      emitSchemaFile: true,
      pubSub,
    });
    const server = new ApolloServer({
      schema,
      introspection: config.isDev,
    });

    await server.start();
    server.applyMiddleware({ app, path: '/api/graphql' });
  }
}

const applicationGraphQL = new ApplicationGraphQL();
export default applicationGraphQL;
