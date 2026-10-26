// Library imports
import { useState, useEffect } from "react";
import { motion } from "motion/react";

// Image imports
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
          animateOpen: { y: 6, rotate: 45 },
          animateClosed: { y: 0, rotate: 0 },
        }}
      />
      <motion.div
        className="hamburger-menu"
        variants={{
          animateOpen: { opacity: 0 },
          animateClosed: { opacity: 1 },
        }}
      />
      <motion.div
        className="hamburger-menu"
        variants={{
          animateOpen: { y: -6, rotate: -45 },
          animateClosed: { y: 0, rotate: 0 },
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
        <motion.span variants={{ animateHover: { x: 4 } }}>
          <img className="w-4 h-4" src={arrowRight} aria-hidden="true" />
        </motion.span>
      </a>
    </motion.li>
  );
}

export function MobileNav() {
  const [clicked, setClicked] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = clicked ? "clip" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [clicked]);

  return (
    <>
      <HamburgerMenu clicked={clicked} setClicked={setClicked} />

      {/* Mobile navigation drawer */}
      {clicked ? (
        <nav
          className={
            "xl:hidden overflow-x-clip overflow-y-auto bg-black w-full max-w-100 max-h-screen absolute top-13 left-0 bottom-0"
          }
        >
          <ul className="h-full flex flex-col">
            {/* TODO: replace with React Router Links */}
            <MobileLinkLI src="/">Home</MobileLinkLI>
            <MobileLinkLI src="/">What We Do</MobileLinkLI>
            <MobileLinkLI src="/">Why Choose Us</MobileLinkLI>
            <MobileLinkLI src="/">Service Area</MobileLinkLI>
            <MobileLinkLI src="/">Equipment Finance</MobileLinkLI>
            <li className="w-full p-4">
              <motion.button
                className="primary-button w-full"
                whileHover={{ scale: 1.05 }}
              >
                Request Service
              </motion.button>
            </li>
          </ul>
        </nav>
      ) : (
        <></>
      )}
    </>
  );
}
