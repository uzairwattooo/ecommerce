import { NextResponse } from "next/server";

const authPages = ["/login", "/signup"];

export function proxy(req) {
  const { pathname } = req.nextUrl;

  const token =
    req.cookies.get("better-auth.session_token")?.value ||
    req.cookies.get("__Secure-better-auth.session_token")?.value;

  const isAuthPage = authPages.includes(pathname);

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};