import React, { useEffect, useState } from "react";
import Usernav from "../Usernav";
import { useLocation, useNavigate, Link } from 'react-router-dom';

function Viewparkingplace() {

    const navigate = useNavigate();
    const location = useLocation();
    const [singlepark, setSinglepark] = useState({});

    const getSinglepark = () => {
        let token = localStorage.getItem("authToken");
        const parkPlaceId = location.state.id;
        fetch("http://localhost:8080/parking/getSingleParking/" + parkPlaceId, {
            method: "GET",
            mode: 'cors',
            headers: {
                "Authorization": "Bearer " + token
            },
        })
            .then(res => res.json())
            .then(res => {
                setSinglepark(res)
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getSinglepark();
    }, []);

    const nextPage = () => {
        navigate("/SlotBooking")
    }

    return (
        <div>
            <Usernav />

            <Link to="/Viewparkingplace">
                <button>GO Back</button>
            </Link>
            {
                < div className="container" style={{ marginTop: "50px" }}>
                    <h2><strong>Single Parking Place Details</strong></h2>
                    <div class="card" style={{ marginTop: "50px" }}>
                        <img src="..." class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{singlepark.parkingPlaceName}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Total Parking Slot:{singlepark.totalSlot}</li>
                            <li className="list-group-item">Total Booked Slot:{singlepark.totalBookedSlot}</li>
                            <li className="list-group-item">Total Available:{singlepark.totalAvailableSlot}</li>
                            <li className="list-group-item">Amount: TwoWheer - 30 and FourWheeler - 60</li>
                            <li className="list-group-item">Contact:"#"</li>
                            <li className="list-group-item">Address:"#"</li>
                        </ul>
                        <div className="card-body">
                            <button className="btn btn-primary" onClick={nextPage} >Slot Booking</button>

                        </div>
                    </div>
                </div>


            }
        </div >
    )
}
export default Viewparkingplace;