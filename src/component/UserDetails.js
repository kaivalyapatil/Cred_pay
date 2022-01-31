import React, { useState, useEffect } from "react";
import UserServices from "./UserServices";
import { useNavigate } from "react-router-dom";

function UserDetails() {
  const [CustomerDetails, setCustomerDetails] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    getAllCustomer();
  }, []);

  const getAllCustomer = () => {
    UserServices.getAllCustomer()
      .then((res) => {
        setCustomerDetails(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteCustomer = (id) => {
    UserServices.deleteCustomer(id)
      .then((res) => {
        getAllCustomer();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-10">
          <h2 className="text-centre">List of Customer</h2>
        </div>
        <div className="col-2  d-flex align-items-center">
          <button className="btn btn-dark" onClick={() => navigate("/admin")}>
            main menu
          </button>
        </div>
      </div>
      <div className="row">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Customer id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Pancard Number</th>
            </tr>
          </thead>
          <tbody>
            {CustomerDetails.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.firstname}</td>
                <td>{e.lastname}</td>
                <td>{e.email}</td>
                <td>{e.pancardNo}</td>
                <td>
                  <button
                    className="btn btn-dark"
                    onClick={() => deleteCustomer(e.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserDetails;
