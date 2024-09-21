import type { FC } from "react";

import { GitHubLogoIcon } from "@radix-ui/react-icons";

import Link from "next/link";

const Navbar: FC = () => {
  return (
    <header className="container flex flex-col py-4 items-center">
      <nav className="w-full flex justify-between items-center">
        <Link className="text-xl font-bold" href="/">
          oi.btns
        </Link>
        <Link
          className="flex items-center gap-2"
          href="https://github.com/oi-kit/oi.btns"
        >
          <GitHubLogoIcon />
          GitHub
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
