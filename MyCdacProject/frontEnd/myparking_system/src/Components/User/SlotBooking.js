import React, { useState } from "react";
import Usernav from "../Usernav";
import { useNavigate, Link } from 'react-router-dom';

function SlotBooking() {

    const navigate = useNavigate();

    const [slotbook, setSlotbook] = useState({
        vehicleOwner: "",
        vehicleName: "",
        vehicleNumber: "",
        vehicleType: "",
        parkingTime: "",
        exitTime: ""
    });

    const readValue = (e) => {
        setSlotbook((slotbook) => ({
            ...slotbook,
            [e.target.name]: e.target.value
        }));
    }

    const creatBooking = () => {
        let token = localStorage.getItem("authToken");
        fetch("http://localhost:8080/Booking/CreateBook", {
            method: "POST",
            mode: "cors",
            headers: {
                "Authorization": "Bearer " + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                vehicleOwner: slotbook.vehicleOwner,
                vehicleName: slotbook.vehicleName,
                vehicleNumber: slotbook.vehicleNumber,
                vehicleType: slotbook.vehicleType,
                parkingTime: slotbook.parkingTime,
                exitTime: slotbook.exitTime
            })
        })
            .then(res => res.json())
            .then(res => setSlotbook(res))
            .catch((err) => {
                console.log(err)
            })
    }

    const handleSubmit = event => {
        event.preventDefault();
        navigate("/Payment");
    };
    return (

        <div>
            <Usernav />
            <Link to="/SingleParking">
                <button>GO Back</button>
            </Link>
            <div className="container card" style={{ marginTop: "30px", paddingTop: "20px" }}>
                <h2 className="in-title">Parking Space Booking</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginTop: "10px" }}>
                        <div className="form-group pt-2">
                            <input className="form-control " type="text" name="vehicleOwner" onChange={readValue} placeholder="Enter Owner Name" />
                        </div>
                        <div className="form-group pt-2">
                            <input className="form-control" type="text" name="vehicleName" onChange={readValue} placeholder="Enter Vehicle Name" />
                        </div>
                        <div className="form-group pt-2">
                            <input className="form-control" type="text" name="vehicleNumber" onChange={readValue} placeholder="Enter Vehicle Number" />
                        </div>
                        <div className="form-group pt-2">
                            {/* <input className="form-control" type="text" name="vehicleType" placeholder="Vehicle Type" /> */}
                            <input className="form-control" type="text" name="vehicleType" placeholder=" Select Vehicle Type" onChange={readValue} list="vehiclename" />
                            <datalist id="vehiclename">
                                <option value="TwoWheeler">TwoWheeler</option>
                                <option value="FourWheeler">FourWheeler</option>
                            </datalist>
                        </div>
                        <div className="form-group pt-2 my-3">
                            <label>Parking Time</label>
                            <input className="form-control" type="time" name="parkingTime" onChange={readValue} placeholder="Parking Time" />
                        </div>
                        <div className="form-group pt-2">
                            <label>Exit Time</label>
                            <input className="form-control" type="time" name="exitTime" onChange={readValue} placeholder="Exit Time" />
                        </div>

                        <div className="form-group pt-2 pb-2 my-3 px-5 row">
                            <button className="btn btn-primary col-2 mr-3" type="submit" onClick={creatBooking} >submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SlotBooking;