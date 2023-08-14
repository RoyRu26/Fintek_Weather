import React, { useState } from 'react';
import axios from 'axios';
import './homepage.css'
import Result from '../components/Result';
import Input from '../components/Input';
import Header from '../components/Header';

function HomePage(props) {
    const [weatherData, setWeatherData] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const handleFetchData = async (city) => {
        setErrorMessage('')
        try {
            const response = await axios.post('http://localhost:8000/api/weather', { city: city })
            setWeatherData(response.data)

        } catch (error) {
            setErrorMessage(error.response.data.message)
            setWeatherData('')
        }
    }
    return (
        <div className='wrapper'>
            <div className='container'>
                <div className='text-input-container'>
                    <Header/>
                    <Input onSubmit = {handleFetchData}/>
                </div>
                <Result weather = {weatherData} error = {errorMessage}/>
            </div>
        </div>
    );
}

export default HomePage;