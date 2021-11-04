import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Oservices = (props) => {
    const { _id, name, facilities, location, img, details, price } = props.data;
    return (
        <div>
            <Card className="specialists-card shadow-lg p-3 mb-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} /> <br />
                <Card.Body>
                    {/* <Card.Title>{name}</Card.Title> */}
                    <h3>{name}</h3><br />
                    <h6>Location : {location}</h6>
                    <h6>Facilities : {facilities}</h6>
                    <Card.Text>
                        {details.slice(0, 70)}
                        {/* {details.slice(0, 70)} */}
                    </Card.Text>

                    <h3>Price: BDT {price}</h3>
                    <Link to={`/booking/${_id}`}>
                        <Button variant="primary" className="btn btn-danger"><b>Book Now</b></Button>
                    </Link>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Oservices;