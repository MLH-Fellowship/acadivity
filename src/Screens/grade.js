import React from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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

function grade() {



    return (
        <div>
            <TitleWrapper>
                <Title style={{fontSize:"28px"}}>
                    Grade Manager
                </Title>
            </TitleWrapper>
            <BodyWrapper>
            <Form >
                                <Form.Group controlId="targetGPA">
                                    <Form.Label>Target GPA</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group controlId="currentGPA">
                                    <Form.Label>Current GPA</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group controlId="graduatedCredit">
                                    <Form.Label>Graduated Credit</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group controlId="totalCredit">
                                    <Form.Label>Total Credit</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                               
                                <Button variant="primary" type="submit">
                                    Calculate
                                </Button> 
                            </Form>
            </BodyWrapper>
        </div>
    )
}

export default grade
