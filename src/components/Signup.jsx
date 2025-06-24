import { useState } from "react";

function Signup() {
  const [signupFormData, setSignupFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSignupFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(signupFormData);
  };

  return (
    <main>
      <div className="sign-up">
        <h2>Create Your Streamline Account</h2>
        <form onSubmit={handleFormSubmit}>
          {/* <label htmlFor="username">
            Username:
            <input
              id="username"
              type="text"
              name="username"
              value={signupFormData.username}
              onChange={handleInputChange}
              required
            />
          </label> */}
          <label htmlFor="email">
            Email:
            <input
              id="email"
              type="email"
              name="email"
              value={signupFormData.email}
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
              value={signupFormData.password}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <a href="#">Log in here</a>.
        </p>
      </div>
    </main>
  );
}

export default Signup;
