import React from 'react';
import './Statistics.css'
import Piechart from '../Components/PieChart';
import Progessbar from '../Components/ProgressBar';
import styled from 'styled-components';
import { NavigationBar } from '../Components/Navbar/NavigationBar';
import Sidebar from '../Components/Navbar/Sidebar';


const TitleWrapper = styled.section`
  position: absolute;
    width: 965px;
    height: 86px;
    left: 435px;
    top: 99px;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Title = styled.h1`
    position: absolute;
    width: 400px;
    height: 42px;
    left: 241px;
    top: 121px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    color: #9D9FA9;
    background: #FFFFFF;
`;

const BodyWrapper = styled.section`
    position: absolute;
    width: 965px;
    height: 480px;
    left: 400px;
    top: 217px;
    background: #FFFFFF;
    box-shadow: 0px 7px 14px rgba(0, 0, 0, 0.25);
    padding-left: -5rem;
    margin-left: 35px;
    
`;
const Des = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 42px;
    text-align: left;
    color: #9D9FA9;
    position: absolute;
    width: 965px;
    height: 480px;
    left: 150px;
    top: 267px;
    
`;

function Statistics() {
    return (<>
    <NavigationBar />
        <Sidebar />
        <div className='statistics'> 
            {/* <h1 className="statics-head">So, What's the Stat ?</h1> */}
            {/* <Piechart />
            <Progessbar /> */}
            <TitleWrapper>
                <Title>
                    Statistics📅
                </Title>
            </TitleWrapper>
            <BodyWrapper>
            <Des>
            The following piechart shows <br/>amount of time spent on each <br/>project(seconds). 
            </Des>
            <Piechart />
            {/* <Progessbar /> */}
            </BodyWrapper>
        </div>
        </>
    )
}

export default Statistics
