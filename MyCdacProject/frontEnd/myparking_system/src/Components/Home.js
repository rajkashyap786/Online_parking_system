import React, { useState } from "react";
import "../Components/Homebg.css";
import Footer from "./Footer";
import Feature from "./Feature";
import { HiSearch } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    const [data, setData] = useState({
        username: "",
        password: "",
        loginError: ""
    });

    let [searchdata] = useState();

    const changeHandler = (e) => {
        setData((data) => ({
            ...data,
            [e.target.name]: e.target.value
        }));
    }

    const submitDetails = () => {
        fetch("http://localhost:8080/login/usr", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: data.username,
                password: data.password
            })
        })
            .then(res => res.json())
            .then((dat) => {
                // console.log(dat);
                // console.log(Object.keys(dat).length);
                if (Object.keys(dat).length !== 0) {
                    // const dat = JSON.parse(data)
                    localStorage.setItem("authToken", dat.token);
                    localStorage.setItem("userId", dat.user.userid);
                    if (dat.user.role === "Emp_User") {
                        navigate('/AdminPage');
                    }
                    else if (dat.user.role === "Reg_User") {
                        navigate('/UserPage');
                    }
                }

            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleSearch = (event) => {
        searchdata = event.target.value;
    }

    const searchParkingPlace = () => {

        fetch("http://localhost:8080/parking/search/" + searchdata, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((searchedDetail) => {
                // console.log(searchedDetail)
                navigate('/SearchedData', { state: { searchedDetail } });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="loginbg">

            <div className="search-container form-group col-12">

                <input className="search" type="text" style={{ height: "50px" }} placeholder="Search Parking Place here...." name="search" onChange={handleSearch} />
                <button className="search-button" style={{ height: "50px" }} type="submit" onClick={searchParkingPlace} ><HiSearch /></button>

            </div>
            <div className="container pb-md-5 pb-4 pt-5">
                <div className="row pb-xl-5 align-items-center">
                    <div className="col-lg-6 position-relative home-block-3-left pb-lg-0 pb-5">
                        <div className="position-relative">
                            <img src="image/goodparking.jpg" alt="" className="img-fluid radius-image" />
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 offset-xl-1 mt-lg-0 mt-5 pt-lg-0 pt-5">
                        <h3>Login</h3>
                        <div style={{ marginTop: "10px" }} className="mt-4 list-style-lis pt-lg-1">
                            <div className="form-group pt-1">
                                <input className="form-control" name="username" type="text" value={data.username} onChange={changeHandler} placeholder="Username" />
                            </div>
                            <div className="form-group pt-1">
                                <input className="form-control" name="password" type="password" value={data.password} onChange={changeHandler} placeholder="Password" />
                            </div>
                            <div className="form-group  row pt-2">
                                <button className="btn btn-primary col-2" onClick={submitDetails} >submit</button>
                                <Link to="/Register" className="nav-link"> Do Not Have a Account? <strong>Register Now</strong></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Feature />
            <Footer />
        </div>
    )
}
export default Home;