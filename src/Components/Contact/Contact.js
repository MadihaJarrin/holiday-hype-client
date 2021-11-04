import Button from '@restart/ui/esm/Button';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://murmuring-brushlands-16915.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div id="about-cont">
            <div className="about border-end border-info">
                <h4>If  You  Have  Any  query , </h4>
                <h3> Please Contact With us</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Your Name" />
                    <input type="text" {...register("price")} placeholder="Your Email" />
                    <textarea {...register("description")} placeholder="Your Query" />
                    <Button className="btn btn-success"> Submit</Button>
                </form><br /><br />
                <h2>Contact with us </h2>
                <h5>Our Email:<a href="#">holidayhype@gmail.com</a></h5>
                <h5>Contact Number: +986524735</h5>

            </div>
            <div>
                <img src="https://media.istockphoto.com/vectors/woman-talking-with-a-counselor-or-therapist-using-her-mobile-phone-vector-id1300081009?k=20&m=1300081009&s=612x612&w=0&h=urBrgdFmDVORwUZftRiwEZogaX8ESsapRt6uBA5FYxY=" alt="" />
            </div>
        </div>
    );
};

export default Contact;