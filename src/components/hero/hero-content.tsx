import type { FC } from "react";

import { BUTTONS } from "@/data/buttons";

const HeroContent: FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"></div>
  );
};

export default HeroContent;
