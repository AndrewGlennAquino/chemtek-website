import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  stagger,
  useAnimate,
  usePresence,
  type Variants,
  MotionConfig,
} from "motion/react";
import { Link } from "react-router";

/**
 * Animated dropdown menu component that enters or exits DOM on hamburger menu click.
 */
const DropdownMenu = () => {
  // Motion hook used to control sequence of animations using the element scope as reference
  const [scope, animate] = useAnimate();

  // Motion hook used to check if component is in the DOM with function to remove component
  const [isPresent, safeToRemove] = usePresence();

  // Run an animation sequence if the element enters or exits the DOM
  useEffect(() => {
    if (isPresent) {
      const openSequence = async () => {
        await animate(scope.current, { height: 320 }, { duration: 0.2 });
        await animate(
          "span",
          { y: 0, opacity: 1 },
          { delay: stagger(0.05), duration: 0.1 }
        );
      };

      openSequence();
    } else {
      const closeSequence = async () => {
        await animate(
          "span",
          { y: -15, opacity: 0 },
          { delay: stagger(0.05), duration: 0.1 }
        );
        await animate(scope.current, { height: 0 }, { duration: 0.2 });

        safeToRemove();
      };

      closeSequence();
    }
  }, [isPresent]);

  // Initial animation variants for dropdown menu and links
  const variants: Variants = {
    dropdownInitial: {
      height: 0,
    },
    linkInitial: {
      y: -15,
      opacity: 0,
    },
  };

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        aria-label="Dropdown menu"
        className="xl:hidden bg-smoke shadow w-screen absolute top-16 left-0 right-0"
        initial="dropdownInitial"
        variants={variants}
        ref={scope}
      >
        {/* Dropdown menu container with default margin and padding */}
        <div className="container mp-default flex flex-col justify-center gap-8">
          <motion.span
            className="dropdown-link"
            initial="linkInitial"
            variants={variants}
          >
            <Link to="">Home</Link>
          </motion.span>

          <motion.span
            className="dropdown-link"
            initial="linkInitial"
            variants={variants}
          >
            <Link to="">Why Choose Us</Link>
          </motion.span>

          <motion.span
            className="dropdown-link"
            initial="linkInitial"
            variants={variants}
          >
            <Link to="">Service Area</Link>
          </motion.span>

          <motion.span
            className="dropdown-link"
            initial="linkInitial"
            variants={variants}
          >
            <a
              href="https://financing.approvepayments.com/chemtek"
              target="_blank"
            >
              Equipment Lease/Finance
            </a>
          </motion.span>

          <motion.span
            className="dropdown-link contact-us-button"
            initial="linkInitial"
            variants={variants}
          >
            <Link to="">Contact Us</Link>
          </motion.span>
        </div>
      </motion.div>
    </MotionConfig>
  );
};

/**
 * Hamburger menu component for device width less than 1280px.
 * On click, open dropdown menu.
 */
const HamburgerMenu = () => {
  // Hold in state whether or not the hamburger menu is clicked
  const [clicked, setClicked] = useState(false);

  // On click, set clicked state to its inverse
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <button
        aria-label="Toggle dropdown menu"
        className="xl:hidden flex justify-center items-center"
        onClick={handleClick}
      >
        {/* Container that holds hamburger menu bars that animates on click */}
        <div className="flex flex-col justify-center items-center gap-1">
          <MotionConfig reducedMotion="user">
            <motion.div
              className="hamburger-menu-bar"
              animate={clicked ? { y: 8, rotate: 45 } : undefined}
            />
            <motion.div
              className="hamburger-menu-bar"
              animate={clicked ? { width: 0 } : undefined}
            />
            <motion.div
              className="hamburger-menu-bar"
              animate={clicked ? { y: -8, rotate: -45 } : undefined}
            />
          </MotionConfig>
        </div>
      </button>

      {/* If hamburger menu is clicked, animate DropdownMenu entering or exiting the DOM */}
      <AnimatePresence>{clicked && <DropdownMenu />}</AnimatePresence>
    </>
  );
};

export default HamburgerMenu;
