import Logo from "@/assets/logo/Logo";
import { NavMenu } from "@/components/shared/Navbar/nav-menu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getMe } from "@/services/auth/getMe";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";
import Link from "next/link";


export const NavigationSheet = async () => {
  const user = await getMe();
  return (
    <Sheet>
      <VisuallyHidden>
        <SheetTitle>Navigation Menu</SheetTitle>
      </VisuallyHidden>

      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-6 py-3">
        <Logo />
        <NavMenu orientation="vertical" className="mt-6 [&>div]:h-full" />

        <Separator />

        {user ? (
          <Button variant={"destructive"}>Logout</Button>
        ) : (
          <Button asChild variant="outline">
            <Link href="/login">Log In</Link>
          </Button>
        )}
      </SheetContent>
    </Sheet>
  );
};
