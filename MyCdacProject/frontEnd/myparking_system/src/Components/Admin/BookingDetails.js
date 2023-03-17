import React, { useEffect, useState } from "react";
import Adminnav from "../Adminnav";
import { Link } from "react-router-dom";

function BookingDetails() {

    const [book, setBook] = useState({});
    const [delmsg, setDelmsg] = useState({
        val: false,
        message: " "
    });

    const handleBooking = () => {

        let token = localStorage.getItem("authToken");

        fetch("http://localhost:8080/Booking/fetchAllBooking", {
            method: 'GET',
            headers: {
                "Authorization": "Bearer " + token,
            }
        })
            .then(res => res.json())
            .then(usrBookings => {
                setBook(usrBookings)
                console.log(usrBookings);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        handleBooking();
    }, []);

    const hideDelMessage = () => setDelmsg(false);

    const deleteBooking = (bookid) => {

        let token = localStorage.getItem("authToken");
        fetch("http://localhost:8080/Booking/bookingCancel/" + bookid, {
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer " + token,
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDelmsg({
                    val: true,
                    message: data.message
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <Adminnav />

            <Link to="/AdminPage">
                <button>GO Back</button>
            </Link>

            {
                delmsg.val === true ? (
                    <div className="alert alert-success" style={{ marginTop: "20px" }} onClick={() => { hideDelMessage() }}>{delmsg.message}</div>
                ) : (null)
            }
            <div className="container" style={{ marginTop: "20px" }}>
                <div className="row" style={{ paddingTop: "15px", paddingBottom: "15px" }}>
                    <h3 className="col-6">Booking Details</h3>
                </div>

                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Vehicle_Owner</th>
                            <th>Vehicle_Name</th>
                            <th>Vehicle_Number</th>
                            <th>Vehicle_Type</th>
                            <th>Parking_Time</th>
                            <th>Exit_Time</th>
                            <th>Amount</th>
                            <th>Activities</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            Array.isArray(book)
                                ? book.map((usrbook, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{usrbook.vehicleOwner}</td>
                                            <td>{usrbook.vehicleName}</td>
                                            <td>{usrbook.vehicleNumber}</td>
                                            <td>{usrbook.vehicleType}</td>
                                            <td>{usrbook.parkingTime}</td>
                                            <td>{usrbook.exitTime}</td>
                                            <td>{usrbook.amount}</td>
                                            <td>
                                                <button className="btn btn-success" onClick={() => { deleteBooking(usrbook.bookId) }}>delete</button>
                                            </td>
                                        </tr>
                                    )

                                })
                                : null
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default BookingDetails;