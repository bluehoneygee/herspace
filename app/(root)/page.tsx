import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";

import React from "react";

const Home = async () => {
  return (
    <>
      <section className="w-full flex flex-col-reverse gap-4 sm:flex-row sm:items-center justify-between">
        <h1 className="text-[30px] font-bold leading-[42px] text-[#10002b] dark:text-white">
          All Question
        </h1>
        <Button asChild className="min-h-[46px] px-4 py-3">
          <Link href={ROUTES.ASK_QUESTION}>
            <p>Ask a question</p>
          </Link>
        </Button>
      </section>
      <section className="mt-11">LocalSearch</section>
      Home Filter
      <div className="mt-10 w-full flex flex-col gap-6">
        <p>Questioncard1</p>
        <p>Questioncard1</p>
        <p>Questioncard1</p>
        <p>Questioncard1</p>
      </div>
    </>
  );
};

export default Home;
