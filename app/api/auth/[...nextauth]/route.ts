import NextAuth from "next-auth";
import db from "@/lib/db";
import bcrypt from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import { RowDataPacket } from "mysql2";

interface User extends RowDataPacket {
  uid: number;
  uemail: string;
  upassword: string;
}

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: '/auth/sign-in', // custom login page path
  },
  providers: [
    CredentialsProvider({
      name: "Credentails",
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
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
            email: token.email
        }
      }
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
