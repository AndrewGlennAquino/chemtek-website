// Library imports
import { motion } from "motion/react";

// Image imports
import chemtekLogo from "../assets/images/chemtek-logo.png";

type FooterLinkLIProps = {
  src: string;
  children: string;
};

/**
 * Animated React Router links for footer navigation
 */
function FooterLinkLI({ src, children }: FooterLinkLIProps) {
  return (
    <li className="cursor-pointer text-white/50 text-sm w-fit">
      {/* TODO: replace with React Router Links */}
      <motion.a
        href={src}
        className="w-full flex justify-between"
        whileHover={{ scale: 1.05 }}
      >
        {children}
      </motion.a>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="bg-black text-white px-default pt-8 lg:pt-16 pb-4">
      <div className="flex flex-col sm:grid sm:grid-cols-4 gap-4">
        <div>
          <img src={chemtekLogo} alt="CHEMTEK Logo" className="w-40 h-auto" />
        </div>

        <div className="flex flex-col gap-2">
          <h2>WHAT WE DO</h2>
          <ul className="flex flex-col gap-2">
            <FooterLinkLI src="">Machine repair</FooterLinkLI>
            <FooterLinkLI src="">Industrial cleaning</FooterLinkLI>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2>COMPANY</h2>
          <ul className="flex flex-col gap-2">
            <FooterLinkLI src="">Why choose us</FooterLinkLI>
            <FooterLinkLI src="">Equipment finance</FooterLinkLI>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2>DISPATCH</h2>
          <ul className="flex flex-col gap-2">
            <FooterLinkLI src="">Service area</FooterLinkLI>
          </ul>
        </div>
      </div>

      <div className="border-white/25 border-t-1 mt-4">
        <p className="pt-4 text-white/50 text-sm">© 2026 CHEMTEK LLC</p>
      </div>
    </footer>
  );
}
