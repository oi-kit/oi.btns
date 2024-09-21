import type { FC } from "react";

const HeroHeading: FC = () => {
  return (
    <div className="flex flex-col items-start space-y-2">
      <h1 className="text-2xl font-bold">Original Interface Kit | Buttons</h1>
      <p className="text-zinc-400 max-w-[520px]">
        Explore a variety of Tailwind CSS buttons that will elevate your
        website's design. Simple to use with a quick copy-paste, no JavaScript
        required.
      </p>
    </div>
  );
};

export default HeroHeading;
