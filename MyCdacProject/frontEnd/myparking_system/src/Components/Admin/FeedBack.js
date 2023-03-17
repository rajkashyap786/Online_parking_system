import React, { useEffect, useState } from "react";
import Adminnav from "../Adminnav";
import { Link } from "react-router-dom";

const FeedBack = () => {

    const [getfeed, setGetfeed] = useState()

    const userFeedBack = () => {

        let token = localStorage.getItem("authToken");

        fetch("http://localhost:8080/Contact/UsrFeedback", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + token,
            }
        })
            .then(res => res.json())
            .then(feedbackMsg => {
                console.log(feedbackMsg);
                setGetfeed(feedbackMsg);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        userFeedBack();
    }, []);

    return (
        <div>
            <Adminnav />
            <div className="container mt-5" >
                <div className="col-sm-5 col-md-6 col-12 pb-4">
                    <h1>Users FeedBack</h1>

                    {
                        Array.isArray(getfeed)
                            ? getfeed.map((Viewfeed, index) => {
                                return (
                                    <div className="comment card mt-5 pb-6 text-justify" key={index}>
                                        <img src="#" alt="" className="rounded-circle" width="40" height="40" />
                                        <h4>{Viewfeed.name}</h4>
                                        <span>{Viewfeed.addedDate}</span>
                                        <br />
                                        <p>{Viewfeed.content}</p>
                                        <Link to="/ReplyFeedBack" state={{ id: Viewfeed.contactId }}><button className="btn btn-primary">Reply</button></Link>
                                    </div>
                                )
                            })
                            : null
                    }
                </div>
            </div>
        </div>

    )
}
export default FeedBack;