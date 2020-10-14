import React from 'react';
// import Navbar from '../Components/Navbar/Navbar';
import Timer from './Timer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import styled from 'styled-components';
import { NavigationBar } from '../Components/Navbar/NavigationBar';
import Sidebar from '../Components/Navbar/Sidebar';

const TitleWrapper = styled.section`
  position: absolute;
    width:760px;
    height: 86px;
    left: 159px;
    top: 99px;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Title = styled.h1`
    position: absolute;
    width: 213px;
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
    width: 760px;
    height: 580px;
    left: 159px;
    top: 210px;
    background: #FFFFFF;
    box-shadow: 0px 7px 14px rgba(0, 0, 0, 0.25);
    padding: 4em;
    
`;

const ImgWrapper = styled.section`
    background: #FFFFFF;
    box-shadow: 0px 7px 14px rgba(0, 0, 0, 0.25);
    padding: 4em;
    position: absolute;
    width: 560px;
    height: 690px;
    left: 1010px;
    top: 99px;
    background-image: url("images/timer.jpg");
    background: ##FFFFFF;
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    /*background-size: cover;  Resize the background image to cover the entire container */
    padding: 10px;
    
`;

function Timerpage() {
    return (<>
        <NavigationBar />
        <Sidebar />
        <div className='statistics'> 
            <TitleWrapper>
                <Title style={{fontSize:"28px"}}>
                    Timer ⏲️
                </Title>
            </TitleWrapper>
            <BodyWrapper>

                            <div className='page_heading'>
                            
                                <Card body>
                                     <Timer/>
                                </Card>
                            </div>
 
            </BodyWrapper>
            <ImgWrapper></ImgWrapper>
        </div>
        </>
    )
}

export default Timerpage
