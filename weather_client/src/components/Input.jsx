import React, { useState } from 'react';
import './input.css'

import searchIcon from '../assets/search.png'

function Input({ onSubmit }) {
    const [cityName, setCityName] = useState('');

    const handleSubmit = (e) => {        
        e.preventDefault()
        onSubmit(cityName)
    }
    return (
        <div className='input-box'>
            <form onSubmit={handleSubmit} className='city-form'>
                <input type='text' placeholder='City Name' onChange={(e) => setCityName(e.target.value)} />
                <button type='submit'>
                    <img className='search-icon' src={searchIcon} alt='search' />
                </button>
            </form>
        </div>
    );
}

export default Input;