import { NextResponse } from "next/server";

export async function middleware(req, res, next) {
  if (req.nextUrl.pathname.startsWith("/")) {
    if (req.cookies.get("jwt")) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  } else if (req.nextUrl.pathname.startsWith("/settings")) {
    if (req.cookies.get("jwt")) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/", req.url));
    }
  } else {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/", "/settings"],
};
