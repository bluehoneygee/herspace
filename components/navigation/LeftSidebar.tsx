"use client";
import React from "react";
import NavLinks from "./navbar/NavLinks";
import ROUTES from "@/constants/routes";

import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const LeftSidebar = () => {
  return (
    <section className="custom-scrollbar bg-white dark:bg-[#1e0039] sticky left-0 top-0 h-screen flex flex-col justify-between border-r p-6 pt-36 max-sm:hidden lg:w-[266px] ">
      <div className="flex flex-1 flex-col gap-5">
        <NavLinks />
      </div>
      <div className="flex flex-col gap-3">
        <Button className=" w-full" asChild>
          <Link href={ROUTES.SIGN_IN}>
            <Image
              src="/icons/account.svg"
              alt="account"
              width={20}
              height={20}
              className="lg:hidden dark:invert "
            />
            <span className=" max-lg:hidden">Log In</span>
          </Link>
        </Button>

        <Button className=" w-full" asChild>
          <Link href={ROUTES.SIGN_UP}>
            <Image
              src="/icons/account.svg"
              alt="account"
              width={20}
              height={20}
              className="dark:invert lg:hidden"
            />
            <span className="max-lg:hidden">Sign Up</span>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default LeftSidebar;
