import React from 'react';
import './SetMilestone.css';
import { Dropdown, Button } from 'react-bootstrap';
import Cookies from 'js-cookie';
import axios from 'axios';

const setmilestones = () => {
    console.log(Cookies.get('projectname'));
    console.log(Cookies.get('nomilestonear'));
    const temp = Cookies.get('nomilestonear');
    const milestonelist = JSON.parse(temp);
    const projectname = "Select Project";

    const updateprojectstatus = async () => {
        // code to update status should be added here
    }

    function addsession() {
        const projectId = Cookies.get('projectid');
        const duration = ((Cookies.get('endmin') - Cookies.get('startmin'))*60 +  Cookies.get('endsec') - Cookies.get('startsec'));
        const doneMilestone = Cookies.get('completedMilestone');

        const data = {
            "projects": [{
                "session": [
                    {
                        "start_time":"",
                        "stop_time":"",
                        "duration": duration,
                        "milestones_covered": [
                            doneMilestone
                        ]
                    }
                ]
            }]
        };
        axios.post(`http://localhost:5000/addSession/5f86012389b2c90ed4823260/${projectId}`,data )
        .then (res=>{
            console.log(res.data)
        })

        updateprojectstatus();
    }
    return(
        <div className="main-content-setmilestone">
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {projectname}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {
                            milestonelist.map((item, index) => {
                                return <Dropdown.Item key={index} onClick={() => {Cookies.set('completedMilestone', item)}}>{item}</Dropdown.Item>;
                            })
                        }
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            &nbsp;
            <br/>
            <div>
                <Button variant="outline-primary" onClick={() => {addsession()}}>Submit Time!</Button>{' '}
            </div>
        </div>
    );
};

export default setmilestones;