import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/useAuth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const navigate = useNavigate();
  const { loginUser } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await loginUser(email, password); // Call loginUser with email and password
      //navigate("/dashboard"); // Navigate to a different route upon success
    } catch (error) {
      console.error("Login failed", error); // Handle errors (optional)
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button> {/* Submit the form */}
      </form>
    </div>
  );
}

export default Login;
