import './navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">~/AkkuByte/</div>
        <div className="links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;  