import { UserRole } from "@/types";

export const getDefaultDashboardRoutes = (role: UserRole) : string => {
  switch (role) {
    case "admin":
        return "/admin/dashboard";
    case "host":
        return "/host/dashboard";
    case "user":
        return "/dashboard";
  }
};