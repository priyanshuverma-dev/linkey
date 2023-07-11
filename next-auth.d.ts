import { type DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    name: string;
    image: string;
    username: string;
    bio: string;
    emailVerified: DateTime;
    email: string;
  }

  interface Session extends DefaultSession {
    user?: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    name: string;
    image: string;
    username: string;
    bio: string;
    emailVerified: DateTime;
    email: string;
    shortUrls: ShortUrl[];
  }
}
