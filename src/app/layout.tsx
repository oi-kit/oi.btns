import type { FC, PropsWithChildren } from "react";
import type { Metadata } from "next";

import "@/styles/global.css";

export const metadata: Metadata = {
  title: "Original Interface Kit | Buttons",
  description: "Simple buttons UI kit with tailwind and css styles.",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
