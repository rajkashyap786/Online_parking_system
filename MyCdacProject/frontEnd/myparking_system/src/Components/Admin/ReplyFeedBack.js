import React, { useEffect, useState } from "react";
import Adminnav from "../Adminnav";
import { useLocation, Link } from 'react-router-dom';


const ReplyFeedBack = () => {

    const location = useLocation();

    const [getSinglefeed, setGetsinglefeed] = useState({})

    const FeedBackReply = () => {

        let token = localStorage.getItem("authToken");
        const FBId = location.state.id;
        console.log(FBId);

        fetch("http://localhost:8080/Contact/singleFeedback/" + FBId, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + token,
            }
        })
            .then(res => res.json())
            .then(feedbackDetail => {
                console.log(feedbackDetail);
                setGetsinglefeed(feedbackDetail);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        FeedBackReply();
    }, []);

    return (
        <div>
            <Adminnav />

            <Link to="/FeedBack">
                <button>GO Back</button>
            </Link>
            <div className="container mt-5" >
                <div className="col-sm-5 col-md-6 col-12 pb-4">
                    <h1>Users FeedBack</h1>

                    {

                        <div className="comment card mt-5 text-justify float-left">
                            <img src="#" alt="" className="rounded-circle" width="40" height="40" />
                            <h4>{getSinglefeed.name}</h4>
                            <span>{getSinglefeed.addedDate}</span>
                            <br />
                            <p>{getSinglefeed.content}</p>
                            <hr />
                            <div className="form-group">
                                <h4>Reply a comment</h4>
                                <textarea name="msg" id="" msg cols="30" rows="5" class="form-control" ></textarea>
                            </div>
                            <div className="form-group">
                                <button type="button" className=" btn btn-primary">Post Comment</button>
                            </div>

                        </div>
                    }

                </div>
            </div>

        </div>

    )
}
export default ReplyFeedBack;