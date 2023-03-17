import React from "react";
import Usernav from "./Usernav";
import { useLocation, Link } from 'react-router-dom';

function SearchedData() {

    const { state } = useLocation()

    return (
        <div>
            <Usernav />

            <Link to="/Home">
                <button>GO Back</button>
            </Link>
            {
                < div className="container" style={{ marginTop: "50px" }}>
                    <h2><strong>Searched Parking Place Details</strong></h2>
                    <div className="card" style={{ marginTop: "50px" }}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{state.parkingPlaceName}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Total Parking Slot:{state.totalSlot}</li>
                            <li className="list-group-item">Total Booked Slot:{state.totalBookedSlot}</li>
                            <li className="list-group-item">Total Available:{state.totalAvailableSlot}</li>
                            <li className="list-group-item">Amount: TwoWheer - 30 and FourWheeler - 60</li>
                            <li className="list-group-item">Contact:"#"</li>
                            <li className="list-group-item">Address:"#"</li>
                        </ul>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <Link to="/Register" className="nav-link"> Want to booking Parking Slot ? <strong>Register Now</strong></Link>
                    </div>
                </div>


            }
        </div >
    )
}
export default SearchedData;