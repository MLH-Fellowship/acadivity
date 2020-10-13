import React from 'react';
import styled from 'styled-components';



const TitleWrapper = styled.section`
  position: absolute;
    width:760px;
    height: 86px;
    left: 435px;
    top: 99px;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Title = styled.h1`
    position: absolute;
    width: 500px;
    height: 42px;
    left: 110px;
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
    left: 436px;
    top: 210px;
    background: #FFFFFF;
    box-shadow: 0px 7px 14px rgba(0, 0, 0, 0.25);
    padding: 4em;
    
`;

function attendance() {
    return (
        <div>
            <TitleWrapper>
                <Title style={{fontSize:"28px"}}>
                    Attendance Manager 
                </Title>
            </TitleWrapper>
            <BodyWrapper>

            </BodyWrapper>
            
        </div>
    )
}

export default attendance


