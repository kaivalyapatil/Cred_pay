import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserServices from "./UserServices";

function Adminprofile() {
  let navigate = useNavigate();

  const [details, setDetails] = useState({});

  let custid = sessionStorage.getItem("id");
  function mainpage() {
    navigate("/admin");
  }

  useEffect(() => {
    UserServices.getCustomerprofile(custid)
      .then((res) => {
        setDetails(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section class="vh-100">
      <div class="container-fluid py-5 h-100 bg-alert alert-primary">
        <div class="row d-flex justify-content-center align-items-top h-100">
          <div class="col-10 col-6 col-lg-5 col-xl-4 d-flex ">
            <div className="container-fluid bg-alert alert-primary">
              <div className="row  d-flex justify-content-center ">
                <form className="box border p-5 shadow bg-white">
                  <div className="container-fluid bg-alert alert-primary">
                    <div className="row  d-flex justify-content-center mb-3">
                      <img
                        src="https://img.icons8.com/office/344/test-account.png"
                        width="20"
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-center text-dark">
                    <h3>Profile Card</h3>
                  </div>
                  <div className="form-group text-center ">
                    <h5>First Name : {details.firstname}</h5>
                  </div>

                  <div className="form-group text-center">
                    <h5>Last Name : {details.lastname}</h5>
                  </div>
                  <div className="form-group text-center">
                    <h5>Email : {details.email}</h5>
                  </div>

                  <div className="row d-flex justify-content-center">
                    <div className="col-3">
                      <button
                        type="submit"
                        className="btn btn-secondary btn-block mt-4"
                        onClick={mainpage}
                      >
                        close
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Adminprofile;
