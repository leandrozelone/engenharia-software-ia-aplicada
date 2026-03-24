import { betterAuth } from "better-auth";
import Database from "better-sqlite3";

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET!,
  database: new Database("./better-auth.sqlite"),
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },
});
