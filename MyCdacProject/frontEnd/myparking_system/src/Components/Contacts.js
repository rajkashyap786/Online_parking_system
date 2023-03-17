import React, { useState } from "react";
import Usernav from "./Usernav";

function Contact() {

    const [usrfeedback, setUsrfeedback] = useState({
        name: "",
        email: "",
        mobileNumber: "",
        content: ""
    });

    const FBHandler = (e) => {
        setUsrfeedback((usrfd) => ({
            ...usrfeedback,
            [e.target.name]: e.target.value
        }));
    }


    const GiveFeedBack = () => {
        let uid = localStorage.getItem("userId");
        let token = localStorage.getItem("authToken");

        fetch("http://localhost:8080/Contact/CreateUsrFeedback/" + uid, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token,
            },
            body: JSON.stringify({
                name: usrfeedback.name,
                email: usrfeedback.email,
                mobileNumber: usrfeedback.mobileNumber,
                content: usrfeedback.content
            })
        })
            .then(res => res.json())
            .then((resData) => {
                console.log(resData);
                // setRegConfig({
                //     val: true,
                //     message: resData.message
                // });
                setUsrfeedback({
                    name: "",
                    email: "",
                    mobileNumber: "",
                    contact: "",
                    content: "",
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <Usernav />
            <div className="container pb-md-5 pb-4">
                <h3 className="title-style pt-4 text-center">Contact Us</h3>
                <p className="mt-4 px-5">If you need any help or additional info about our parking system and services,
                    just complete the form and our friendly support team will contact you shortly!</p>

                <div className="row pb-xl-5 align-items-center">
                    <div className="col-lg-6 position-relative home-block-3-left pb-lg-0 pb-5">
                        <div className="position-relative">
                            <img src="image/parking.jpg" alt="" className="img-fluid radius-image" />
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 offset-xl-1 mt-lg-0 mt-5 pt-lg-0 pt-5">
                        <h3>FeedBack Form</h3>
                        <div style={{ marginTop: "10px" }} className="mt-4 list-style-lis pt-lg-1">
                            <div className="form-group pt-1">
                                <input className="form-control" type="text" name="name" value={usrfeedback.name} onChange={FBHandler} placeholder="Name" />
                            </div>
                            <div className="form-group pt-1">
                                <input className="form-control" type="email" name="email" value={usrfeedback.email} onChange={FBHandler} placeholder="Email" />
                            </div>
                            <div className="form-group pt-1">
                                <input className="form-control" type="text" name="mobileNumber" value={usrfeedback.mobileNumber} onChange={FBHandler} placeholder="Contact" />
                            </div>
                            <div className="form-group pt-1">
                                <input className="form-control" type="textarea" name="content" value={usrfeedback.content} onChange={FBHandler} placeholder="Type Here" style={{ height: "150px" }} />
                            </div>
                            <div className="form-group col-2 row pt-1">
                                <button className="btn btn-primary my-1" onClick={GiveFeedBack} >Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" bg-primary text-light">
                <div className="row content23-col-2 text-center">
                    <div className="col-md-4 pt-4">
                        <div className="content23-grid content23-grid1">
                            <h4>Head Office</h4>
                            <p>62/7B Yashoda Nagar Kanpur.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mt-md-0 mt-4 pt-4">
                        <div className="content23-grid content23-grid2">
                            <h4>Administrative Office</h4>
                            <p>55A Kalyanpur Kanpur</p>
                        </div>
                    </div>
                    <div className="col-md-4 mt-md-0 mt-4 pt-4">
                        <div className="content23-grid content23-grid2">
                            <h4>Branch Office</h4>
                            <p>42/A NeelMatha Kanpur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;