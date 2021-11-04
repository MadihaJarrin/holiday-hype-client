import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css'


const Home = () => {
    return (
        <div>

            <div className="contain">
                <img className="border border-primary img-fluid" src="https://buckinghaminvestmentllc.com/wp-content/uploads/2021/02/Dubai-J.jpg" alt="Snow" />
                <div className="centered">
                    {/* <h1>Do you need our service ??</h1> */}
                    <h1>We are here to give you our best service</h1>
                    <div className="justify-content-center d-flex">
                        <NavLink type="button" className="btn btn-danger" id="contact-button" to="/contact">Contact us</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;