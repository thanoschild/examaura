import NextAuth from "next-auth";
import db from "@/lib/db";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import { RowDataPacket } from "mysql2";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

interface User extends RowDataPacket {
  uid: number;
  uemail: string;
  upassword: string | null;
  provider: string;
}

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: '/auth/sign-in', // custom login page path
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please enter email and password");
        }

        try {
          const [rows] = await db.query<User[]>(
            "SELECT * FROM Users WHERE uemail = ?",
            [credentials.email]
          );

          const user = rows[0];

          if (!user) {
            throw new Error("No user found");
          }

          if (user.provider !== 'credentials') {
            throw new Error(`This email is registered with ${user.provider}. Please sign in with ${user.provider}.`);
          }

          if (!user.upassword) {
            throw new Error('Incorrect password');
          }
          
          const passwordMatch = await bcrypt.compare(
            credentials.password,
            user.upassword
          );

          if (!passwordMatch) {
            throw new Error("Incorrect password");
          }

          return {
            id: user.uid.toString(),
            email: user.uemail,
          };
        } catch (error) {
          if (error instanceof Error) {
            throw error;  // This preserves the original error message
          }
          throw new Error("Authentication failed");
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === 'github' || account?.provider === 'google') {
        if (!profile?.email) {
          return '/auth/sign-in?error=Email is required';
        }

        try {
          const [existingUser] = await db.query<User[]>(
            "SELECT * FROM Users WHERE uemail = ?",
            [profile.email]
          );

          if (existingUser.length === 0) {
            await db.query(
              "INSERT INTO Users (uemail, provider) VALUES (?, ?)",
              [profile.email, account.provider]
            );
            return true;
          } else {
            if (existingUser[0].provider !== account.provider) {
              if (existingUser[0].provider === 'credentials') {
                return `/auth/sign-in?error=This email is registered with password. Please sign in with your password.`;
              }
              return `/auth/sign-in?error=This email is registered with ${existingUser[0].provider}. Please sign in with ${existingUser[0].provider}.`;
            }
            return true;
          }
        } catch (error) {
        console.log("error: ", error);
          return '/auth/sign-in?error=Authentication failed. Please try again.';
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      try {
        if (token) {
          session.user = {
            email: token.email,
            image: token.picture,
          }
        }
        return session;
      } catch (error) {
        console.log("error: ", error);
        throw new Error("Session error");
      }
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
