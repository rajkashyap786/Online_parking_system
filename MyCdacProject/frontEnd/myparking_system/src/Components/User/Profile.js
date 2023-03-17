import React, { useState, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom';

function Profile() {

    const navigate = useNavigate();

    const [user, setUser] = useState({});
    const [usrbooking, setUsrbooking] = useState({});
    const [updateModel, setUpdateModel] = useState(false);
    const [editDetails, setEditDetails] = useState({
        name: "",
        email: "",
        username: "",
        contact: "",
        address: ""
    })

    const readValue = (e) => {
        setEditDetails((editDetails) => ({
            ...editDetails,
            [e.target.name]: e.target.value
        }));
    }

    const openModal = () => setUpdateModel(true);
    const closeModal = () => setUpdateModel(false);

    const getDetails = () => {
        let uid = localStorage.getItem("userId");
        let token = localStorage.getItem("authToken");
        fetch("http://localhost:8080/users/singleUsr/" + uid, {
            method: "GET",
            mode: 'cors',
            headers: {
                "Authorization": "Bearer " + token
            },
        })
            .then(res => res.json())
            .then(profil => {
                setUser(profil)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {

        getDetails();
        UsrBookingDetails();

    }, [editDetails]);


    const submitUpdate = () => {
        let uid = localStorage.getItem("userId");
        let token = localStorage.getItem("authToken");
        fetch("http://localhost:8080/users/updateUsr/" + uid, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify({
                name: editDetails.name,
                email: editDetails.email,
                username: editDetails.username,
                contact: editDetails.contact,
                address: editDetails.address
            })
        })
            .then(res => res.json())
            .then(res => setEditDetails(res))
            .catch((err) => {
                console.log(err)
            })
    }

    const deleteUser = () => {
        let uid = localStorage.getItem("userId");
        let token = localStorage.getItem("authToken");
        fetch("http://localhost:8080/users/delUsr/" + uid, {
            method: 'DELETE',
            mode: "cors",
            headers: {
                "Authorization": "Bearer " + token
            }
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch((err) => {
                console.log(err)
            })
    }

    const UsrBookingDetails = () => {
        let uid = localStorage.getItem("userId");
        let token = localStorage.getItem("authToken");
        fetch("http://localhost:8080/Booking/fetchAll/" + uid, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        })
            .then(res => res.json())
            .then(bookdetail => {
                console.log(bookdetail);
                setUsrbooking(bookdetail);
            })
            .catch((err) => {
                console.log(err)
            })
    }


    const handleDelete = () => {
        navigate("/Home");
    };

    return (

        <div style={{ marginTop: "20px" }}>

            {/* modal*/}

            {
                updateModel === true && (

                    <div className="modal">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Update Profile Details</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div>
                                        <div className="form-group">
                                            <label style={{ fontWeight: 'bold' }}>Name</label>
                                            <input className="form-control" type="text" name="name" value={editDetails.name} placeholder="Name"
                                                defaultValue={user.name} onKeyUp={readValue} />
                                        </div>
                                        <div className="form-group">
                                            <label style={{ fontWeight: 'bold' }}>Email</label>
                                            <input className="form-control" type="text" name="email" value={editDetails.email} placeholder="Email"
                                                defaultValue={user.email} onKeyUp={readValue} />
                                        </div>
                                        <div className="form-group">
                                            <label style={{ fontWeight: 'bold' }}>Username</label>
                                            <input className="form-control" type="text" name="username" value={editDetails.username} placeholder="Username"
                                                defaultValue={user.username} onKeyUp={readValue} />
                                        </div>
                                        <div className="form-group">
                                            <label style={{ fontWeight: 'bold' }}>Mobile No.</label>
                                            <input className="form-control" type="text" name="contact" value={editDetails.contact} placeholder="Name"
                                                defaultValue={user.contact} onKeyUp={readValue} />
                                        </div>
                                        <div className="form-group">
                                            <label style={{ fontWeight: 'bold' }}>Address</label>
                                            <input className="form-control" type="text" name="address" value={editDetails.address} placeholder="Name"
                                                defaultValue={user.address} onKeyUp={readValue} />
                                        </div>

                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
                                    <button type="button" className="btn btn-primary" onClick={submitUpdate}>Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                )}

            {/* modal*/}

            <Link to="/UserPage">
                <button>GO Back</button>
            </Link>

            <div className="container card " style={{ marginTop: "30px", paddingTop: "50px", paddingRight: "30px" }}>

                <form>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="profile-head">
                                    <h5>
                                        {user.name}
                                    </h5>
                                    <h6>
                                        {user.username}
                                    </h6>
                                </div>
                            </div>
                            <div className="col-md-4">
                                {/* <div className="profile-img">
                                    <img src="#" alt="" />
                                    <div className="file btn btn-lg btn-primary">
                                        Change Photo
                                        <input type="file" name="file" />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <button className="nav-link active" data-toggle="tab" role="tab" aria-controls="About user" aria-selected="true">About</button>
                            </li>
                            {/* <li className="nav-item">
                                <button className="nav-link" data-toggle="tab" role="tab" aria-controls="Bookings" aria-selected="true" onClick={() => { UsrBookingDetails() }}>Bookings</button>
                            </li> */}
                        </ul>
                    </div>




                    <div className="row">
                        <div className="col-md-12">
                            <div className="tab-content profile-tab" style={{ paddingTop: "30px", paddingLeft: "30px" }} >
                                <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{user.name}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Username</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{user.username}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{user.email}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p> {user.contact}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Address</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p> {user.address}</p>
                                        </div>
                                    </div>

                                    <div className="card-footer bg-transparent border-12">
                                        <div className="row" style={{ padding: "20px" }}>
                                            <div className="col-md-2"><button className="btn btn-success mr-2" onClick={openModal}>Update</button></div>
                                            <div className="col-md-2"><button className="btn btn-danger" onClick={() => { deleteUser(); handleDelete() }}>Delete</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="container" style={{ marginTop: "50px" }}>
                        <h3>{user.name} booking Details</h3>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>VehicleOwner</th>
                                    <th>VehicleName</th>
                                    <th>VehicleNumber</th>
                                    <th>VehicleType</th>
                                    <th>Parking_Time</th>
                                    <th>Exit_Time</th>
                                    <th>amount</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>

                                {

                                    Array.isArray(usrbooking)
                                        ? usrbooking.map((Book, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{Book.vehicleOwner}</td>
                                                    <td>{Book.vehicleName}</td>
                                                    <td>{Book.vehicleNumber}</td>
                                                    <td>{Book.vehicleType}</td>
                                                    <td>{Book.parkingTime}</td>
                                                    <td>{Book.exitTime}</td>
                                                    <td>{Book.amount}</td>
                                                    <td></td>
                                                </tr>
                                            )
                                        })
                                        : null
                                }
                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
        </div>

    )
}
export default Profile;