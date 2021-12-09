// import session from 'express-session';
// import connectMongo from 'connect-mongo';

// const MongoStore = connectMongo(session);

// export function sessionMiddleware(req, res, next) {
//   const mongoStore = new MongoStore({
//     client: req.dbClient,
//     stringify: false,
//   });

//   return session({
//     secret: process.env.SESSION_SECRET,
//     store: mongoStore,
//     resave: false,
//     saveUninitialized: false,
//   })(req, res, next);
// }


import nextSession from "next-session";
import {getMongoClient} from './../middleware/dbMiddleware';
import MongoStore from "connect-mongo";

const mongoStore = MongoStore.create({
  clientPromise: getMongoClient(),
  stringify: false,
});

const getSession = nextSession({
  store: promisifyStore(mongoStore),
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 2 * 7 * 24 * 60 * 60, // 2 weeks,
    path: "/",
    sameSite: "strict",
  },
  touchAfter: 1 * 7 * 24 * 60 * 60, // 1 week
});

export default async function session(req, res, next) {
  await getSession(req, res);
  next();
}