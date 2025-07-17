import Image from "next/image";
import Link from "next/link";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between fixed bg-white dark:bg-[#1e0039] z-50 w-full p-6 dark:shadow-none sm:px-12 gap-5 shadow-sm">
      <Link href="/" className="flex items-center ">
        <Image
          src="/images/site-logo.png"
          width={50}
          height={50}
          alt="logo herspace"
        />
        <p className="h2-bold font-poppins max-sm:hidden">
          <span className="inline-flex justify-center items-center rounded-full bg-[#a259ff] text-white dark:bg-white dark:text-[#1e0039] w-8 h-8">
            H
          </span>
          <span className="text-[#BFA5E2] dark:text-white">erSpace</span>
        </p>
      </Link>

      <p>Global Search</p>
      <div className="flex items-center justify-between gap-5">
        <Theme />
      </div>
    </nav>
  );
};

export default Navbar;
