import React, { useEffect } from 'react';
import {PieChart} from 'react-minimal-pie-chart';
import '../Styles/PieChart.css';
import Cookies from 'js-cookie';

const defaultLabelStyle = {
    fontSize: '5px',
    fontFamily: 'sans-serif',
};

const sample = [
    { title: 'One', value: 20, color: 'red' },
    { title: 'Two', value: 66, color: 'green' },
    { title: 'Three', value: 5, color: 'yellow' },
    { title: 'Three', value: 25, color: 'blue' },
];

// find the sum of all session duration for all the project and use that data to build a pie chart



const PieChartComp = () => {
    const [piechartobj, setPiechartobj] = React.useState('');

    function formProjectSessionMap(data) {
        console.log(data);
        var projsess = new Array();
        var color = ["blue", "red", "green", "yellow", "purple", "violet"];
        // console.log(data.length);
        for (var i = 0; i<data.length; i++) {
            console.log(data[i].session);
            var sum_session = 0;
            for (var j = 0; j<data[i].session.length; j++) {
                sum_session = parseInt(data[i].session[j].duration) + parseInt(sum_session);
            }
            var obj = {}
            // obj[data[i].project_name] = sum_session;
            obj["title"] = data[i].project_name;
            obj["value"] = sum_session;
            obj["color"] = color[i];
            projsess.push(obj);
        }
        console.log(projsess);
        setPiechartobj(projsess);

    }
    

    const loadProducts = async () => {
        try {
            const res = await fetch('http://localhost:5000/projects/5f86012389b2c90ed4823260');
            const data = await res.json();
            formProjectSessionMap(data);
            Cookies.set('projectarray', data);

        } catch (err) {
            console.error(err);
        }
    };

    
    console.log(piechartobj);

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <div className="total-component">
            <PieChart
                data={piechartobj}
                animate={true}
                animationDuration={1500}
                label={({ dataEntry }) => dataEntry.value}
                labelStyle={{
                    ...defaultLabelStyle,
                }}
            />;
        </div>
        
    );
};

export default PieChartComp;