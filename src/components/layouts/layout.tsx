import type { FC, PropsWithChildren } from "react";

import { Navbar } from "../navbar";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
