import { Button } from "@/components/ui/button";
import { NavMenu } from "@/components/shared/Navbar/nav-menu";
import { NavigationSheet } from "@/components/shared/Navbar/navigation-sheet";
import Logo from "@/assets/logo/Logo";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed top-6 inset-x-4 h-16 bg-background border mx-auto rounded-full max-w-7xl">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="outline"
            className="hidden sm:inline-flex rounded-full"
          >
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild className="rounded-full">
            <Link href="register">Register</Link>
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
