import { useState } from "react";

const Login = ({ setPage, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No registered user found. Please register first.");
      setPage("register");
      return;
    }

    if (storedUser.email === email && storedUser.password === password) {
      setUser(storedUser);
      setPage("success");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />

      <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
        <button type="button" onClick={() => setPage("register")}>Back</button>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default Login;
