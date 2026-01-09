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
          roles: ["USER", "HOST", "ADMIN"] as UserRole[],
        },

        {
          title: "Saved Events",
          href: "/saved-events",
          icon: "PlusIcon",
          roles: ["USER"] as UserRole[],
        },
      ],
    },
  ];
};

const commonNavs2 = [
  {
    items: [
      {
        title: "Payments",
        href: `/payments`,
        icon: "CreditCard",
        roles: ["USER", "HOST"] as UserRole[],
      },
    ],
  },
];

const adminNavItems: NavSection[] = [
  {
    title: "User Management",
    items: [
      {
        title: "Admin",
        href: "/admin/dashboard/admin",
        icon: "Shield",
        roles: ["ADMIN"] as UserRole[],
      },
      {
        title: "Host",
        href: "/admin/dashboard/host",
        icon: "HospitalIcon",
        roles: ["ADMIN"] as UserRole[],
      },
      {
        title: "Users",
        href: "/admin/dashboard/users",
        icon: "User",
        roles: ["ADMIN"] as UserRole[],
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
        roles: ["ADMIN"] as UserRole[],
      },
      {
        title: "Hosted Events",
        href: "/admin/dashboard/hosted-events",
        icon: "PlusSquare",
        roles: ["ADMIN"] as UserRole[],
      },
      {
        title: "My Events",
        href: "/my-events",
        icon: "PlusSquare",
        roles: ["ADMIN"] as UserRole[],
      },
      {
        title: "Create Event",
        href: "/admin/dashboard/create-event",
        icon: "PlusSquare",
        roles: ["ADMIN"] as UserRole[],
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
        roles: ["HOST"] as UserRole[],
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
        roles: ["HOST"] as UserRole[],
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
        href: "/dashboard/joined-events",
        icon: "PlusIcon",
        roles: ["USER"] as UserRole[],
      },
      {
        title: "Joined Events (Past)",
        href: "/dashboard/past-events",
        icon: "PlusIcon",
        roles: ["USER"] as UserRole[],
      },
    ],
  },
];

export const getNavByRoles = (role: UserRole) => {
  const commonNavs = getCommonNav(role);

  switch (role) {
    case "ADMIN":
      return [...commonNavs, ...adminNavItems, ...commonNavs2];

    case "HOST":
      return [...commonNavs, ...hostNavItems, ...commonNavs2];
    case "USER":
      return [...commonNavs, ...userNavItems, ...commonNavs2];

    default:
      return [];
  }
};
