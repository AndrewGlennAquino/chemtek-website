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
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="logo relative flex justify-center items-center"
            whileHover={{ scale: 1.1 }}
          >
            {/* Background glow */}
            <div className="bg-aqua/20 blur-md w-32 h-32 absolute -z-10 rounded-full" />
            <span>CHEMTEK</span>
          </motion.button>
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

      {/* Promotions section */}
      <section
        className="bg-linear-to-br from-chemtek to-aqua w-full py-2 flex justify-center"
        aria-label="Promotions"
      >
        <div className="text-night text-sm container px-4 lg:px-8 grid grid-cols-2">
          <motion.div
            className="text-balance justify-self-start self-center"
            whileHover="animateArrow"
            onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
          >
            <Link to="/promotions">
              View our promotions for first time customers{" "}
              <motion.div
                className="inline-block"
                variants={{ animateArrow: { transform: "translateX(0.5rem)" } }}
              >
                →
              </motion.div>
            </Link>
          </motion.div>

          <a
            href="tel:8472507186"
            className="cursor-pointer justify-self-end self-center"
          >
            Give us a call!
            <br />
            <span className="underline">(847) 250-7186</span>
          </a>
        </div>
      </section>
    </header>
  );
};
