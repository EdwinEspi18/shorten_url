import {HeartIcon} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative h-12  text-center leading-[4rem] opacity-80">
      <img
        alt="Gradient"
        className="pointer-events-none absolute bottom-0 left-[28%] -z-20 select-none"
        src="/blue-sky.png"
      />
      <div className="flex items-center justify-center gap-2">
        <p className="text-base font-bold tracking-wide text-gray-400">Made By Edwin Espinal</p>
        <HeartIcon color="#a91414" />
      </div>
    </footer>
  );
}
