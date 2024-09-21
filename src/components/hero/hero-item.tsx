"use client";

import { type FC, type PropsWithChildren, useState } from "react";
import { CopyIcon, CheckIcon } from "@radix-ui/react-icons";
import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";
import { toast } from "sonner";

const HeroItem: FC<PropsWithChildren> = ({ children }) => {
  const [hasCheckIcon, setHasCheckIcon] = useState(false);

  const getCode = () => {
    const div = document.createElement("div");
    const root = createRoot(div);
    flushSync(() => {
      root.render(children);
    });
    const code = div.innerHTML;
    return code;
  };

  const onCopy = () => {
    const code = getCode();
    toast.success("Copy successful: Button and styles are ready!");
    navigator.clipboard.writeText(code);
    setHasCheckIcon(true);
    setTimeout(() => {
      setHasCheckIcon(false);
    }, 1000);
  };

  return (
    <div className="relative flex items-center justify-center rounded-[4px] bg-zinc-800 px-0 py-24 md:px-2">
      <div
        className="absolute right-3 top-3 cursor-pointer bg-transparent p-2"
        onClick={onCopy}
      >
        <div
          className={`absolute inset-0  transform transition-all duration-300  ${
            hasCheckIcon ? "scale-0 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          <CopyIcon className="text-zinc-200" />
        </div>
        <div
          className={`absolute inset-0 transform transition-all duration-300  ${
            hasCheckIcon ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        >
          <CheckIcon className="text-zinc-200" />
        </div>
      </div>
      {children}
    </div>
  );
};

export default HeroItem;
