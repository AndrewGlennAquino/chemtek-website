// Library imports
import { motion } from "motion/react";

// Component imports
import { MobileNav } from "./MobileNav";

type DesktopLinkLIProps = {
  src: string;
  children: string;
};

function DesktopLinkLI({ src, children }: DesktopLinkLIProps) {
  return (
    <motion.li
      className="cursor-pointer"
      whileHover={{ scale: 1.05 }}
    >
      {/* TODO: replace with React Router Links */}
      <a className="w-full flex justify-between" href={src}>
        {children}
      </a>
    </motion.li>
  );
}

export function Header() {
  return (
    <header className="bg-black text-white w-full p-4 flex gap-4 xl:gap-0 xl:justify-between items-center">
      <MobileNav />

      <div>Header Logo</div>

      {/* Desktop navigation */}
      <nav className="hidden xl:block">
        <ul className="flex items-center gap-8">
          {/* TODO: replace with React Router Links */}
          <DesktopLinkLI src={"/"}>Home</DesktopLinkLI>
          <DesktopLinkLI src={"/"}>What We Do</DesktopLinkLI>
          <DesktopLinkLI src={"/"}>Why Choose Us</DesktopLinkLI>
          <DesktopLinkLI src={"/"}>Service Area</DesktopLinkLI>
          <DesktopLinkLI src={"/"}>Equipment Finance</DesktopLinkLI>
        </ul>
      </nav>

      <motion.button
        className="hidden xl:block primary-button"
        whileHover={{ scale: 1.05 }}
      >
        Request Service
      </motion.button>
    </header>
  );
}
