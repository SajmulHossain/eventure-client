interface INavLink {
  label: string;
  href: string;
}

export const commonNavLinks: INavLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Explore Events",
    href: "/events",
  },
];

export const loggedOutNavLinks: INavLink[] = [
  ...commonNavLinks,
  {
    label: "Become a Host",
    href: "/become-host",
  },
];

export const loggedInNavLinks: INavLink[] = [
  ...commonNavLinks,
  {
    label: "My Events",
    href: "/my-events",
  },
  {
    label: "Profile",
    href: "/profile",
  },
];

export const hostLoggedInNavLinks: INavLink[] = [
  ...loggedInNavLinks,
  {
    label: "Create Event",
    href: "/host/dashboard/create-event",
  },
];

export const adminLoggedInNavLinks: INavLink[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Manage Users",
    href: "/admin/dashboard/users",
  },
  {
    label: "Manage Host",
    href: "/admin/dashboard/host",
  },
  {
    label: "Manage Events",
    href: "/admin/dashboard/events",
  },
  {
    label: "Profile",
    href: "/profile",
  },
];
