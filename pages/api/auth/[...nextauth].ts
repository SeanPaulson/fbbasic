import nextAuth from "next-auth";
import { getToken } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

export default nextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: 'username', type: 'text', placeholder: 'username'},
        password: { label: 'password', type: 'password', placeholder: 'password is password'}
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        const user = credentials;
        
        // If no error and we have user data, return it
        if (user?.password === 'password') {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  callbacks: {
    jwt: async ({token, user, account}) => {
        if(account && user) {
          
            return token;
        }
        return token;
    },
    session: ({session, token}) => {
        return session;
    },
    redirect: async ({url, baseUrl} ) => {
      if (url === `/`) {
        return baseUrl;
      }
      return url;
    }
  },
  secret: 'test',
  pages: {
    signIn: "/login",
  },
  debug: process.env.NODE_ENV === 'development',
});
