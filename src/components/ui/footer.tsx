import {HeartIcon} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative h-12  text-center leading-[4rem] opacity-80">
      <img
        alt="Gradient"
        className="pointer-events-none absolute bottom-0 left-[32%] -z-20 select-none"
        src="/blue-sky.png"
      />
      <div className="flex items-center justify-center gap-2">
        <p className="animate-fade-up text-base font-bold tracking-wide text-gray-200 animate-delay-150 animate-normal animate-fill-both animate-once animate-ease-out">
          Made By Edwin Espinal
        </p>
        <HeartIcon
          className="animate-fade-up animate-delay-150 animate-normal animate-fill-both animate-once animate-ease-out"
          color="#a91414"
        />
      </div>
    </footer>
  );
}
