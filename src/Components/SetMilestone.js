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
        try {
            const res = await fetch('http://localhost:5000/projects/5f86012389b2c90ed4823260');
            const data = await res.json();
            console.log(data.length);
            for (var i = 0; i < data.length; i++) {
                if (data[i]._id === Cookies.get('projectid')) {
                    for (var j = 0; j < data[i].milestones.length; j++) {
                        if (data[i].milestones[j].title === Cookies.get('completedMilestone')) {
                            const updatedata = {
                                "projects": [{
                                    "milestones": [
                                        {
                                            "title": Cookies.get('completedMilestone'),
                                            "status": "true",
                                            "_id": data[i].milestones[j]._id,
                                        }
                                    ]
                                }]
                            };
                            axios.post(`http://localhost:5000/addProject/5f82c21d03d9de36665a08ec`,updatedata )
                            .then (res=>{
                                console.log(res.data)
                            });
                            return;
                        }
                    }
                }
            }
            

        } catch (err) {
            console.error(err);
        }
    }

    function addsession() {
        const projectId = Cookies.get('projectid');
        const duration = ((Cookies.get('endmin') - Cookies.get('startmin'))*60 +  Cookies.get('endsec') - Cookies.get('startsec'));
        const doneMilestone = Cookies.get('completedMilestone');

        // const data = {
        //     "projects": [{
        //         "session": [
        //             {
        //                 "start_time":"",
        //                 "stop_time":"",
        //                 "duration": duration,
        //                 "milestones_covered": [
        //                     doneMilestone
        //                 ]
        //             }
        //         ]
        //     }]
        // };
        // axios.post(`http://localhost:5000/addSession/5f86012389b2c90ed4823260/${projectId}`,data )
        // .then (res=>{
        //     console.log(res.data)
        // })

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