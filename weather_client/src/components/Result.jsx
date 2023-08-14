import React from 'react';
import './result.css'
import cloud from "../assets/cloud.png";

function Result({ weather , error }) {
    return (
        <div className='weather-box'>
            {(weather && !error) ? (
                <div className='result-wrapper'>
                    <div className='header'>
                        <h1>{weather.location.name}</h1>
                        <h2>{weather.location.country}</h2>
                    </div>
                    <div className='temp'>
                        <h1 className='temp-text'>{weather.current.feelslike_c}°</h1>
                    </div>
                    <div className='stats'>
                        <div>
                            <h3>Precipitation</h3>
                            <h4>{weather.current.precip_mm} mm</h4>
                        </div>
                        <div>
                            <h3>Humidity</h3>
                            <h4>{weather.current.humidity}%</h4>
                        </div>
                        <div>
                            <h3>Wind</h3>
                            <h4>{weather.current.gust_kph} km/h</h4>
                        </div>
                    </div>
                </div>
            ) : error ? (
                <div>
                    <p>{error}</p>
                </div>)
                : (
                    <img src={cloud} alt='cloud'/>
                )}
        </div>
    );
}

export default Result;