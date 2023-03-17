import React from "react";
import { FaTelegramPlane } from 'react-icons/fa';


function Footer() {
    return (

        <div >
            <footer className="w3l-footer-29-main">
                <div className="footer-29 pt-5 pb-4">
                    <div className="container pt-md-4">
                        <div className="row footer-top-29">
                            <div className="col-lg-4 col-md-6 footer-list-29">
                                <h6 className="footer-title-29">Contact Info </h6>
                                <p className="mb-2 pe-xl-5">Address : ABC Parking Service, 10001, 5th Avenue, #06 lane street, NY - 62617.
                                </p>
                                <p className="mb-2">Phone Number : <a href="tel:+1(21) 234 4567">+1(21) 673 4587</a></p>
                                <p className="mb-2">Email : <a href="mailto:info@eazyschool.com">abc@parkingservice.com</a></p>
                            </div>
                            <div className="col-lg-2 col-md-3 col-6 footer-list-29 mt-md-0 mt-4">
                                <ul>
                                    <h6 className="footer-title-29">Quick Links</h6>
                                    <li><a>About Us</a></li>
                                    <li><a>Courses</a></li>
                                    <li><a>Become a User</a></li>
                                    <li><a>Contact Us</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-3 col-6 ps-lg-5 ps-lg-4 footer-list-29 mt-md-0 mt-4">
                                <ul>
                                    <h6 className="footer-title-29">Explore</h6>
                                    <li><a>About US</a></li>
                                    <li><a>Privacy policy</a></li>
                                    <li><a>Contact Us</a></li>
                                    <li><a>License & uses</a></li>
                                    <li><a>benefitd</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-8 footer-list-29 mt-lg-0 mt-4 ps-lg-5">
                                <h6 className="footer-title-29">Subscribe</h6>
                                <form action="#" className="subscribe d-flex" method="post">
                                    <input type="email" name="email" placeholder="Email Address" required="" />
                                    <button className="button-style"><FaTelegramPlane /></button>
                                </form>
                                <p className="mt-3">Subscribe to our mailing list and get updates to your email inbox.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer;