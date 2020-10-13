import React from 'react';
import {PieChart} from 'react-minimal-pie-chart';
import '../Styles/PieChart.css';

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

const PieChartComp = () => {
    return (
        <div className="total-component">
            <PieChart 
                data={sample} 
                lineWidth={15} rounded 
                label={({ dataEntry }) => dataEntry.value}
                labelStyle={{
                  ...defaultLabelStyle,
                }}
            />
        </div>
        
    );
};

export default PieChartComp;