import React from "react";
import { Route, Routes } from "react-router-dom";
import Payment from "./component/Paymentpage";
import Login from "./component/Loginpage";
import Register from "./component/Registrationpage";
import Mainpage from "./component/Mainpage";
import Addcreditcard from "./component/Addcreditcard";
import Userprofile from "./component/Userprofile";
import UserDetails from "./component/UserDetails";
import Updateemail from "./component/Updateemail";
import Admin from "./component/Admin";
import Adminprofile from "./component/Adminprofile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/addcreditcard" element={<Addcreditcard />} />
        <Route path="/userdetails" element={<UserDetails />} />
        <Route path="/userprofile" element={<Userprofile />} />
        <Route path="/updateemail" element={<Updateemail />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminprofile" element={<Adminprofile />} />
      </Routes>
    </>
  );
}

export default App;
