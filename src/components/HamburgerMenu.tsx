// Libraries
import { useState, type Dispatch, type SetStateAction } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";

/**
 * Dropdown navigation menu that opens on HamburgerMenu button click
 */
const DropdownMenu = ({
  setClicked,
}: {
  setClicked: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <nav className="bg-night w-full absolute top-16 left-0 right-0">
      <div className="container mp-default text-right flex flex-col gap-4">
        <a
          href="/#what-we-do"
          onClick={() => setClicked(false)}
          className="dropdown-link"
        >
          What We Do
        </a>
        <a
          href="/#why-choose-us"
          onClick={() => setClicked(false)}
          className="dropdown-link"
        >
          Why Choose Us
        </a>
        <a
          href="/#service-area"
          onClick={() => setClicked(false)}
          className="dropdown-link"
        >
          Service Area
        </a>
        <a
          href="/#equipment-fianance"
          onClick={() => setClicked(false)}
          className="dropdown-link"
        >
          Equipment Fianance
        </a>
        <a
          href="/#testimonials"
          onClick={() => setClicked(false)}
          className="dropdown-link"
        >
          Testimonials
        </a>
        <Link to="/blog">
          <span
            className="dropdown-link"
            onClick={() => {
              setClicked(false);
              window.scrollTo({ top: 0, behavior: "instant" });
            }}
          >
            Blog
          </span>
        </Link>
        <a
          href="/#contact"
          onClick={() => setClicked(false)}
          className="primary-button font-bold"
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
};

/**
 * HamburgerMenu button that opens and closes DropdownMenu navigation
 */
export const HamburgerMenu = () => {
  // Hold in state if button is clicked, default is false
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <button
        onClick={() => setClicked(!clicked)}
        aria-label="Toggle dropdown menu"
        className="xl:hidden"
      >
        <div className="flex flex-col gap-1">
          <motion.div
            className="hamburger-menu-bar"
            animate={clicked ? "animateOpen" : undefined}
            variants={{
              animateOpen: { transform: "translateY(0.5rem) rotate(45deg)" },
            }}
          />
          <motion.div
            className="hamburger-menu-bar"
            animate={clicked ? "animateOpen" : undefined}
            variants={{ animateOpen: { opacity: 0 } }}
          />
          <motion.div
            className="hamburger-menu-bar"
            animate={clicked ? "animateOpen" : undefined}
            variants={{
              animateOpen: { transform: "translateY(-0.5rem) rotate(-45deg)" },
            }}
          />
        </div>
      </button>

      {clicked && <DropdownMenu setClicked={setClicked} />}
    </>
  );
};
