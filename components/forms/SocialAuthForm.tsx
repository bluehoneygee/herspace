"use client";

import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
import Image from "next/image";
import { toast } from "sonner";
import ROUTES from "@/constants/routes";

const SocialAuthForm = () => {
  const buttonClass =
    "dark:bg-[#3a0066] bg-white min-h-12 flex-1 text-[#1e0039] dark:text-[#faf5ff]";

  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
      });
    } catch (error) {
      console.log(error);

      toast("Sign-in Failed", {
        description:
          error instanceof Error
            ? error.message
            : "An error occured during sign-in",
      });
    }
  };
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass} onClick={() => handleSignIn("github")}>
        <Image
          src="/icons/github.svg"
          alt="github logo"
          width={20}
          height={20}
          className="invert dark:invert-0 mr-2.5 object-contain"
        />
        <span>Log in with GitHub</span>
      </Button>
      <Button className={buttonClass} onClick={() => handleSignIn("google")}>
        <Image
          src="/icons/google.svg"
          alt="google logo"
          width={20}
          height={20}
          className="mr-2.5 object-contain"
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
