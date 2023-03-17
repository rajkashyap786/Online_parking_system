import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';

function LocationName() {

    // const navigate = useNavigate();

    const [loc, setloc] = useState([]);

    const getData = () => {
        let token = localStorage.getItem("authToken");

        fetch("http://localhost:8080/location/getAllLocation", {
            method: "GET",
            mode: 'cors',
            headers: {
                "Authorization": "Bearer " + token
            },
        })
            .then(res => res.json())
            .then(parkloc => {
                setloc(parkloc)
                console.log(parkloc)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getData();
    }, []);

    // const handleSubmit = () => {
    //     navigate("/Viewparkingplace");
    // };

    return (


        <div>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid" >
                    <Link to="/UserPage" className="navbar-brand">Premium Parking Service</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/UserPage" className="nav-link active text-light" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Profile" className="nav-link active text-light" aria-current="page">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/About" className="nav-link text-light mr-4">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Contact" className="nav-link text-light mr-4">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link text-light mr-4">SignOut</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <div className="container">
                {loc.map((parkloc, index) => {
                    return (

                        <div className="content23-col-2 text-center" style={{ display: "inline-flex", marginLeft: "20px" }} key={index}>
                            <div className="card text-bg-dark mt-5" style={{ width: "18rem" }} >
                                <img src={parkloc.imgeName} className="card-img-top" alt="locImage" />
                                <div className="card-body">
                                    <h5 className="card-title">{parkloc.locationName}</h5>
                                    <p className="card-text">{parkloc.description}</p>
                                    <Link to="/Viewparkingplace" state={{ id: parkloc.locationId }}><button className="btn btn-primary">All Parkings</button></Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default LocationName;