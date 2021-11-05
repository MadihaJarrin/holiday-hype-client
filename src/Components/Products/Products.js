import React, { useEffect, useState } from 'react';
import Oservices from '../Oservices/Oservices';
import './Products.css'

const Products = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const url = `https://infinite-beach-17393.herokuapp.com/services`;
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    })
    return (
        <div className="product-container">
            <h1 >Our popular Offering services</h1>
            <div id="msr">
                {
                    services.map(service => <Oservices
                        key={service.id}
                        data={service}
                    ></Oservices>)
                }
            </div>
        </div>
    );
};

export default Products;