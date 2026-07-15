import { Nav } from "./Nav";

export function Header() {
  return (
    <header className="bg-black text-white w-full p-4 flex justify-between items-center">
      Header
      <Nav />
    </header>
  );
}
