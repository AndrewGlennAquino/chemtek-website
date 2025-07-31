import HamburgerMenu from "../hamburger-menu/HamburgerMenu";
import { motion, type Variants, MotionConfig } from "motion/react";
import { Link } from "react-router";

/**
 * Header component that contains logo and responsive nav
 */
const Header = () => {
  // Animation variants to animate links on hover
  const variants: Variants = {
    initial: {
      width: 0,
    },
    animateHover: {
      width: "100%",
    },
  };

  return (
    <header className="bg-smoke fixed sm:sticky top-0 left-0 right-0 z-50">
      {/* Header container */}
      <div className="container w-full h-16 mp-default flex justify-between items-center">
        {/* Header logo */}
        <motion.h1
          className="text-chemtek text-3xl font-bold"
          whileHover={{ scale: 1.1 }}
        >
          <Link to="/chemtek-website">ChemTek</Link>
        </motion.h1>

        {/* Responsive navigation menu */}
        <nav>
          {/* Hamburger menu only appears for device width less than 1280px */}
          <HamburgerMenu />

          {/* Links container for device width 1280px and greater */}
          <div className="hidden xl:flex justify-center items-center gap-8">
            <MotionConfig reducedMotion="user">
              <motion.span
                className="dropdown-link mt-1"
                initial="initial"
                whileHover="animateHover"
              >
                <Link to="">Home</Link>
                <motion.div className="link-underline" variants={variants} />
              </motion.span>

              <motion.span
                className="dropdown-link mt-1"
                initial="initial"
                whileHover="animateHover"
              >
                <Link to="">Why Choose Us</Link>
                <motion.div className="link-underline" variants={variants} />
              </motion.span>

              <motion.span
                className="dropdown-link mt-1"
                initial="initial"
                whileHover="animateHover"
              >
                <Link to="">Service Area</Link>
                <motion.div className="link-underline" variants={variants} />
              </motion.span>

              <a
                href="https://financing.approvepayments.com/chemtek"
                target="_blank"
              >
                <motion.span
                  className="dropdown-link mt-1"
                  initial="initial"
                  whileHover="animateHover"
                >
                  Equipment Lease/Finance
                  <motion.div className="link-underline" variants={variants} />
                </motion.span>
              </a>

              <Link to="">
                <motion.span
                  className="text-lg font-bold contact-us-button"
                  whileHover={{ scale: 1.1 }}
                  variants={variants}
                >
                  Contact Us
                </motion.span>
              </Link>
            </MotionConfig>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
