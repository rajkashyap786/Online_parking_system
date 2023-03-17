import React from "react";
import { Link } from "react-router-dom";


function Adminnav() {
    return (
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid" >
                <Link to="/Dashboard" className="navbar-brand">Premium Parking Service</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/AdminPage" className="nav-link active text-light" aria-current="page">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/BookingDetails" className="nav-link text-light mr-4">Booking details</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/AdminPage/RegisterLoc" className="nav-link text-light mr-4">RegisterLocation</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/FeedBack" className="nav-link text-light mr-4">ViewFeedBack</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link text-light mr-4">SignOut</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Adminnav;