import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import Header from "../Component/Navbar/Header";
import Navbar from "../Component/Navbar/Navbar";
import Scroll from "../Component/Scroll/Scroll";
import Home from "../Pages/Home/Home";
import Gallery from "../Pages/Gallery/Gallery";
import Sailing from "../Pages/Sailing/Sailing";
import Package from "../Pages/Package/Package";
import Offer from "../Pages/Offers/Offer";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/Signup";
import Pnf from "../Component/PNF/Pnf";
import UserBooking from "../Component/UserComp/UserBooking";
import UserDashboard from "../Component/UserComp/UserDashboard";
import UserInvoice from "../Component/UserComp/UserInvoice";
import AdminPackage from "../Component/AdminComp/AdminPackage";
import AdminInvoice from "../Component/AdminComp/AdminInvoice";
import AdminBill from "../Component/AdminComp/AdminBill";
import AdminDetails from "../Component/AdminComp/AdminDetails";

const AllRoute = () => {
  return (
    <div>
      <Header />
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/package" element={<Package />} />
        <Route path="/sailing" element={<Sailing />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/loginpage" element={<Login />} />
        <Route path="/signpage" element={<SignUp />} />
        <Route path="/userprofile" element={<UserDashboard />} />
        <Route path="/userbooking" element={<UserBooking />} />
        <Route path="/userinvoice" element={<UserInvoice />} />
        <Route path="/admindetails" element={<AdminDetails />} />
        <Route path="/adminpackage" element={<AdminPackage />} />
        <Route path="/adminbill" element={<AdminBill />} />
        <Route path="/admininvoice" element={<AdminInvoice />} />

        <Route path="/*" element={<Pnf />} />
      </Routes>

      <Footer />
      <Scroll />
    </div>
  );
};

export default AllRoute;
