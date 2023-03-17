import React from "react";

function RegisterParkingSpace() {
    return (

        <div className="container card" style={{ marginTop: "30px", paddingTop: "20px" }}>
            <h2 className="in-title">Register</h2>

            <div style={{ marginTop: "10px" }}>
                <div className="form-group pt-2">
                    <input className="form-control " type="text" placeholder="Location Name" />
                </div>
                <div className="form-group pt-2">
                    <input className="form-control" type="text" placeholder="Parking Place Name" />
                </div>
                <div className="form-group pt-2">
                    <input className="form-control" type="number" placeholder="Total number of Parking" />
                </div>
                <div className="form-group pt-2">
                    <input className="form-control" type="number" placeholder="Parking charge for 2 wheeler" />
                </div>
                <div className="form-group pt-2">
                    <input className="form-control" type="number" placeholder="Parking charge for 4 wheeler" />
                </div>
                <div className="form-group pt-2 row">
                    <button className="btn btn-primary col-2 mr-3" >Register</button>
                </div>
            </div>
        </div>
    )
}
export default RegisterParkingSpace;

