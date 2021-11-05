import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddServices.css';

const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://infinite-beach-17393.herokuapp.com/services', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert("added successfully");
                    reset();
                }
            })
        // .catch(function (error) {
        //     console.log(error);
        // });

    }

    return (
        <div className="addService">
            <h1 id="add-h1">please add a services</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("img")} placeholder="photo" /> <br />
                <input {...register("name")} Placeholder="enter your name" /> <br />
                <input {...register("location")} placeholder="Location" /> <br />
                <input {...register("facilities")} placeholder="Facilities" /> <br />
                <textarea {...register("details")} placeholder="Description" /> <br />
                <input type="number" {...register("price")} placeholder="price" /> <br />
                {/* <Button className="btn btn-success"> Submit</Button> */}
                <input className="btn btn-success" type="submit" />

            </form>

        </div>
    );
};

export default AddServices;
