import HamburgerMenu from "../hamburger-menu/HamburgerMenu";
import { motion } from "motion/react";
import { Link } from "react-router";

/**
 * Header component that contains logo and responsive nav
 */
const Header = () => {
  return (
    <header className="bg-night header-shadow fixed sm:sticky top-0 left-0 right-0 z-50">
      {/* Header container */}
      <div className="container w-full h-16 mp-default py-4 flex justify-between items-center">
        {/* Header logo */}
        <motion.h1 className="logo relative" whileHover={{ scale: 1.1 }}>
          <Link to="/chemtek-website">CHEMTEK</Link>
        </motion.h1>

        {/* Responsive navigation menu */}
        <nav>
          {/* Hamburger menu only appears for device width less than 1280px */}
          <HamburgerMenu />

          {/* Links container for device width 1280px and greater */}
          <div className="hidden xl:flex justify-center items-center gap-8">
            <motion.a
              href="https://financing.approvepayments.com/chemtek"
              target="_blank"
              whileHover="animateHover"
            >
              <div className="gradient-border">
                <motion.div
                  className="bg-night text-lg font-bold gradient-border-content"
                  variants={{
                    animateHover: {
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      color: "var(--color-night)",
                    },
                  }}
                >
                  Equipment Lease/Finance
                </motion.div>
              </div>
            </motion.a>

            <Link to="">
              <motion.div
                className="text-lg font-bold primary-button"
                whileHover={{ scale: 1.1 }}
              >
                Contact Us
              </motion.div>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
