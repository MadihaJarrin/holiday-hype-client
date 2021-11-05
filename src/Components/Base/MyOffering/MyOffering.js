import React, { useEffect, useState } from 'react';

const MyOffering = () => {

    const [offers, setOffer] = useState([]);
    useEffect(() => {
        const url = "https://infinite-beach-17393.herokuapp.com/services";
        fetch(url)
            .then(res => res.json())
            .then(data => setOffer(data));
    }
        , [])
    return (
        <div>
            <h1>My Offering For you </h1>
            {
                offers.map((offer) => {
                    const { name, img, details, location, facilities, price } = offer;
                    return (
                        <div>
                            <img src={img} alt="" />
                            <h1>{name}</h1>
                            <h3>{location}</h3>
                            <h4>{facilities}</h4>
                            <p>{details}</p>
                            <h2>{price}</h2>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default MyOffering;