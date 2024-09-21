import type { FC, PropsWithChildren } from "react";

import { cn } from "@/utils/cn";

interface ContainerInterface extends PropsWithChildren {
  padding?: "tight" | "normal" | "loose";
  centered?: boolean;
  spaceChildren?: boolean;
  sectionClassName?: string;
  containerClassName?: string;
}

const Container: FC<ContainerInterface> = ({
  children,
  padding = "normal",
  centered = false,
  spaceChildren = false,
  sectionClassName,
  containerClassName,
}) => {
  const getPaddingClasses = () => {
    switch (padding) {
      case "loose":
        return "py-16 md:py-24";
      case "normal":
        return "py-14 md:py-8";
      case "tight":
        return "py-1.5";
    }
  };

  return (
    <section className={cn("relative", getPaddingClasses(), sectionClassName)}>
      <div
        className={cn(
          "container rounded-md",
          centered && "flex flex-col items-center",
          spaceChildren && "space-y-4",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default Container;
