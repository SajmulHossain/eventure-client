import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  adminLoggedInNavLinks,
  hostLoggedInNavLinks,
  loggedInNavLinks,
  loggedOutNavLinks,
} from "@/constant/navLinks";
import { getMe } from "@/services/auth/getMe";
import Link from "next/link";
import { ComponentProps } from "react";

export const NavMenu = async (props: ComponentProps<typeof NavigationMenu>) => {
  const user = await getMe();
  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
        {[
          ...(user
            ? user.role === "HOST"
              ? [...loggedInNavLinks, ...hostLoggedInNavLinks]
              : user.role === "ADMIN"
              ? [...loggedInNavLinks, ...adminLoggedInNavLinks]
              : loggedInNavLinks
            : loggedOutNavLinks),
        ].map(({ href, label }) => (
          <NavigationMenuItem key={href}>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href={href}>{label}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
