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
      <div className="container w-full h-16 mp-default py-4 flex justify-between items-center overflow-hidden">
        {/* Header logo */}
        <Link to="/">
          <motion.div
            className="logo relative flex justify-center items-center"
            whileHover={{ scale: 1.1 }}
          >
            {/* Background glow */}
            <div className="bg-aqua/20 blur-md w-32 h-32 absolute -z-10 rounded-full" />
            <span>CHEMTEK</span>
          </motion.div>
        </Link>

        {/* Responsive navigation menu */}
        <nav>
          {/* Hamburger menu only appears for device width less than 1280px */}
          <HamburgerMenu />

          {/* Links container for device width 1280px and greater */}
          <div className="hidden xl:flex justify-center items-center gap-8">
            <Link to="/blog">
              <motion.div className="gradient-border" whileHover="animateHover">
                <motion.div
                  className="bg-night text-lg font-bold gradient-border-content"
                  variants={{
                    animateHover: {
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      color: "var(--color-night)",
                    },
                  }}
                >
                  Blog
                </motion.div>
              </motion.div>
            </Link>

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

            <motion.a
              href="#contact-section"
              className="text-lg font-bold primary-button"
              whileHover={{ scale: 1.1 }}
            >
              Contact Us
            </motion.a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
