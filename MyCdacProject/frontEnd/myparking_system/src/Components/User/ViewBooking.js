import React from "react";

function ViewBooking() {

    return (
        <div style={{ marginTop: "20px" }}>
            <div className="row" style={{ paddingTop: "15px", paddingBottom: "15px" }}>
                <h3 className="col-md-3">Booking Details</h3>
                {/* <Link to="/dashboard/users/create" className="btn btn-primary col-md-2 offset-7">Add Users</Link> */}
            </div>

            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Parking Place</th>
                        <th>Vehicle Name</th>
                        <th>Parking Time</th>
                        <th>Exit Time</th>
                        <th>Paid Amount</th>
                        <th>Activities</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        //     user.map((usr, index) => {
                        //         return (<tr key={index}>
                        //             <td>{index + 1}</td>
                        //             <td>{usr.name}</td>
                        //             <td>{usr.email}</td>
                        //             <td>{usr.username}</td>
                        //             <td>{usr.contact}</td>
                        //             <td>{usr.address}</td>
                        //             {/* <td>
                        //      {usr.approved===true?
                        //       (<button className="btn btn-danger" onClick={()=>{this.approval(index)}}>UnApprove</button>): 
                        //       (<button className="btn btn-success" onClick={()=>{this.approval(index)}}>Approve</button>)}
                        //    </td>  */}
                        //         </tr>)
                        //     })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default ViewBooking;