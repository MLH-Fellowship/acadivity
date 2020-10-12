import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../Styles/ProgressBar.css';


const percentage = 66;

const ProgressBar = () => {
    return (
        <div className="main-content">
            <CircularProgressbarWithChildren value={20}>
                <div style={{ fontSize: 30, marginTop: -5 }}>
                    <strong> 1. Acadivity </strong>
                </div>
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                <img style={{ width: 200, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
                <div style={{ fontSize: 30, marginTop: -5 }}>
                    <strong> 20% </strong>Be fast yr! 
                </div>
            </CircularProgressbarWithChildren>
            <br/>
            <CircularProgressbarWithChildren value={66}>
                <div style={{ fontSize: 30, marginTop: -5 }}>
                    <strong> 2. Practice DSA </strong>
                </div>
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                <img style={{ width: 200, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
                <div style={{ fontSize: 30, marginTop: -5 }}>
                 <strong>66%</strong> Seriously! Only This much yet?
                </div>
            </CircularProgressbarWithChildren>
            <br/>
            <CircularProgressbarWithChildren value={5}>
                <div style={{ fontSize: 30, marginTop: -5 }}>
                    <strong> 3. JAVA Assignment </strong>
                </div>
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                <img style={{ width: 200, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
                <div style={{ fontSize: 30, marginTop: -5 }}>
                    <strong>5%</strong> WTF! Barely started? 
                </div>
            </CircularProgressbarWithChildren>
            <br/>
            <CircularProgressbarWithChildren value={25}>
                <div style={{ fontSize: 30, marginTop: -5 }}>
                    <strong> 4. Guitar Practice </strong>
                </div>
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                <img style={{ width: 200, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
                <div style={{ fontSize: 30, marginTop: -5 }}>
                    <strong>25%</strong> Tumse na hoga ?
                </div>
            </CircularProgressbarWithChildren>
        </div>
    );
};

export default ProgressBar;