import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnHome = nextUrl.pathname.startsWith('/');
      if (isOnHome) {
        if (isLoggedIn) return true;
        return false
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/', nextUrl))

      }
      return true
    }
  },
  providers: [],
} satisfies NextAuthConfig
