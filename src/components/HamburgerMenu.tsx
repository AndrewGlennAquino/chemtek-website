// Library imports
import { useState } from "react";
import { motion } from "motion/react";

/**
 * HamburgerMenu component for mobile navigation.
 * On click, open and close sidebar with page navigation elements.
 */
export const HamburgerMenu = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      {/* On click, change clicked state */}
      <motion.button
        aria-label={clicked ? "Close navigation" : "Open navigation"}
        onClick={() => setClicked(!clicked)}
        className="flex flex-col gap-1"
      >
        <motion.div
          className="hamburger-menu-bar"
          animate={clicked ? "animateOpen" : undefined}
          variants={{
            animateOpen: { transform: "translateY(0.5rem) rotate(-45deg)" },
          }}
        />

        <motion.div
          className="hamburger-menu-bar"
          animate={clicked ? "animateOpen" : undefined}
          variants={{
            animateOpen: { opacity: 0 },
          }}
        />

        <motion.div
          className="hamburger-menu-bar"
          animate={clicked ? "animateOpen" : undefined}
          variants={{
            animateOpen: { transform: "translateY(-0.5rem) rotate(45deg)" },
          }}
        />
      </motion.button>

      {/* Animated sidebar that opens or closes if HamburgerMenu is clicked */}
      <motion.ul 
        className="bg-smoke h-full p-default flex flex-col gap-2 fixed left-0 top-14"
        initial={{ display: "none", transform: "translateX(-50vw)" }}
        animate={clicked ? { display: "flex", transform: "translateX(0)" } : undefined }
        exit={{ display: "none" }}
      >
        <li>What We Do</li>
        <li>Why Choose Us</li>
        <li>Service Area</li>
        <li>Equipment Finance</li>
        <li>Testimonials</li>
        <li>Blog</li>
      </motion.ul>
    </>
  );
};
