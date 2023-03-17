import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegisterEmp() {

    const [usrdata, setUsrdata] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
        contact: "",
        address: ""
    });
    const [regConf, setRegConfig] = useState({
        val: false,
        message: " "
    });

    const hideRegMessage = () => setRegConfig(false);

    const changeHandler = (e) => {
        setUsrdata((usrdata) => ({
            ...usrdata,
            [e.target.name]: e.target.value
        }));
    }

    const registerEmp = () => {

        let token = localStorage.getItem("authToken");

        fetch("http://localhost:8080/users/createEmp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify({
                name: usrdata.name,
                email: usrdata.email,
                username: usrdata.username,
                password: usrdata.password,
                contact: usrdata.contact,
                address: usrdata.address
            })
        })
            .then(res => res.json())
            .then((resData) => {
                console.log(resData);
                setRegConfig({
                    val: true,
                    message: resData.message
                });
                setUsrdata({
                    name: "",
                    email: "",
                    username: "",
                    password: "",
                    contact: "",
                    address: ""
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="regbg" >

            {
                regConf.val === true ? (
                    <div className="alert alert-success" style={{ marginTop: "20px" }} onClick={() => { hideRegMessage() }}>{regConf.message}</div>
                ) : (null)
            }

            <div className="container card" style={{ marginTop: "50px", paddingTop: "30px" }}>
                <h2 className="in-title">User Registeration</h2>

                <div style={{ marginTop: "10px" }}>
                    <div className="form-group pt-2">
                        <input className="form-control" name="name" type="text" value={usrdata.name} onChange={changeHandler} placeholder="Name" />
                    </div>
                    <div className="form-group pt-2">
                        <input className="form-control" name="email" type="email" value={usrdata.email} onChange={changeHandler} placeholder="Email" />
                    </div>
                    <div className="form-group pt-2">
                        <input className="form-control" name="username" type="text" value={usrdata.username} onChange={changeHandler} placeholder="Username" />
                    </div>
                    <div className="form-group pt-2">
                        <input className="form-control" name="password" type="password" value={usrdata.password} onChange={changeHandler} placeholder="Password" />
                    </div>
                    <div className="form-group pt-2">
                        <input className="form-control" type="password" placeholder="Confirm Password" />
                    </div>
                    <div className="form-group pt-2">
                        <input className="form-control" name="contact" type="tel" value={usrdata.contact} onChange={changeHandler} placeholder="Contact" />
                    </div>
                    <div className="form-group pt-2">
                        <input className="form-control" name="address" type="text" value={usrdata.address} onChange={changeHandler} placeholder="Address" />
                    </div>
                    <div className="form-group pt-2 row">
                        <button className="btn btn-primary col-2 mr-3" onClick={registerEmp} >Register</button>
                        <Link to="/Home" className="nav-link"> Already Registered? <strong>Login Now</strong></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RegisterEmp;

