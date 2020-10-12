import React from 'react';
import './Statistics.css'
import Navbar from '../Components/Navbar/Navbar';
import Piechart from '../Components/PieChart';
import Progessbar from '../Components/ProgressBar';

function Statistics() {
    return (
        <div className='statistics'> 
            <Navbar/>
            <h1 className="statics-head">So, What's the Stat ?</h1>
            <Piechart />
            <Progessbar />
        </div>
    )
}

export default Statistics
