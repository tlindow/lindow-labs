import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const allowed = process.env.GOOGLE_ALLOWED_EMAIL;
      if (allowed && user.email !== allowed) return false;
      return true;
    },
  },
  pages: {
    signIn: "/admin/login",
  },
});
