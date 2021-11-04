import React from 'react';
import { Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import caro1 from '../images/caro1.jpg'
import caro2 from '../images/caro2.jpg'
import caro3 from '../images/caro3.jpg'
import caro4 from '../images/caro4.jpg'
import caro5 from '../images/caro5.jpg'
import caro6 from '../images/caro6.jpg'
import caro7 from '../images/caro7.jpg'
import './Carousels.css'
import Special from '../Special/Special';
import Home from '../Base/Home/Home';
import MyOffering from '../Base/MyOffering/MyOffering';
import Products from '../Products/Products';
import Counter from '../Counter/Counter';
// import Home from '../Base/Home';

const Carousels = () => {
    return (
        <div id="carouselExampleCaptions " className="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>

            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={caro7} alt="" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Shitakundu in sylhet</h5>
                        <p>Most attractive tourist place in bangladesh</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={caro1} alt="" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Himchori Pahar in chitagong</h5>
                        <p>Most attractive tourist place in bangladesh</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={caro5} alt="" />
                    {/* <img src="..." class="d-block w-100" alt="..."> */}
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Bay Of Bangle</h5>
                        <p>Most attractive tourist place in bangladesh</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={caro6} alt="" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Bay or bangle sunset</h5>
                        <p>Most attractive tourist place in bangladesh</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={caro4} alt="" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Mountain</h5>
                        <p>Most attractive tourist place in bangladesh</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={caro3} alt="" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Star fish</h5>
                        <p>Most attractive tourist place in bangladesh</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={caro2} alt="" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Sea</h5>
                        <p>Most attractive tourist place in bangladesh</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            {/* <MyOffering></MyOffering> */}
            <div className="service-container">
                <Products></Products>
            </div>            <Counter></Counter>
            <Special></Special>
            <Home></Home>
        </div>

    );
};

export default Carousels;