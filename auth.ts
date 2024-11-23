import NextAuth from "next-auth"

import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {strategy: "jwt"},
  providers: [
    GitHub({
      clientId: process.env.GITBUT_AUTH_ID,
      clientSecret: process.env.GITHUB_AUTH_SECRET
    }),
    Google({
      clientId: process.env.GOOGLE_AUTH_ID,
      clientSecret: process.env.GOOGLE_AUTH_SECRET
    })
  ],
})