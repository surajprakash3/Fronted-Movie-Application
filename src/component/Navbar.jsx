
import logo from "../assets/logo.jpg";


function Navbar({ user, setUser, setPage }) {
  const handleLogout = () => {
    setUser(null);
    setPage("register");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img className="navbar-logo" src={logo} alt=" logo" />
        <h2 className="books">Let's BookShow</h2>
      </div>

      <ul className="nav-links">
        <li onClick={() => setPage("success")}>Home</li>
        {/* <li>About</li>
        <li>Services</li>
        <li>Contact</li> */}
        {user ? (
          <li onClick={handleLogout}>Logout</li>
        ) : (
          <li className="log" onClick={() => setPage("login")}>Login</li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
