// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Payment() {
//   const initialValues = { cardnumber: "", CVV: "", date: "" };
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);
//   const [amount, setAmount] = useState("");
//   let navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

//   let id = sessionStorage.getItem("id");

//   const returntomain = () => {
//     if (id == 1) {
//       navigate("/admin");
//     } else {
//       navigate("/mainpage");
//     }
//   };

//   const customerdetails = { amount };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormErrors(validate(formValues));
//     setIsSubmit(true);

//     const url = "http://localhost:8080/api/v1/updateamount";
//     axios.put(url + "/" + id, customerdetails);

//     alert("money deducted");

//     if (id == 1) {
//       navigate("/admin");
//     } else {
//       navigate("/mainpage");
//     }
//   };

//   useEffect(() => {
//     console.log(formErrors);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(formValues);
//     }
//   }, [formErrors]);
//   const validate = (values) => {
//     const errors = {};
//     const regcard = /^\d{16}$/;
//     const regCVV = /^[0-9]{3}$/;

//     if (!values.cardnumber) {
//       errors.cardnumber = "Card Number is required!";
//     } else if (!regcard.test(values.cardnumber)) {
//       errors.cardnumber = "This is not a valid card format!";
//     }

//     if (!values.date) {
//       errors.date = "date is required!";
//     }
//     if (!values.CVV) {
//       errors.CVV = "CVV is required!";
//     } else if (!regCVV.test(values.CVV)) {
//       errors.CVV = "invalid CVV";
//     }

//     return errors;
//   };

//   return (
//     <div className="container-fluid">
//       <div
//         className="row bg-alert alert-primary align-items-center justify-content-center "
//         style={{ height: "100vh" }}
//       >
//         <div className="col-12 col-md-6 bg-alert alert-primary p-4">
//           <form class="shadow" onSubmit={handleSubmit}>
//             <div class="card p-4">
//               <div class="d-flex justify-content-center align-items-center ">
//                 <h5 class="total-amount ">Payment</h5>
//                 <div class="amount-container">
//                   <span class="amount-text">
//                     <span class="dollar-sign"></span>
//                   </span>
//                 </div>
//               </div>

//               <div class="pt-4">
//                 <label class="d-flex justify-content-between">
//                   <span class="label-text label-text-cc-number">
//                     CARD NUMBER
//                   </span>
//                   <img
//                     src="https://img.icons8.com/dusk/64/000000/visa.png"
//                     width="30"
//                     class="visa-icon"
//                   />
//                 </label>
//                 <input
//                   type="text"
//                   name="cardnumber"
//                   class="form-control credit-card-number"
//                   maxlength="19"
//                   placeholder="Card number"
//                   value={formValues.cardnumber}
//                   onChange={handleChange}
//                 />
//               </div>
//               <p className="text-danger">{formErrors.cardnumber}</p>

//               <div className="d-flex justify-content-between pt-4">
//                 <div>
//                   {" "}
//                   <label>
//                     <span className="label-text">EXPIRY</span>{" "}
//                   </label>
//                   <input
//                     type="date"
//                     name="date"
//                     className="form-control expiry-class "
//                     placeholder="MM / YY"
//                     value={formValues.date}
//                     onChange={handleChange}
//                   />
//                   <p className="text-danger">{formErrors.date}</p>
//                 </div>

//                 <div className="mx-2">
//                   <label>
//                     <span className="label-text ">CVV</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="CVV"
//                     class="form-control cvv-class"
//                     maxlength="4"
//                     pattern="\d*"
//                     value={formValues.CVV}
//                     onChange={handleChange}
//                   />
//                   <p className="text-danger">{formErrors.CVV}</p>
//                 </div>
//               </div>

//               <div className="d-flex justify-content-between pt-5 align-items-center">
//                 <button
//                   type="button"
//                   className="btn cancel-btn bg-secondary text-light"
//                   onClick={returntomain}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="btn payment-btn bg-secondary text-light"
//                 >
//                   Make Payment
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Payment() {
  const initialValues = { cardnumber: "", CVV: "", date: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [amount, setAmount] = useState("");
  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  let id = sessionStorage.getItem("id");

  const returntomain = () => {
    if (id == 1) {
      navigate("/admin");
    } else {
      navigate("/mainpage");
    }
  };

  const customerdetails = { amount };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    //   const url = "http://localhost:8080/api/v1/updateamount";
    //   axios.put(url + "/" + id, customerdetails);

    //   alert("money deducted");

    //   if (id == 1) {
    //     navigate("/admin");
    //   } else {
    //     navigate("/mainpage");
    //   }
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
    const regdate = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!values.cardnumber) {
      errors.cardnumber = "Card Number is required!";
    } else if (!regcard.test(values.cardnumber)) {
      errors.cardnumber = "This is not a valid card format!";
    }

    if (!values.date) {
      errors.date = "date is required!";
    }

    if (!values.CVV) {
      errors.CVV = "CVV is required!";
    } else if (!regCVV.test(values.CVV)) {
      errors.CVV = "invalid CVV";
    } else {
      const url = "http://localhost:8080/api/v1/updateamount";
      axios.put(url + "/" + id, customerdetails);

      alert("money deducted");

      if (id == 1) {
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
          <form class="shadow" onSubmit={handleSubmit}>
            <div class="card p-4">
              <div class="d-flex justify-content-center align-items-center ">
                <h5 class="total-amount ">Payment</h5>
                <div class="amount-container">
                  <span class="amount-text">
                    <span class="dollar-sign"></span>
                  </span>
                </div>
              </div>

              <div class="pt-4">
                <label class="d-flex justify-content-between">
                  <span class="label-text label-text-cc-number">
                    CARD NUMBER
                  </span>
                  <img
                    src="https://img.icons8.com/dusk/64/000000/visa.png"
                    width="30"
                    class="visa-icon"
                  />
                </label>
                <input
                  type="text"
                  name="cardnumber"
                  class="form-control credit-card-number"
                  maxlength="19"
                  placeholder="Card number"
                  value={formValues.cardnumber}
                  onChange={handleChange}
                />
              </div>
              <p className="text-danger">{formErrors.cardnumber}</p>

              <div className="d-flex justify-content-between pt-4">
                <div>
                  {" "}
                  <label>
                    <span className="label-text">EXPIRY</span>{" "}
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="form-control expiry-class "
                    placeholder="MM / YY"
                    value={formValues.date}
                    onChange={handleChange}
                  />
                  <p className="text-danger">{formErrors.date}</p>
                </div>

                <div className="mx-2">
                  <label>
                    <span className="label-text ">CVV</span>
                  </label>
                  <input
                    type="text"
                    name="CVV"
                    class="form-control cvv-class"
                    maxlength="4"
                    pattern="\d*"
                    value={formValues.CVV}
                    onChange={handleChange}
                  />
                  <p className="text-danger">{formErrors.CVV}</p>
                </div>
              </div>

              <div className="d-flex justify-content-between pt-5 align-items-center">
                <button
                  type="button"
                  className="btn cancel-btn bg-secondary text-light"
                  onClick={returntomain}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn payment-btn bg-secondary text-light"
                >
                  Make Payment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
