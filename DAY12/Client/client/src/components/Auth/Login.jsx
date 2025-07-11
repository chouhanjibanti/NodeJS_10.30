import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

const Login = () => {
        const navigate = useNavigate();
     const [user, setUser] = useState({
        email: "",
        password: "",
      });

      const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:7000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      res = await res.json();
      console.log(res);

      setUser({
        email: "",
        password: "",
      });
      localStorage.setItem("token", res.token)
      navigate("/login")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <div>
          <label>Email :</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
            placeholder="Enter your Email"
          />
        </div>

        <div>
          <label>Password :</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" value="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
