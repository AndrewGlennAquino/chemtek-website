// Library imports
import { motion } from "motion/react";

// Component imports
import { MobileNav } from "./MobileNav";

type DesktopLinkLIProps = {
  src: string;
  children: string;
};

/**
 * Animated React Router links for desktop navigation
 */
function DesktopLinkLI({ src, children }: DesktopLinkLIProps) {
  return (
    <motion.li className="cursor-pointer" whileHover={{ scale: 1.05 }}>
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

      {/* TODO: replace with React Router Links */}
      <motion.div
        className="cursor-pointer bg-gradient-to-r from-seafoam to-teal px-2 py-1 rounded-sm"
        whileHover={{ scale: 1.05 }}
      >
        <h1 className="font-grotesk bg-clip-content text-white text-2xl font-bold">
          CHEMTEK
        </h1>
      </motion.div>

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

      {/* TODO: add functionality to button */}
      <motion.button
        className="hidden xl:block primary-button"
        whileHover={{ scale: 1.05 }}
      >
        Request Service
      </motion.button>
    </header>
  );
}
