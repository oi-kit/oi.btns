import type { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div>NavBar</div>
      <main>{children}</main>
    </>
  );
};

export default Layout;
