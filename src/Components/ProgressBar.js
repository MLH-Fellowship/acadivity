import React, { useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../Styles/ProgressBar.css';
import img from './progressimg.jpg';
import Cookies from 'js-cookie';


const percentage = 66;

const progresslist = [
    {"project_title": "Acadivity", "percentage_done": "20%"},
    {"project_title": "Practice DSA", "percentage_done": "66%"},
    {"project_title": "JAVA Assigment", "percentage_done": "5%"},
    {"project_title": "Guitar Practice", "percentage_done": "26%"}
]

const ProgressBar = () => {
    const [progressbarobj, setProgressbarobj] = React.useState('');
    
    var progress = [];
    function formmilestonedata(data) {
        // console.log(data);
        var milestonegraph = new Array();
        for (var i = 0; i < data.length; i++) {
            var total_milestones = data[i].milestones.length;
            var sum_completed_milestones = 0;
            for (var j = 0; j<data[i].milestones.length; j++) {
                // console.log(data[i].milestones[j].status);
                if (data[i].milestones[j].status === "true") {
                    sum_completed_milestones += parseInt(1);
                }
            }
            // console.log(sum_completed_milestones);
            var obj = {};
            obj["project_title"] = data[i].project_name;
            var val = (sum_completed_milestones/total_milestones)*100;
            var truncated = Math.floor(val * 10) / 10;
            obj["percentage_done"] = truncated;
            milestonegraph.push(obj);
        }
        setProgressbarobj([...milestonegraph]);
        console.log(progressbarobj);
    }

    const loadProducts = async () => {
        try {
            const res = await fetch('http://localhost:5000/projects/5f86012389b2c90ed4823260');
            const data = await res.json();
            formmilestonedata(data);
            Cookies.set('projectarray', data);

        } catch (err) {
            console.error(err);
        }
    };

    
    
    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <div className="main-content">
            {
                progress.map(value => (
                    <CircularProgressbarWithChildren value={20}>
                        <div style={{ fontSize: 30, marginTop: -5 }}>
                            <strong> {value.project_title} </strong>
                        </div>
                        <img style={{ width: 200, marginTop: -5 }} src={img} />
                        <div style={{ fontSize: 30, marginTop: -5 }}>
                            <strong> {value.percentage_done} </strong>
                        </div>
                    </CircularProgressbarWithChildren>
                ))   
            }
            
            <br/>
        </div>
    );
};

export default ProgressBar;