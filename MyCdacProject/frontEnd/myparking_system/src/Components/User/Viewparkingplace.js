import React, { useEffect, useState } from "react";
import Usernav from "../Usernav";
import { useLocation, Link } from 'react-router-dom';


function Viewparkingplace() {

    const location = useLocation();

    // console.log(locId);
    const [viewpark, setViewpark] = useState([]);

    const getpark = () => {
        let token = localStorage.getItem("authToken");
        const locId = location.state.id;
        fetch("http://localhost:8080/parking/getAllparkPlaceBaseOnLoc/" + locId, {
            method: "GET",
            mode: 'cors',
            headers: {
                "Authorization": "Bearer " + token
            },
        })
            .then(res => res.json())
            .then((res) => {
                setViewpark(res)
                console.log(res)
            })
            .catch((err) => {
                console.log(err);
            })
    }


    useEffect(() => {
        getpark();
    }, []);

    return (

        <div>
            <Usernav />

            <div className="container">
                {
                    Array.isArray(viewpark)
                        ? viewpark.map((park, index) => {
                            return (
                                <div className="card" style={{ display: "inline-flex", width: "18rem", marginTop: "50px", marginLeft: "20px" }} key={index}>
                                    <img src="..." className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{park.parkingPlaceName}</h5>
                                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Total Parking Slot{park.totalSlot}</li>
                                        <li className="list-group-item">Two wheeler Amount: Rs 30</li>
                                        <li className="list-group-item">Four wheeler Amount: Rs 60</li>
                                    </ul>
                                    <div className="card-body">
                                        <Link to="/SingleParking" state={{ id: park.parkingPlaceId }}> <button className="btn btn-primary" >More Details</button></Link>
                                    </div>
                                </div>
                            )
                        })
                        : null
                }
            </div>
        </div>
    )
}
export default Viewparkingplace;