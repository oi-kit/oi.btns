import type { FC } from "react";

import { BUTTONS } from "@/data/buttons";

import { HeroItem } from "@/components/hero";

const HeroContent: FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {BUTTONS?.map((Comp) => {
        return (
          <HeroItem key={Comp.name}>
            <Comp />
          </HeroItem>
        );
      })}
    </div>
  );
};

export default HeroContent;
