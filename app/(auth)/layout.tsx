import SocialAuthForm from "@/components/forms/SocialAuthForm";
import Image from "next/image";
import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[url('/images/auth-light.png')] dark:bg-[url('/images/auth-dark.png')] bg-cover bg-center bg-no-repeat">
      <section className="bg-[#faf5ff] dark:bg-[#1e0039] min-w-full rounded-[10px] px-4 py-10 sm:px-8 sm:min-w-[520px]">
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-2.5">
            <h1 className="text-[24px] font-bold leading-[32px] dark:text-white text-[#10002b]">
              Join HerSpace
            </h1>
            <p className="text-[16px] font-normal leading-[22.5px] text-[#1a0033] dark:text-[#bfa5e2]">
              To get your questions answered
            </p>
          </div>
          <Image
            src="/images/site-logo.png"
            alt="logo herspace"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>

        {children}
        <SocialAuthForm />
      </section>
    </main>
  );
};

export default AuthLayout;
