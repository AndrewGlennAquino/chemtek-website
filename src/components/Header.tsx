// Component imports
import { HamburgerMenu } from "./HamburgerMenu";

/**
 * Header component that contains responsive navigation
 * for mobile and desktop devices.
 */
export const Header = () => {
  return (
    <header className="bg-smoke w-full p-default fixed">
      {/* Mobile header */}
      <nav className="xl:hidden grid grid-cols-3 items-center">
        <HamburgerMenu />

        {/* Logo */}
        <div className="col-start-2 col-end-3 justify-self-center">
          Chemtek Logo
        </div>
      </nav>

      {/* Desktop header */}
      <nav className="hidden xl:flex">xl nav</nav>
    </header>
  );
};
