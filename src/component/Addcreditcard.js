import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Addcreditcard() {
  let navigate = useNavigate();
  const initialValues = {
    cardNo: "",
    cvv: "",
    expiryDate: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  let custid = sessionStorage.getItem("id");

  let data = {
    cardNo: formValues.cardNo,
    cvv: formValues.cvv,
    expiryDate: formValues.expiryDate,
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
    const regcard = /^\d{16}$/;
    const regCVV = /^[0-9]{3}$/;

    if (!values.expiryDate) {
      errors.expiryDate = "date is required!";
    }

    if (!values.cardNo) {
      errors.cardNo = "Card Number is required!";
    } else if (!regcard.test(values.cardNo)) {
      errors.cardNo = "This is not a valid card format!";
    }

    if (!values.cvv) {
      errors.cvv = "CVV is required!";
    } else if (!regCVV.test(values.cvv)) {
      errors.cvv = "invalid CVV";
    } else {
      const url = "http://localhost:8080/api/v1/addcreditcard";
      axios.post(url, data);

      alert("Credit card added Successfully!");
      if (custid == 1) {
        navigate("/admin");
      } else {
        navigate("/mainpage");
      }
    }

    return errors;
  };

  return (
    <div className="container-fluid">
      <div
        className="row bg-alert alert-primary align-items-center justify-content-center "
        style={{ height: "100vh" }}
      >
        <div className="col-12 col-md-6 bg-alert alert-primary p-4">
          <form className="shadow" onSubmit={handleSubmit}>
            <div className="card p-4">
              <div className="d-flex justify-content-center align-items-center ">
                <h5 className="total-amount ">Add Credit Card</h5>
                <div className="amount-container">
                  <span className="amount-text">
                    <span className="dollar-sign"></span>
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <label className="d-flex justify-content-between">
                  <span className="label-text label-text-cc-number">
                    CARD NUMBER
                  </span>
                  <img
                    src="https://img.icons8.com/dusk/64/000000/visa.png"
                    width="30"
                    className="visa-icon"
                  />
                </label>
                <input
                  type="text"
                  className="form-control "
                  name="cardNo"
                  placeholder="Enter Card number"
                  value={formValues.cardNo}
                  onChange={handleChange}
                />
              </div>
              <p className="text-danger">{formErrors.cardNo}</p>
              <div className="mx-2">
                <label>
                  <span className="label-text ">CVV</span>
                </label>
                <input
                  type="text"
                  className="form-control "
                  name="cvv"
                  value={formValues.cvv}
                  onChange={handleChange}
                />
              </div>
              <p className="text-danger">{formErrors.cvv}</p>

              <div className="d-flex justify-content-between pt-4">
                <div>
                  {" "}
                  <label>
                    <span className="label-text">EXPIRY</span>{" "}
                  </label>
                  <input
                    type="date"
                    name="expiryDate"
                    className="form-control "
                    placeholder="MM / YY"
                    value={formValues.expiryDate}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <p className="text-danger">{formErrors.expiryDate}</p>
              <div className="d-flex justify-content-between pt-5 align-items-center">
                <button
                  className="btn payment-btn bg-alert alert-primary"
                  onClick={() => navigate("/mainpage")}
                >
                  cancel
                </button>
                <button
                  type="submit"
                  className="btn payment-btn bg-alert alert-primary"
                >
                  Add Details
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Addcreditcard;
