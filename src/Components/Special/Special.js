import React from 'react';
import './Special.css';

const Special = () => {
    return (
        <div className="special-container">
            <div className="contain-sp">
                <h1 style={{ fontWeight: 600, color: '#0D305C', marginTop: 40 }} className="mt-5">Our Special Features For You</h1>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 mt-3">
                    <div className="col" id="card">
                        <i className="fas fa-broom"></i>
                        <p className="fw-bolder"> USA-standard housekeeping & cleaning services</p>
                    </div>
                    <div className="col" id="card">
                        <i class="fas fa-capsules"></i>
                        <p className="fw-bolder">24-hours services</p>
                    </div>
                    <div className="col" id="card">
                        <i class="fas fa-car"></i>
                        <p className="fw-bolder">Convenient & secured car parking</p>
                    </div>
                    <div className="col" id="card">
                        <i class="fas fa-mug-hot"></i>
                        <p className="fw-bolder"> 24/7 Cafeteria Services</p>
                    </div>
                    <div className="col" id="card">
                        <i class="fas fa-video"></i>
                        <p className="fw-bolder"> Bonus Tour for one day from our hotel </p>
                    </div>
                    <div className="col" id="card">
                        <i class="fas fa-wifi"></i>
                        <p className="fw-bolder">24/7 Wifi Access</p>
                    </div>
                    <div className="col" id="card">
                        <i class="fas fa-pray"></i>
                        <p className="fw-bolder">Prayer Rooms</p>
                    </div>
                    <div className="col" id="card">
                        <i class="fas fa-chair"></i>
                        <p className="fw-bolder">Waiting Rooms</p>
                    </div>
                    <div className="col" id="card">
                        <i class="fas fa-money-check-alt"></i>
                        <p className="fw-bolder"> ATM Booth Access in hotel ground floor</p>
                    </div>
                    <div className="col" id="card">
                        <i class="fas fa-gamepad"></i>
                        <p className="fw-bolder">Indoor Playground</p>
                    </div>
                    <div className="col" id="card">
                        <i class="fas fa-leaf"></i>
                        <p className="fw-bolder">Roof-top garden</p>
                    </div>
                    <div className="col" id="card">
                        <i class="fas fa-wind"></i>
                        <p className="fw-bolder">Full Temperature controlled</p>
                    </div>
                    <div className="col" id="card">
                        <i class="fas fa-gamepad"></i>
                        <p className="fw-bolder">Indoor Playground</p>
                    </div>
                    <div className="col" id="card">
                        <i class="fas fa-leaf"></i>
                        <p className="fw-bolder">Roof-top garden</p>
                    </div>
                    <div className="col" id="card">
                        <i class="fas fa-wind"></i>
                        <p className="fw-bolder">Full Temperature controlled</p>
                    </div>
                    <div className="col" id="card">
                        <i class="fas fa-wind"></i>
                        <p className="fw-bolder">Full Temperature controlled</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Special;