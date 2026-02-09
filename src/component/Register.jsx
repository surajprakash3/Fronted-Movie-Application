import { useState } from "react";

const Register = ({ setPage }) => {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const userData = { name, roll, email, password };

    localStorage.setItem("user", JSON.stringify(userData));

    alert("Registered Successfully!");
    setPage("login");
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>

      <input className="place"
        required
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input className="place"
        required
        placeholder="Phone Number"
        onChange={(e) => setRoll(e.target.value)}
      />
      <input className="place"
        required
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input className="place"
        required
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="page-actions register-buttons">
        <button type="button" onClick={() => setPage("login")}>
          Back
        </button>
        <button type="submit">Register</button>
      </div>
    </form>
  );
};

export default Register;
