import React from "react";
import Usernav from "./Usernav";

function About() {
    return (
        <div>
            <Usernav />
            <section className="w3l-service-1 py-5">
                <div className="container py-md-5 py-4">
                    <div className=" container title-main text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: "500px" }}>
                        <p className="text-uppercase">Why Choose Us</p>
                        <h3 className="title-style">Smart Parking System And Safe Environment</h3>
                    </div>
                    <div className="row content23-col-2 text-center">
                        <div className="col-md-6">
                            <div className="content23-grid content23-grid1">
                                <h4><a>Parking Slot Booking System</a></h4>
                                <p>The built-in parking reservation system allows you to manage bookings, customer details,
                                    park space types and extra services on your car parking website.</p>
                            </div>
                        </div>
                        <div className="col-md-6 mt-md-0 mt-4">
                            <div className="content23-grid content23-grid2">
                                <h4><a>Parking spaces and extras</a></h4>
                                <p>Add and manage different types of parking spaces and offer various extra services
                                    such as car wash, express lane, meet and greet, etc.</p>
                            </div>
                        </div>
                        <div className="col-md-6 mt-md-0 mt-4">
                            <div className="content23-grid content23-grid2">
                                <h4><a>Manage Prices and Promos</a></h4>
                                <p>Set standard parking fees (per hour, per day, etc.) for particular periods.
                                    Launch hot offers and special discounts to promote sales and foster customer loyalty.</p>
                            </div>
                        </div>
                        <div className="col-md-6 mt-md-0 mt-4">
                            <div className="content23-grid content23-grid2">
                                <h4><a>Process Online Payment</a></h4>
                                <p>It supports the most popular payment gateways. We can also integrate others upon request.
                                    You can configure deposit and tax payments.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default About;