import Button from '@restart/ui/esm/Button';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://infinite-beach-17393.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div>
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
            <div className="map-cont">
                <h2>Our Location</h2>
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58403.658902489224!2d90.32726123372136!3d23.81046589720496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c1c61277db%3A0xc7d18838730e2e59!2z4Kau4Ka_4Kaw4Kaq4KeB4KawLCDgpqLgpr7gppXgpr4!5e0!3m2!1sbn!2sbd!4v1634704620824!5m2!1sbn!2sbd" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    );
};

export default Contact;