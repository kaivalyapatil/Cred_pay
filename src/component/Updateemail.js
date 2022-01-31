import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserServices from "./UserServices";

function Updateemail() {
  const [email, setEmail] = useState("");
  const initialValues = { email: "" };
  let navigate = useNavigate();
  let id = sessionStorage.getItem("id");
  const customerdetails = { email };

  const updateCustomer = (e) => {
    e.preventDefault();
    UserServices.updateCustomer(id, customerdetails)
      .then((res) => {
        if (id == 1) {
          navigate("/admin");
        } else {
          navigate("/mainpage");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section class="vh-100">
      <div class="containerfluid py-5 h-100 bg-alert alert-primary">
        <div class="row d-flex justify-content-center align-items-top h-100">
          <div class="col-10 col-6 col-lg-5 col-xl-4 d-flex ">
            <div className="container-fluid bg-alert alert-primary">
              <div className="row  d-flex justify-content-center ">
                <div></div>

                <form className="box border p-5 shadow bg-white  ">
                  <div className="d-flex justify-content-center ">
                    <h3>Email Update</h3>
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <br></br>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={updateCustomer}
                  >
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Updateemail;
