import { NextResponse } from "next/server";

export async function middleware(req, res, next) {
  // console.log("middleware");
  return NextResponse.next();
}
