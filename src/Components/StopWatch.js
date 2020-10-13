import React, {useState} from 'react';
import DisplayComponent from '../Components/StopWatch Component/DisplayComponent';
import BtnComponent from '../Components/StopWatch Component/BtnComponent';
import Cookies from 'js-cookie';


function StopWatch() {
    const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);
    const start = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 10));
        const now = new Date();
        const shour = now.getHours();
        const smin = now.getMinutes();
        const ssec = now.getSeconds();
        Cookies.set('starthr', shour);
        Cookies.set('startmin', smin);
        Cookies.set('startsec', ssec);
    };

    var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

    const run = () => {
    if(updatedM === 60){
        updatedH++;
        updatedM = 0;
    }
    if(updatedS === 60){
        updatedM++;
        updatedS = 0;
    }
    if(updatedMs === 100){
        updatedS++;
        updatedMs = 0;
    }
        updatedMs++;
        return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
    };

    const stop = () => {
        clearInterval(interv);
        setStatus(2);
        const now = new Date();
        const ehour = now.getHours();
        const emin = now.getMinutes();
        const esec = now.getSeconds();
        Cookies.set('endhr', ehour);
        Cookies.set('endmin', emin);
        Cookies.set('endsec', esec);
        console.log((Cookies.get('endhr') - Cookies.get('starthr'))*3600 + 
                    (Cookies.get('endmin') - Cookies.get('startmin'))*60 +  
                     Cookies.get('endsec') - Cookies.get('startsec'));
    };

    const reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({ms:0, s:0, m:0, h:0})
    };
    
      const resume = () => start();
    
    
      return (
        <div className="main-section">
         <div className="clock-holder">
              <div className="stopwatch">
                  
                   <DisplayComponent time={time}/>
                   <BtnComponent status={status} resume={resume} reset={reset} stop={stop} start={start}/>
              </div>
            
            </div>
        </div>
      );
}


export default StopWatch;
