import React from 'react';
import './Counter.css';

const Counter = () => {
    return (
        <div className="counter-cont">
            <div className="pt-5 pb-5">
                <div className="counter-up">
                    <div className="content">
                        <div className="box">
                            <div className="icon"><i className="fas fa-user-md"></i></div>
                            <div className="counter">80</div>
                            <div className="text">Tourist Spot </div>
                        </div>
                        <div className="box">
                            <div className="icon"><i className="fas fa-user-injured"></i></div>
                            <div className="counter">99</div>
                            <div className="text">Restaurent</div>
                        </div>
                        <div className="box">
                            <div className="icon"><i className="fas fa-procedures"></i></div>
                            <div className="counter">1000</div>
                            <div className="text">Premium Hotel</div>
                        </div>
                        <div className="box">
                            <div className="icon"><i className="fas fa-award"></i></div>
                            <div className="counter">120</div>
                            <div className="text">Awards Received</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;