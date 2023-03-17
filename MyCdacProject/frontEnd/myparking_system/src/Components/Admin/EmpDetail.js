import React, { useEffect, useState } from "react";
import Adminnav from "../Adminnav";
import { Link } from "react-router-dom";

function EmpDetail() {


    const [user, setUser] = useState([])

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
                setUser(usr);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getUser();
    }, []);

    return (

        <div>
            <Adminnav />

            <Link to="/AdminPage">
                <button>GO Back</button>
            </Link>
            <div className="container" style={{ marginTop: "20px" }}>
                <div className="row" style={{ paddingTop: "15px", paddingBottom: "15px" }}>
                    <h3 className="col-6">Employee Details</h3>
                </div>

                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>S.No</th>
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
                                if (usr.role === "Emp_User") {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{usr.name}</td>
                                            <td>{usr.email}</td>
                                            <td>{usr.username}</td>
                                            <td>{usr.contact}</td>
                                            <td>{usr.address}</td>
                                            {/* <td>
                                 {usr.approved===true?
                                  (<button className="btn btn-danger" onClick={()=>{this.approval(index)}}>Update</button>): 
                                  (<button className="btn btn-success" onClick={()=>{this.approval(index)}}>delete</button>)}
                               </td>  */}
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
export default EmpDetail;