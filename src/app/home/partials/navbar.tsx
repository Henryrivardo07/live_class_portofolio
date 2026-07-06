import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigationData } from "@/constant/navigation-data";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full" aria-label="Site header">
      <div className="flex-between custom-container h-16 md:h-21">
        {/* logo */}
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={158}
          height={36}
          className="max-md:h-8 max-md:w-35.25"
        />

        {/* navbar */}
        <nav className="hidden lg:block" aria-label="Primary Navigation">
          <ul className="flex-start gap-3">
            {navigationData.map((data) => (
              <li key={data.label}>
                <Link className="hover:text-primary-200 p-4" href={data.href}>
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* tombol */}

        <Button asChild className="hidden lg:flex">
          <Link href="#contact">Get Started</Link>
        </Button>

        <Sheet>
          <SheetTrigger>
            <Menu
              className="cursor-pointer lg:hidden"
              aria-label="Open main navigation"
            />
          </SheetTrigger>
          <SheetContent>
            <nav className="mt-16" aria-label="Mobile Navigation">
              <ul className="flex flex-col gap-4">
                {navigationData.map((data) => (
                  <li key={data.label}>
                    <Link
                      className="hover:text-primary-200 p-4"
                      href={data.href}
                    >
                      {data.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <Button asChild className="mt-3 w-full">
              <SheetClose asChild>
                <Link href="#contact">Get Started</Link>
              </SheetClose>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
