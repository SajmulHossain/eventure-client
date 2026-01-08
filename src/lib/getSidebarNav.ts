import { NavSection, UserRole } from "@/types";
import { getDefaultDashboardRoutes } from "./auth.utils";

export const getCommonNav = (role: UserRole): NavSection[] => {
  const dashboard = getDefaultDashboardRoutes(role);

  return [
    {
      items: [
        {
          title: "Dashboard",
          href: dashboard,
          icon: "LayoutDashboard",
          roles: ["USER", "HOST", "ADMIN"],
        },
      ],
    },
  ];
};

const adminNavItems: NavSection[] = [
  {
    title: "User Management",
    items: [
      {
        title: "Admin",
        href: "/admin/dashboard/admin",
        icon: "Shield",
        roles: ["ADMIN"],
      },
      {
        title: "Host",
        href: "/admin/dashboard/host",
        icon: "HospitalIcon",
        roles: ["ADMIN"],
      },
      {
        title: "Users",
        href: "/admin/dashboard/users",
        icon: "User",
        roles: ["ADMIN"],
      },
    ],
  },
  {
    title: "Event Management",
    items: [
      {
        title: "All Events",
        href: "/admin/dashboard/events",
        icon: "PlusSquare",
        roles: ["ADMIN"],
      },
      {
        title: "Create Event",
        href: "/admin/dashboard/create-event",
        icon: "PlusSquare",
        roles: ["ADMIN"],
      },
    ],
  },
  {
    title: "Event Type",
    items: [
      {
        title: "All Event Type",
        href: "/admin/dashboard/event-types",
        icon: "PlusSquare",
        roles: ["ADMIN"],
      },
      {
        title: "Create Event Type",
        href: "/admin/dashboard/create-event-type",
        icon: "PlusSquare",
        roles: ["ADMIN"],
      },
    ],
  },
];

const hostNavItems: NavSection[] = [
  {
    title: "Event Management",
    items: [
      {
        title: "Create Event",
        href: "/host/dashboard/create-event",
        icon: "PlusIcon",
        roles: ["HOST"],
      },
    ],
  },
  {
    title: "General",
    items: [
      {
        title: "Hosted Events",
        href: "/host/dashboard/events",
        icon: "PlusIcon",
        roles: ["HOST"],
      },
      {
        title: "Participants",
        href: "/host/dashboard/participants",
        icon: "PlusIcon",
        roles: ["HOST"],
      },
      {
        title: "Payments",
        href: "/host/dashboard/payments",
        icon: "DollarSign",
        roles: ["HOST"],
      },
    ],
  },
];

const userNavItems: NavSection[] = [
  {
    title: "General",
    items: [
      {
        title: "Joined Events (Upcoming)",
        href: "/host/dashboard/joined-events",
        icon: "PlusIcon",
        roles: ["USER"],
      },
      {
        title: "Joined Events (Past)",
        href: "/host/dashboard/past-events",
        icon: "PlusIcon",
        roles: ["USER"],
      },
      {
        title: "Saved Events",
        href: "/host/dashboard/saved-events",
        icon: "PlusIcon",
        roles: ["USER"],
      },
    ],
  },
];

export const getNavByRoles = (role: UserRole) => {
  const commonNavs = getCommonNav(role);

  switch (role) {
    case "ADMIN":
      return [...commonNavs, ...adminNavItems];

    case "HOST":
      return [...commonNavs, ...hostNavItems];
    case "USER":
      return [...commonNavs, ...userNavItems];

    default:
      return [];
  }
};
