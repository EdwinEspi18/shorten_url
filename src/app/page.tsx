import {LinkIcon, RocketIcon} from "lucide-react";

import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    <section className="mt-32 flex flex-col items-center justify-between text-center ">
      <div className="flex items-center justify-center gap-3">
        <LinkIcon size={80} />
        <h2 className="text-7xl font-bold tracking-wide">Link Shortener</h2>
      </div>

      <p className="text-3xl tracking-wide text-gray-400 underline">
        Shorten your URLs easily and quickly
      </p>
      <Button className="mt-5 flex h-14 w-52 items-center justify-center gap-2 rounded-full bg-blue-800 text-white hover:bg-blue-900">
        <RocketIcon size={30} />
        <span className="text-xl font-medium">Get Started!</span>
      </Button>
    </section>
  );
}
