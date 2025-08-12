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

interface DropdownMenuProps {
  onClick: () => void;
}

/**
 * Animated dropdown menu component that enters or exits DOM on hamburger menu click.
 * When a link is clicked in the dropdown menu, trigger onClick prop
 * @param props onClick
 */
const DropdownMenu = ({ onClick }: DropdownMenuProps) => {
  // Motion hook used to control sequence of animations using the element scope as reference
  const [scope, animate] = useAnimate();

  // Motion hook used to check if component is in the DOM with function to remove component
  const [isPresent, safeToRemove] = usePresence();

  // Run an animation sequence if the element enters or exits the DOM
  useEffect(() => {
    if (isPresent) {
      const openSequence = async () => {
        await animate(scope.current, { height: 160 }, { duration: 0.2 });
        await animate(
          "div",
          { y: 0, opacity: 1 },
          { delay: stagger(0.05), duration: 0.1 }
        );
      };

      openSequence();
    } else {
      const closeSequence = async () => {
        await animate(
          "div",
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
        className="xl:hidden bg-night/50 backdrop-blur-md w-screen absolute top-16 left-0 right-0"
        initial="dropdownInitial"
        variants={variants}
        ref={scope}
      >
        {/* Dropdown menu container with default margin and padding */}
        <div className="container mp-default py-4 flex flex-col justify-evenly gap-8">
          <motion.div
            className="gradient-border flex relative"
            initial="linkInitial"
            variants={variants}
          >
            <div className="bg-night text-lg font-bold w-full gradient-border-content">
              <a
                href="https://financing.approvepayments.com/chemtek"
                target="_blank"
              >
                Equipment Lease/Finance
              </a>
            </div>
          </motion.div>

          <motion.div
            className="text-lg font-bold primary-button"
            initial="linkInitial"
            variants={variants}
          >
            <Link to="" onClick={onClick}>
              Contact Us
            </Link>
          </motion.div>
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
              animate={clicked ? { y: 8, rotate: 225 } : undefined}
            />
            <motion.div
              className="hamburger-menu-bar"
              animate={
                clicked
                  ? { opacity: 0, transition: { duration: 0 } }
                  : undefined
              }
            />
            <motion.div
              className="hamburger-menu-bar"
              animate={clicked ? { y: -8, rotate: -225 } : undefined}
            />
          </MotionConfig>
        </div>
      </button>

      {/* If hamburger menu is clicked, animate DropdownMenu entering or exiting the DOM */}
      {/* If a link is clicked within the menu, trigger close transition animation */}
      <AnimatePresence>
        {clicked && <DropdownMenu onClick={() => setClicked(false)} />}
      </AnimatePresence>
    </>
  );
};

export default HamburgerMenu;
