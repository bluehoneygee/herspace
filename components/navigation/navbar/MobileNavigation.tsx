import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/icons/hamburger.svg"
          width={36}
          height={36}
          alt="menu"
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-[#ffffff] dark:bg-[#1e0039] border-none p-4"
      >
        <SheetTitle className="hidden">Navigation</SheetTitle>
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/images/site-logo.png"
            width={30}
            height={30}
            alt="logo"
          />
          <p className="h2-bold font-poppins ">
            <span className="inline-flex justify-center items-center rounded-full bg-[#a259ff] text-white dark:bg-white dark:text-[#1e0039] w-8 h-8">
              H
            </span>
            <span className="text-[#BFA5E2] dark:text-white">erSpace</span>
          </p>
        </Link>
        <div className="flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto scrollbar-hide">
          <SheetClose asChild>
            <section className="flex h-full flex-col gap-6 pt-16">
              <NavLinks isMobileNav />
            </section>
          </SheetClose>
        </div>
        <div className="flex flex-col gap-3">
          <SheetClose asChild>
            <Link href={ROUTES.SIGN_IN}>
              <Button className=" w-full">
                <span className="text-[]">Log In</span>
              </Button>
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link href={ROUTES.SIGN_UP}>
              <Button className=" w-full">
                <span className="text-[]">Sign Up</span>
              </Button>
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
