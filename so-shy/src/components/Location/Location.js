import React from 'react'
import useGeolocation from 'react-hook-geolocation'
import Bubbles from "../Dashboard/Bubbles/Bubbles";
import Navigation from "../Dashboard/Navigation/Navigation";
import Main from "../Dashboard/Media/Main";
import Reviews from "../Dashboard/Reviews/Reviews";
import Footer from "../Dashboard/Footer/Footer";

const Location = () => {
    const geolocation = useGeolocation()

    return !geolocation.error
        ? (
            <div className='container_dashboard'>
                <Bubbles/>
                <Navigation/>
                <div className="location_container">
                    <div className="location">
                        <p>Latitude:          {geolocation.latitude}</p>
                        <p>Longitude:         {geolocation.longitude}</p>
                        <p>Heading:           Social Media</p>
                        <p>Speed:             High speed!</p>
                        <h1 className="geolocation_heading"> Now You know where you are!</h1>
                    </div>
                </div>
                <Footer/>
            </div>
        )
        : (
            <p>No geolocation, sorry.</p>
        )
}

export default Location;
