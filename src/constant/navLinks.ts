interface INavLink {
  label: string;
  href: string;
}

export const loggedOutNavLinks: INavLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Explore Events",
    href: "/events",
  },
];

export const loggedInNavLinks: INavLink[] = [
  ...loggedOutNavLinks,
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
