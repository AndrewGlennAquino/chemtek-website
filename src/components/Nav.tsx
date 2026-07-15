import { useState, useEffect } from "react";
import { motion, MotionConfig, AnimatePresence } from "motion/react";

import arrowRight from "../assets/icons/arrow-right.svg";

type HamburgerMenuProps = {
  clicked: boolean;
  setClicked: (clicked: boolean) => void;
};

type MobileLinkLIProps = {
  src: string;
  children: string;
};

function HamburgerMenu({ clicked, setClicked }: HamburgerMenuProps) {
  return (
    <motion.button
      className="xl:hidden cursor-pointer flex flex-col justify-center items-center gap-1"
      onClick={() => setClicked(!clicked)}
      animate={clicked ? "animateOpen" : "animateClosed"}
      aria-label={clicked ? "Close navigation" : "Open navigation"}
    >
      <motion.div
        className="hamburger-menu"
        variants={{
          animateOpen: { transform: "rotate(45deg) translateY(8px)" },
          animateClosed: { transform: "rotate(0) translateY(0)" },
        }}
      />
      <motion.div
        className="hamburger-menu"
        variants={{
          animateOpen: { transform: "translateX(4px)", opacity: 0 },
          animateClosed: { transform: "translateX(0)", opacity: 1 },
        }}
      />
      <motion.div
        className="hamburger-menu"
        variants={{
          animateOpen: { transform: "rotate(-45deg) translateY(-8px)" },
          animateClosed: { transform: "rotate(0) translateY(0)" },
        }}
      />
    </motion.button>
  );
}

function MobileLinkLI({ src, children }: MobileLinkLIProps) {
  return (
    <motion.li
      className="cursor-pointer border-b-1 border-white/5 p-4 flex justify-between"
      whileHover="animateHover"
    >
      {/* TODO: replace with React Router Links */}
      <a className="w-full flex justify-between" href={src}>
        {children}
        <motion.span
          variants={{ animateHover: { transform: "translateX(4px)" } }}
        >
          <img className="w-4 h-4" src={arrowRight} aria-hidden="true" />
        </motion.span>
      </a>
    </motion.li>
  );
}

export function Nav() {
  const [clicked, setClicked] = useState<boolean>(false);

  // When the hamburger menu is clicked, disable scrolling on the body
  useEffect(() => {
    if (clicked) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "scroll";

    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [clicked]);

  return (
    <>
      {/* Orchestrate animations for hamburger menu bars and nav drawer */}
      <MotionConfig transition={{ duration: 0.15, ease: "linear" }}>
        <HamburgerMenu clicked={clicked} setClicked={setClicked} />

        {/* Mobile navigation drawer */}
        {/* Animate when nav enters and exits DOM */}
        <AnimatePresence>
          {clicked ? (
            <motion.nav
              className={`xl:hidden bg-black w-full max-w-100 h-full absolute top-13 right-0`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ul className="h-full flex flex-col">
                <MobileLinkLI src="/">Home</MobileLinkLI>
                <MobileLinkLI src="/">What We Do</MobileLinkLI>
                <MobileLinkLI src="/">Why Choose Us</MobileLinkLI>
                <MobileLinkLI src="/">Service Area</MobileLinkLI>
                <MobileLinkLI src="/">Equipment Finance</MobileLinkLI>
              </ul>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </MotionConfig>

      {/* Desktop navigation */}
      <nav className="hidden xl:block">
        <ul></ul>
      </nav>
    </>
  );
}
