import React from "react";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Register from "./Components/Register";
import UserPage from "./Components/UserPage";
import AdminPage from "./Components/AdminPage";
import About from "./Components/About";
import Contact from "./Components/Contacts";
import SearchedData from "./Components/SearchedData";

import LocationName from "./Components/User/LocationName";
import Profile from "./Components/User/Profile";
import SlotBooking from "./Components/User/SlotBooking";
import Payment from "./Components/User/Payment";
import ViewBooking from "./Components/User/ViewBooking";
import Viewparkingplace from "./Components/User/Viewparkingplace";
import SingleParking from "./Components/User/SingleParking";

import View from "./Components/Admin/View";
import EmpDetail from "./Components/Admin/EmpDetail";
import BookingDetails from "./Components/Admin/BookingDetails";
import RegisterEmp from "./Components/Admin/RegisterEmp";
import RegisterLoc from "./Components/Admin/RegisterLoc";
import FeedBack from "./Components/Admin/FeedBack";
import ReplyFeedBack from "./Components/Admin/ReplyFeedBack";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/UserPage/*" element={<UserPage />} />
        <Route exact path="/UserPage" element={<LocationName />} />
        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/SlotBooking" element={<SlotBooking />} />
        <Route exact path="/Payment" element={<Payment />} />
        <Route exact path="/ViewBooking" element={<ViewBooking />} />
        <Route exact path="/Viewparkingplace" element={<Viewparkingplace />} />
        <Route exact path="/SingleParking" element={<SingleParking />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/SearchedData" element={<SearchedData />} />
        <Route exact path="/About" element={<About />} />

        <Route exact path="/AdminPage/*" element={<AdminPage />} />
        <Route exact path="/AdminPage" element={<View />} />
        <Route exact path="/EmpDetail" element={<EmpDetail />} />
        <Route exact path="/FeedBack" element={<FeedBack />} />
        <Route exact path="/ReplyFeedBack" element={<ReplyFeedBack />} />
        <Route exact path="/BookingDetails" element={<BookingDetails />} />
        <Route exact path="/RegisterEmp" element={<RegisterEmp />} />
        <Route exact path="/AdminPage/RegisterLoc" element={<RegisterLoc />} />

        {/* After Login */}
        {/* <Route element={<Routeguard />}>
          <Route exact path="/Usernavbar" element={<Usernavbar />} />
          <Route exact path="/Adminnavbar" element={<Adminnavbar />} />
        </Route> */}
      </Routes>

    </div >
  );
}

export default App;
