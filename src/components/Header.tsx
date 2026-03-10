/**
 * Header component that contains responsive navigation for mobile devices
 * and 
 * @param param0
 */
export const Header = ({ home = false }: { home?: boolean }) => {
  return home ? (
    <header>
      Home Header<nav>Home Nav</nav>
    </header>
  ) : (
    <header>
      Everything else Header<nav>Everything else Nav</nav>
    </header>
  );
};
