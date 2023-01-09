import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const getLogin = async (e) => {
    e.preventDefault();
    try {

      const response = await axios.post("http://localhost:5000/login", {
        user,
        password
      });
      console.log(response.data[0])
    
      if(response.data[0].length !== 0){

        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={getLogin}>
          <div className="field">
            <label className="label">User</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                type="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
