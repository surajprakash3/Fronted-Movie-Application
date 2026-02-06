function Navbar({ user, setUser, setPage }) {
  const handleLogout = () => {
    setUser(null);
    setPage("register");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Suraj</h2>

      <ul className="nav-links">
        <li onClick={() => setPage("success")}>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
        {user ? (
          <li onClick={handleLogout}>Logout</li>
        ) : (
          <li onClick={() => setPage("login")}>Login</li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
