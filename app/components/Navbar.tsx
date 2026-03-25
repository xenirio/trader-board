import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
      <div>Trader Board</div>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
