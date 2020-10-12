import React from 'react';
import StopWatch from '../Components/StopWatch';
import '../Styles/StopWatch.css';
import SetMilestone from '../Components/SetMilestone';

export default function Timer() {
    return(
        <div>
            <StopWatch />
            <SetMilestone />
        </div>
    );
};

