import jwt, { JwtPayload } from "jsonwebtoken";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { deleteCookie, getCookie } from "./services/auth/token";
import { UserRole } from "./types";
import {
  getDefaultDashboardRoutes,
  getRouteOwner,
  isAuthRoute,
} from "./lib/auth.utils";

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const accessToken = (await getCookie()) || null;

  let userRole: UserRole | null = null;
  if (accessToken) {
    const verifiedToken: JwtPayload | string = jwt.verify(
      accessToken,
      process.env.JWT_SECRET as string
    );

    if (typeof verifiedToken === "string") {
      await deleteCookie();
      return NextResponse.redirect(new URL("/login", request.url));
    }

    userRole = verifiedToken.role;
  }

  const routerOwner = getRouteOwner(pathname);

  const isAuth = isAuthRoute(pathname);

  if (accessToken && isAuth) {
    return NextResponse.redirect(
      new URL(getDefaultDashboardRoutes(userRole as UserRole), request.url)
    );
  }

  if (routerOwner === null) {
    return NextResponse.next();
  }

  if (!accessToken) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (routerOwner === "COMMON") {
    return NextResponse.next();
  }

  if (
    routerOwner === "ADMIN" ||
    routerOwner === "HOST" ||
    routerOwner === "USER"
  ) {
    if (userRole !== routerOwner) {
      return NextResponse.redirect(
        new URL(getDefaultDashboardRoutes(userRole as UserRole), request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.well-known).*)",
  ],
};
