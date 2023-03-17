import React, { useState } from "react";
import Adminnav from "../Adminnav";
import axios from 'axios';

function RegisterLoc() {

    const [loc, setLoc] = useState({
        locationName: "",
        description: ""
    });

    const [file1, setFile] = useState("");

    const [locRegConf, setLocRegConfig] = useState({
        val: false,
        message: " "
    });

    const hideRegMessage = () => setLocRegConfig(false);

    const handleData = (e) => {
        setLoc(loc => ({
            ...loc,
            [e.target.name]: e.target.value
        }));

        // setLoc(e.target.value)
    }

    const handlePhoto = (e) => {
        setFile(e.target.files[0]);
    }

    const handlefileUpload = () => {

        let token = localStorage.getItem("authToken");

        const formdata = new FormData();
        formdata.append("file", file1);
        formdata.append("loc1", loc.locationName);
        formdata.append("loc", loc.description);
        // formdata.append("loc", {
        //     locationName: loc.locationName,
        //     description: loc.description
        // });

        axios({
            method: "post",
            url: "http://localhost:8080/location/creatLocation",
            data: formdata,
            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "multipart/form-data"
            },
        })
            .then(res => {
                console.log(res);
                setLocRegConfig({
                    val: true,
                    message: res.data.message
                });

                // setLoc({
                //     locationName: "",
                //     description: ""
                // });
                // setFile("")
            })
            .catch(err => {
                console.log(err);
            })
    }






    return (

        <div>
            <Adminnav />

            {
                locRegConf.val === true ? (
                    <div className="alert alert-success" style={{ marginTop: "20px" }} onClick={() => { hideRegMessage() }}>{locRegConf.message}</div>
                ) : (null)
            }
            <div className="container card" style={{ marginTop: "30px", paddingTop: "20px" }}>
                <h2 className="in-title">Register Location</h2>

                <div style={{ margin: "10px" }}>
                    <div className="form-group pt-2">
                        <input className="form-control" name="locationName" onChange={handleData} type="text" placeholder="Location Name" />
                    </div>
                    <div className="form-group pt-2">
                        <input className="form-control" name="description" onChange={handleData} type="text" placeholder="Description" />
                    </div>
                    <div className="form-group pt-2">
                        <input className="form-control" type="file" name="file1" onChange={handlePhoto} placeholder="location_img" />
                    </div>
                    <div className="form-group pt-3 row">
                        <button className="btn btn-primary col-2 mr-3" onClick={handlefileUpload} >submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RegisterLoc;

