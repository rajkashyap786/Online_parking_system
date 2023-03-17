import React from "react";
import "../Components/Homebg.css";
import { HiUserGroup } from 'react-icons/hi';
import { GrMapLocation } from 'react-icons/gr';
import { FaRegBuilding } from 'react-icons/fa';

function Feature() {
    return (
        <div className="backColor">
            <div className="container py-md-5 py-4">
                <div className="title-main text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: "500px" }}>
                    <p className="text-uppercase">Best Features</p>
                    <h3 className="title-style">We always think our customer comfort</h3>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                        <div className="icon-box icon-box-clr-1">
                            <div className="icon"><HiUserGroup /></div>
                            <h4 className="title"><a>Our Happy clients</a></h4>
                            <p>0</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mt-lg-0 mt-4">
                        <div className="icon-box icon-box-clr-3">
                            <div className="icon"><GrMapLocation /></div>
                            <h4 className="title"><a>States We Served</a></h4>
                            <p>5</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mt-lg-0 mt-4">
                        <div className="icon-box icon-box-clr-4">
                            <div className="icon"><FaRegBuilding /></div>
                            <h4 className="title"><a>Years Of Experience</a></h4>
                            <p>10 years</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mt-lg-0 mt-4">
                        <div className="icon-box icon-box-clr-4">
                            <div className="icon"><FaRegBuilding /></div>
                            <h4 className="title"><a>Total Parking Places</a></h4>
                            <p>120</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Feature;