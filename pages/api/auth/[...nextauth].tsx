import NextAuth from 'next-auth/next';
import FacebookProvider from 'next-auth/providers/facebook';
import EmailProvider from 'next-auth/providers/email';
import GithubProvider from 'next-auth/providers/github';
import Auth0Provider from 'next-auth/providers/auth0';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import { clientPromise } from '../../../lib/mongodb';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
// import {session} from "next-auth/client";
let userAccount;

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
    // jwt: true,
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'johndoe@gmail.com',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'abcd1234',
        },
      },
      async authorize(credentials, req) {
        const client = await clientPromise;

        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const user = await client
          .db('goldFinchDb')
          .collection('users')
          .findOne({ email });
        console.log('DB', user);
        console.log({ email, password });
        if (email !== 'johndoe@gmail.com' || password !== 'abcd1234') {
          console.log('YO');
          return null;
        }
        return (userAccount = {
          id: 1,
          name: 'John',
          email: 'johndoe@gmail.com',
        });
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      if (typeof user !== typeof undefined) {
        token.user = user;
      }
      return Promise.resolve(token);
    },
    async session({ session, token }) {
      session.user = token.user;
      const newDate = String(
        new Date(
          Date.now() + 1000 /*sec*/ * 60 /*min*/ * 60 /*hour*/ * 24 /*day*/ * 10
        )
      );
      session.expires = newDate;
      token.exp = 2663263538;
      // you might return this in new version
      return Promise.resolve(session);
    },
  },
};

export default NextAuth(authOptions);

// export default NextAuth({
//   providers: [
//     // EmailProvider({
//     //   server: process.env.EMAIL_SERVER,
//     //   from: process.env.EMAIL_FROM,
//     // }),
//     // FacebookProvider({
//     //   clientId: process.env.FACEBOOK_ID,
//     //   clientSecret: process.env.FACEBOOK_SECRET,
//     // }),
//     GithubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//       // https://docs.github.com/en/developers/apps/building-oauth-apps/scopes-for-oauth-apps
//       // @ts-ignore
//       scope: 'read:user',
//     }),
//     // Auth0Provider({
//     //   clientId: process.env.AUTH0_ID,
//     //   clientSecret: process.env.AUTH0_SECRET,
//     //   // @ts-ignore
//     //   domain: process.env.AUTH0_DOMAIN,
//     // }),
//     Auth0Provider({
//       clientId: process.env.AUTH0_CLIENT_ID,
//       clientSecret: process.env.AUTH0_CLIENT_SECRET,
//       issuer: process.env.AUTH0_ISSUER,
//       // authorizationUrl: `https://${process.env.AUTH0_DOMAIN}/authorize?response_type=code&prompt=login`,
//     }),
//   ],
//   adapter: MongoDBAdapter(clientPromise),
//   secret: process.env.NEXTAUTH_SECRET,
//   session: {
//     strategy: 'jwt',
//   },
//   jwt: {
//     secret: process.env.NEXTAUTH_SECRET,
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       // @ts-ignore
//       session.user.id = token.id;
//       return session;
//     },
//   },
// });
