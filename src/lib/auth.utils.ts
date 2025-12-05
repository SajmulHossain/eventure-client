import { UserRole } from "@/types";

export type RouteConfig = {
  exact: string[];
  patterns: RegExp[];
};

export const authRoutes = ["/login", "/register", "/reset-password"];

export const commonProtectedRoutes: RouteConfig = {
  exact: ["/my-profile", "/settings", "/change-password"],
  patterns: [],
};

export const doctorProtectedRoutes: RouteConfig = {
  patterns: [/^\/doctor/],
  exact: [],
};

export const adminProtectedRoutes: RouteConfig = {
  patterns: [/^\/admin/],
  exact: [],
};

export const patientProtectedRoutes: RouteConfig = {
  patterns: [/^\/dashboard/],
  exact: [],
};

export const isAuthRoute = (pathname: string) => {
  return authRoutes.some((route: string) => route === pathname);
};

export const isRouteMatches = (
  pathname: string,
  routes: RouteConfig
): boolean => {
  if (routes.exact.includes(pathname)) {
    return true;
  }
  return routes.patterns.some((pattern: RegExp) => pattern.test(pathname));
};

export const getRouteOwner = (
  pathname: string
): "ADMIN" | "DOCTOR" | "PATIENT" | "COMMON" | null => {
  if (isRouteMatches(pathname, adminProtectedRoutes)) {
    return "ADMIN";
  }
  if (isRouteMatches(pathname, doctorProtectedRoutes)) {
    return "DOCTOR";
  }
  if (isRouteMatches(pathname, patientProtectedRoutes)) {
    return "PATIENT";
  }
  if (isRouteMatches(pathname, commonProtectedRoutes)) {
    return "COMMON";
  }
  return null;
};

export const getDefaultDashboardRoutes = (role: UserRole): string => {
  switch (role) {
    case "ADMIN":
      return "/admin/dashboard";
    case "HOST":
      return "/host/dashboard";
    case "USER":
      return "/dashboard";

    default:
      return "/";
  }
};

export const isValidRedirectPath = (redirectPath: string, role: UserRole): boolean => {
  const routeOwner = getRouteOwner(redirectPath);

  if (routeOwner === null || routeOwner === "COMMON") {
    return true;
  }

  if (routeOwner === role) {
    return true;
  }

  return false;
};