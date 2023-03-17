import React from "react";
import LocationName from "./User/LocationName";
import Viewparkingplace from "./User/Viewparkingplace"
import SlotBooking from "./User/SlotBooking";
// import About from "./About";
// import Contact from "./Contacts";
// import Payment from "./User/Payment";
import { Route, Routes } from "react-router-dom";

function UserPage() {
    return (
        <div>
            <div style={{ marginTop: "100px" }}>
                <Routes>
                    <Route exact path="/UserPage" element={<LocationName />} />

                    <Route exact path="/UserPage/LocationName" element={<LocationName />} />
                    <Route exact path="/UserPage/Viewparkingplace" element={<Viewparkingplace />} />
                    <Route exact path="/UserPage/SlotBooking" element={<SlotBooking />} />
                    {/* <Route exact path="/Payment" element={<Payment />} /> */}
                </Routes>
            </div >
        </div >
    );
}

export default UserPage;
