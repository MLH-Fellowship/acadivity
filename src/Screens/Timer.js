import React from 'react';
import StopWatch from '../Components/StopWatch';
import '../Styles/StopWatch.css';
import SetMilestone from '../Components/SetMilestone';
import Cookies from 'js-cookie';



export default function Timer() {
    console.log(Cookies.get('projectid'));
    return(
        <div>
        
            <StopWatch />
            <br/>
            <SetMilestone />
        </div>
        </>
    );
};

