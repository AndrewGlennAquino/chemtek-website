import { HamburgerMenu } from "./HamburgerMenu";
import { motion } from "motion/react";
import { Link } from "react-router";

/**
 * Header component that contains logo and responsive nav
 */
export const Header = () => {
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

        {/* Hamburger menu only appears for device width less than 1280px */}
        <HamburgerMenu />

        {/* Links container for device width 1280px and greater */}
        <nav className="hidden xl:flex justify-center items-center gap-8">
          <motion.a
            href="/#what-we-do"
            className="dropdown-link"
            whileHover={{ scale: 1.1 }}
          >
            What We Do
          </motion.a>
          <motion.a
            href="/#why-choose-us"
            className="dropdown-link"
            whileHover={{ scale: 1.1 }}
          >
            Why Choose Us
          </motion.a>
          <motion.a
            href="/#service-area"
            className="dropdown-link"
            whileHover={{ scale: 1.1 }}
          >
            Service Area
          </motion.a>
          <motion.a
            href="/#equipment-finance"
            className="dropdown-link"
            whileHover={{ scale: 1.1 }}
          >
            Equipment Finance
          </motion.a>
          <motion.a
            href="/#testimonials"
            className="dropdown-link"
            whileHover={{ scale: 1.1 }}
          >
            Testimonials
          </motion.a>
          <motion.span className="dropdown-link" whileHover={{ scale: 1.1 }}>
            <Link to="/blog">Blog</Link>
          </motion.span>
          <motion.a
            href="/#contact"
            className="primary-button font-bold"
            whileHover={{ scale: 1.1 }}
          >
            Contact Us
          </motion.a>
        </nav>
      </div>
    </header>
  );
};
