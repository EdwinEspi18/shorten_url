import {GithubIcon} from "lucide-react";

import {Button} from "./button";

export function Header() {
  return (
    <header className="flex w-full items-center justify-between px-20 py-2">
      <h1 className="text-4xl font-bold leading-[4rem]">ShortTiny</h1>
      <div className="flex items-center justify-center gap-5">
        <Button className="grid place-content-center rounded-full px-8">
          <span className="text-center text-xl font-medium">Login</span>
        </Button>
        <Button className="grid place-content-center rounded-full" variant="secondary">
          <GithubIcon />
        </Button>
      </div>
    </header>
  );
}
