import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" className="home__image"/>
            
            <div className="home__row">
                <Product 
                    id="4903850"
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Business"
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                    rating={5}
                />
                <Product 
                    id="2018471"
                    title="Mkeke Compatible with iPhone XR Case,Clear Anti-Scratch Shock Absorption Cover Case for iPhone XR"
                    price={8.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/71j2Zqi6BGL._AC_SL1250_.jpg"
                    rating={5}
                /> 
            </div>
            <div className="home__row">
                <Product 
                    id="4254981"
                    title="Victrola Vintage 3-Speed Bluetooth Portable Suitcase Record Player with Built-in Speakers | Upgraded Turntable Audio Sound"
                    price={44.98}
                    image="https://images-na.ssl-images-amazon.com/images/I/716pgZxRYhL._AC_SL1395_.jpg"
                    rating={4}
                />
                <Product id="4143900"
                    title="RUNMUS Stereo Gaming Headset for PS4, Xbox One, Nintendo Switch, PC, PS3, Mac, Laptop, Over Ear Headphones PS4"
                    price={39.95}
                    image="https://images-na.ssl-images-amazon.com/images/I/81PtEw326aL._AC_SL1500_.jpg"
                    rating={5}
                />
                <Product

                  id="9008471"
                  title="Logitech G602 Lag-Free Wireless Gaming Mouse – 11 Programmable Buttons, Upto 2500 DPI"
                  price={89.96}
                  image="https://images-na.ssl-images-amazon.com/images/I/81ZQgWwuVzL._AC_SL1500_.jpg"
                  rating={4}  
                />
            </div>
            <div className="home__row">
            <Product
                    id="2018471"
                    title="OnePlus 8 Pro Ultramarine Blue, 5G Unlocked Android Smartphone U.S Version, 12GB RAM+256GB Storage, 120Hz Fluid Display,Quad Camera, Wireless Charge, with Alexa Built-in"
                    price={918.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/410mmBW-AYL._AC_.jpg"
                    rating={4}
                /> 
            </div>
        </div>
    </div>
    )
}

export default Home
