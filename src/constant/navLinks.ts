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
    href: "/create-event",
  },
];

export const adminLoggedInNavLinks: INavLink[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Manage Users",
    href: "/manage-users",
  },
  {
    label: "Manage Host",
    href: "/manage-hosts",
  },
  {
    label: "Manage Events",
    href: "/manage-events",
  },
  {
    label: "Profile",
    href: "/profile",
  },
];
