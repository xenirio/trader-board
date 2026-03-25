import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <h1 className="text-2xl font-bold">Trader Board</h1>
      <ModeToggle />
    </header>
  );
};

export default Header;
