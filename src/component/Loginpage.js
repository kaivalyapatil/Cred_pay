import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Login() {
  let navigate = useNavigate();

  const authenticate = () => {
    navigate("/admin");
  };
  const Authen = () => {
    navigate("/mainpage");
  };

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [loginResult, setLoginResult] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  function login(e) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      axios
        .post("http://localhost:8080/api/v1/login", loginData)
        .then((response) => {
          console.log(response.data);
          setLoginResult(response.data);

          if (response.data == 1) {
            authenticate();
          } else if (response.data == 0) {
            alert("Invalid UserId or Password");
          } else {
            Authen();
          }

          sessionStorage.setItem("id", response.data);
        });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }

  function change(e) {
    let name = e.target.name;
    let val = e.target.value;
    setLoginData({ ...loginData, [name]: val });
  }

  return (
    <div className="container-fluid">
      <div
        className="row bg-alert alert-primary align-items-center justify-content-center "
        style={{ height: "100vh" }}
      >
        <div className="col-12 col-md-6 bg-alert alert-primary p-4">
          <form className="box border p-5 shadow bg-white" onSubmit={login}>
            <div className="d-flex justify-content-center ">
              <h3>LOGIN</h3>
            </div>

            <div className="form-group ">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter email"
                value={loginData.email}
                onChange={change}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="password"
                value={loginData.password}
                onChange={change}
              />
            </div>
            <div className="row justify-content-center">
              <button
                type="submit"
                className="btn btn-primary btn-block w-50 my-4"
              >
                Login
              </button>
            </div>
            <div>
              <p>
                have you not an account?
                <Link to="/register">Register Here...</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
