import axios from "axios";

const User_API_URL = "http://localhost:8080/api/v1";

class UserServices {
  getAllCustomer() {
    return axios.get("http://localhost:8080/api/v1/getalluser");
  }

  createUser(user) {
    return axios.post("http://localhost:8080/api/v1/adduser", user);
  }
  createCarddetails(details) {
    return axios.post("http://localhost:8080/api/v1/addcreditcard", details);
  }
  deleteCustomer(cusid) {
    return axios.delete(
      "http://localhost:8080/api/v1/deletecustomer" + "/" + cusid
    );
  }
  getCustomerprofile(cusid) {
    return axios.get("http://localhost:8080/api/v1/profiledata" + "/" + cusid);
  }

  updateCustomer(cusid, customerdetails) {
    return axios.put(
      "http://localhost:8080/api/v1/updateemail" + "/" + cusid,
      customerdetails
    );
  }
}
export default new UserServices();
