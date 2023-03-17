import React from "react";

import View from "./Admin/View";
import BookingDetails from "./Admin/BookingDetails";
// import Activities from "./Admin/Activities";
import { Route, Routes } from "react-router-dom";
// import RegisterParkingSpace from "./Admin/RegisterParkingSpace";
import RegisterLoc from "./Admin/RegisterLoc";

function Adminnavbar() {
    return (
        <div>
            <Routes>
                <Route exact path="/AdminPage" element={<View />} />
                <Route exact path="/AdminPage/View" element={<View />} />
                <Route exact path="/AdminPage/BookingDetails" element={<BookingDetails />} />
                <Route exact path="/AdminPage/RegisterLoc" element={<RegisterLoc />} />
                {/* <Route exact path="/AdminPage/RegisterParkingSpace" element={<RegisterParkingSpace />} /> */}
            </Routes>

        </div >
    );
}

export default Adminnavbar;