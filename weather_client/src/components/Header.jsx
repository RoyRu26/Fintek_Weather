import React from 'react';
import './header.css'

function Header(props) {
    return (
        <div className='header-box'>
            <h1>WeatherWise - your personal weather companion</h1>
            <h2>Get instant access to weather forecasts, so you're always one step ahead of changing conditions.</h2>
        </div>
    );
}

export default Header;