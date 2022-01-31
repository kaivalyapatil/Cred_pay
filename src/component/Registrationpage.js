import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Registrationpage() {
  let navigate = useNavigate();

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    pancardNo: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  let data = {
    firstname: formValues.firstname,
    lastname: formValues.lastname,
    email: formValues.email,
    password: formValues.password,
    pancardNo: formValues.pancardNo,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }

    if (!values.firstname) {
      errors.firstname = "First Name is required!";
    } else if (!isNaN(values.firstname)) {
      errors.firstname = "only characters are allowed";
    }

    if (!values.lastname) {
      errors.lastname = "Last Name is required!";
    } else if (!isNaN(formValues.lastname)) {
      errors.lastname = "only characters are allowed";
    }

    if (!values.pancardNo) {
      errors.pancardNo = "Pan Card Number is required!";
    } else if (!regpan.test(values.pancardNo)) {
      errors.pancardNo = "This is not a valid card format!";
    } else {
      const url = "http://localhost:8080/api/v1/adduser";
      axios.post(url, data);
      console.log(123);
      alert("You have registered Successfully!");
      navigate("/login");
    }
    return errors;
  };

  return (
    <div className="container-fluid">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Registered in successfully</div>
      ) : (
        <p className="text-dark">Fill following details to register !</p>
      )}
      <div className="row bg-alert alert-primary justify-content-center align-items-center">
        <div className="col-6 bg-alert alert-primary p-4 rounded">
          <form
            className="box border p-3 shadow bg-white  h-100"
            onSubmit={handleSubmit}
          >
            <div className="d-flex justify-content-center ">
              <h3>Registration form</h3>
            </div>

            <div className="form-group ">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                name="firstname"
                placeholder="Enter First Name"
                value={formValues.firstname}
                onChange={handleChange}
              />
            </div>
            <p className="text-danger">{formErrors.firstname}</p>

            <div className="form-group ">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lastname"
                placeholder="Enter Last Name"
                value={formValues.lastname}
                onChange={handleChange}
              />
            </div>
            <p className="text-danger">{formErrors.lastname}</p>

            <div className="form-group ">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p className="text-danger">{formErrors.email}</p>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p className="text-danger">{formErrors.password}</p>

            <div className="form-group">
              <label>Pancard Number</label>
              <input
                type="text"
                className="form-control"
                name="pancardNo"
                placeholder="Enter Card Number"
                value={formValues.pancardNo}
                onChange={handleChange}
              />
            </div>
            <p className="text-danger">{formErrors.pancardNo}</p>

            <br></br>
            <div className="d-flex justify-content-lg-between">
              <button type="submit" className="btn btn-secondary btn-block ">
                Save
              </button>
              <button
                type="submit"
                className="btn btn-secondary btn-block"
                onClick={() => navigate("/login")}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
