import { useState } from "react";

function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(loginFormData);
  };

  return (
    <main>
      <div className="log-in">
        <h2>Log In</h2>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="email">
            Email:
            <input
              id="email"
              type="email"
              name="email"
              value={loginFormData.username}
              onChange={handleInputChange}
              required
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              id="password"
              type="password"
              name="password"
              value={loginFormData.password}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit">Log In</button>
        </form>
      </div>
    </main>
  );
}

export default Login;
