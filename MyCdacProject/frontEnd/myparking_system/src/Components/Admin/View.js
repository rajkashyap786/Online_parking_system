import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Adminnav from "../Adminnav";
// import { Link } from "react-router-dom";

function View() {

    const navigate = useNavigate();
    const [user, setUser] = useState([])
    const [usrdelmsg, setUsrdelmsg] = useState({
        val: false,
        message: " "
    });

    const getUser = () => {
        let token = localStorage.getItem("authToken");
        // console.log(token)
        fetch("http://localhost:8080/users/AllUsr/", {
            method: "GET",
            mode: 'cors',
            headers: {
                "Authorization": "Bearer " + token
            },
        })
            .then(res => res.json())
            .then(usr => {
                // setUser(usr)
                console.log(usr);
                setUser(usr)

            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getUser();
    }, []);

    const hideDelMessage = () => setUsrdelmsg(false);

    const deleteUser = (uid) => {

        let token = localStorage.getItem("authToken");
        fetch("http://localhost:8080/users/delUsr/" + uid, {
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer " + token,
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUsrdelmsg({
                    val: true,
                    message: data.message
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const empDetail = () => {
        navigate('/EmpDetail');
    }

    return (

        <div>
            <Adminnav />

            {
                usrdelmsg.val === true ? (
                    <div className="alert alert-success" style={{ marginTop: "20px" }} onClick={() => { hideDelMessage() }}>{usrdelmsg.message}</div>
                ) : (null)
            }
            <div className="container" style={{ marginTop: "20px" }}>
                <div className="row" style={{ paddingTop: "15px", paddingBottom: "15px" }}>
                    <h3 className="col-md-3">Registered Users</h3>
                    <button className="btn btn-primary col-md-2 offset-7" onClick={empDetail}>Employee Details</button>
                </div>

                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Contact</th>
                            <th>Address</th>
                            <th>Activities</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            user.map((usr, index) => {
                                if (usr.role === "Reg_User") {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{usr.name}</td>
                                            <td>{usr.email}</td>
                                            <td>{usr.username}</td>
                                            <td>{usr.contact}</td>
                                            <td>{usr.address}</td>
                                            <td>
                                                <button className="btn btn-success " onClick={() => { deleteUser(usr.userid) }}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}
export default View;