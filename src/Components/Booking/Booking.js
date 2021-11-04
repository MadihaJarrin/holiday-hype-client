import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Booking.css'
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const Booking = () => {
    const { serviceId } = useParams();
    const { user } = useAuth();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`https://murmuring-brushlands-16915.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    })
    const [offers, setOffer] = useState([]);
    useEffect(() => {
        const url = "https://murmuring-brushlands-16915.herokuapp.com/services";
        fetch(url)
            .then(res => res.json())
            .then(data => setOffer(data));
    }
        , [])

    //for user 
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");

    // const handleName = e => {
    //     setName(e.target.value);
    // }
    // const handleEmail = e => {
    //     setEmail(e.target.value)
    // }
    const handleAddress = e => {
        setAddress(e.target.value)
    }
    const handleContact = e => {
        setContact(e.target.value)
    }
    //For confirm button

    const handleAddUser = () => {
        const name = user.displayName;
        const email = user.email;

        const data = ({
            name: name,
            email: email,
            address: address,
            contact: contact,
            serviceImg: service.img,
            serviceName: service.name,
            servicePrice: service.price,
            // serviceLocation: service.address,
            serviceDetails: service.details,
            status: "Pending",
        });
        console.log(data);

        fetch("https://murmuring-brushlands-16915.herokuapp.com/addOrder", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),

        })
        // .then(res => res.jdon())
        // .then(data => console.log(data));
    };
    return (
        <div className="booking-container">

            <div className="booking-details">
                <img src={service.img} alt="" />
                <h6>This is booking : {serviceId}</h6>
                <h2> {service.name}</h2>
                <h5> Location: {service.location}</h5>
                <h5> Facilities: {service.facilities}</h5>
                <p> : {service.details}</p>
                <h2>Price : {service.price}</h2>
            </div>

            <div className="mt-5  d-flex justify-content-center ">
                <div className="booking-confirm">
                    <div className="add-services">
                        <form>
                            <h5>Your Name</h5>
                            <input value={user.displayName} />
                            <h5>Your Email</h5>
                            <input value={user.email} />
                            <h5>Your Location</h5>
                            <input onChange={handleAddress} placeholder="Adress" />
                            <h5>Contact Number</h5>
                            <input onChange={handleContact} placeholder="Phone Number" />
                            <h5>Booking Name </h5>
                            <input value={service.name} type="text" placeholder=" Booking Name" />
                            <h5>Booking Price</h5>
                            <input value={service.price} type="number" placeholder=" Booking Price" />
                            <Link to={`/myorder`}>
                                <Button onClick={handleAddUser} variant="primary" className="btn btn-success"><b>Booking Confirm</b></Button>
                            </Link>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Booking;
