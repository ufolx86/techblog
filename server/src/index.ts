import { ApolloServer } from "apollo-server-express";
import connectRedis from "connect-redis";
import cors from "cors";
import "dotenv-safe/config";
import express from "express";
import session from "express-session";
import { connect } from "http2";
import Redis from "ioredis";
import path from "path";
import { UserResolver } from './resolvers/user';
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { createConnection, createConnections } from "typeorm";
import { Category, Post, Updoot, User } from "./entities";
import { COOKIE_NAME, __prod__ } from "./constants";
import { createUserLoader } from './utils/loaders/createUserLoader';
import { PostResolver } from './resolvers/post';
import { createUpdootLoader } from './utils/loaders/updootLoader';

const main = async () => {
  const conn = await createConnection({
    type: "postgres",
    url: process.env.DATABASE_URL,
    logging: true,
    synchronize: true,
    migrations: [path.join(__dirname, "./migrations/*")],
    entities: [Category, Post, Updoot, User],
  });
  const app = express();

  const RedisStore = connectRedis(session);
  const redis = new Redis(process.env.REDIS_URL);

  app.set("trust proxy", 1);
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
  );

  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 Years
        httpOnly: true,
        sameSite: "lax",
        secure: __prod__,
        domain: __prod__ ? ".vramirezu" : undefined,
      },
      saveUninitialized: false,
      secret: process.env.SESSION_SECRET as any,
      resave: false,
    })
  );

  //SERVER To USE GRAPHQL
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, PostResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({
      req,
      res,
      redis,
      userLoader: createUserLoader(),
      updootLoader: createUpdootLoader()
    }),
  });

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  const PORT = process.env.PORT || 7000;

  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}/graphql`);
  });
};

main().catch((err) => console.error(err));
