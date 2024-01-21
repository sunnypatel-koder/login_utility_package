// login-utility/LoginTemplate.js
import React from "react";

const LoginTemplate = ({
  username,
  password,
  setUsername,
  setPassword,
  onLoginSubmit,
}) => {
  // Event handler for form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Call the parent component's onLoginSubmit function
    onLoginSubmit();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginTemplate;
