import React from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import {useState} from 'react'
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
    height: 480px;
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
    height: 590px;
    left: 1010px;
    top: 99px;
    background-image: url("images/grade-m.jpg");
    background: ##FFFFFF;
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    /*background-size: cover;  Resize the background image to cover the entire container */
    padding: 10px;
    
`;

function Grade() {

    const [targetGpa, setTarget] = React.useState(0)
    const [currentGpa, setCurrent] = React.useState(0)
    const [semLeft, setSem] = React.useState(0)
    const [finalAns,setFinal] = React.useState(0)
    // const [totalCredit, setTotalCredit] = React.useState('')
    
    const handleSubmit = (event) =>{
        console.log("Target : "+targetGpa+" Current : "+currentGpa+" Sem : "+semLeft)
        setFinal(((Number(targetGpa)*(Number(semLeft)+1))-(Number(currentGpa)))/(Number(semLeft)))
        
        handleShow()
        event.preventDefault();
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <div>
        <NavigationBar />
        <Sidebar />
            <TitleWrapper>
                <Title style={{fontSize:"28px"}}>
                    Grade Manager 💯
                </Title>
            </TitleWrapper>
            <BodyWrapper>
            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="targetGPA">
                                    <Form.Label>Target GPA 🎯</Form.Label>
                                    <Form.Control type="text" onChange={event=>{setTarget(event.target.value)}}/>
                                </Form.Group>
                                <Form.Group controlId="currentGPA">
                                    <Form.Label>Current GPA 📌</Form.Label>
                                    <Form.Control type="text" onChange={event=>{setCurrent(event.target.value)}} />
                                </Form.Group>
                                <Form.Group controlId="graduatedCredit">
                                    <Form.Label>Semesters left 🎖</Form.Label>
                                    <Form.Control type="text" onChange={event=>{setSem(event.target.value)}}/>
                                </Form.Group>
                                {/* <Form.Group controlId="totalCredit">
                                    <Form.Label>Total Credit 🎓</Form.Label>
                                    <Form.Control type="text" onChange={event=>{setTotalCredit(event.target.value)}}/>
                                </Form.Group> */}
                               
                                <Button variant="primary" type="submit" onclick={handleShow}>
                                    Calculate
                                </Button> 
                            </Form>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>Results 📍</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>{finalAns>=10?"Sorry, please try again with a lower target GPA (Remember that GPA is just a number)":`The minimum required GPA for next ${semLeft} semesters is ${finalAns}`}</Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                {/* <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button> */}
                                </Modal.Footer>
                            </Modal>
                            
            </BodyWrapper>
            <ImgWrapper></ImgWrapper>
        </div>
    )
}

export default Grade
