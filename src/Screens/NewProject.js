import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './NewProject.css';
import axios from 'axios'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { NavigationBar } from '../Components/Navbar/NavigationBar';
import Sidebar from '../Components/Navbar/Sidebar';


const TitleWrapper = styled.section`
  position: absolute;
    width: 763px;
    height: 86px;
    left: 435px;
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
    left: 436px;
    top: 210px;
    background: #FFFFFF;
    box-shadow: 0px 7px 14px rgba(0, 0, 0, 0.25);
    padding: 4em;
    
`;

function NewProject() {

    const [inputFields, setInputFields] = useState([
        {title:'','status':'false'}

    ]);
    const [projectName, setProjectName] = useState('')
    const [projectDesc, setDesc] = useState('')

    
    const handleAddFields = () => {
        setInputFields([...inputFields, {title:'','status':'false' }])
    }

    const handleRemoveFields = (index) => {
        const values  = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
      }
    const handleSubmit=(event)=>{
        const data = {
            "projects":[{
                "project_name":projectName,
                "description":projectDesc,
                "milestones":inputFields  
            }]
            
        }
        console.log(data)

    //Add variable UserID from login component
    axios.post(`https://acadivity.herokuapp.com/addProject/5f82c21d03d9de36665a08ec`,data )
        .then (res=>{
            console.log(res.data)
        })


        event.preventDefault();
        
      }
      
    const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
    }

    return (<>
    <NavigationBar />
        <Sidebar />
        <div className='newProject'> 
            {/* <Navbar/> */}
            <TitleWrapper>
                <Title style={{fontSize:"28px"}}>
                Add a project 📝
                </Title>
            </TitleWrapper>
            <BodyWrapper>
                        {/* <Card> */}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="projectNamee">
                                    <Form.Label>Project Name ✏️</Form.Label>
                                    <Form.Control type="text" onChange={event => {setProjectName(event.target.value)}}/>
                                </Form.Group>
                                <Form.Group controlId="projectDes.ControlTextarea1">
                                <Form.Label>Project Description 🗒️</Form.Label>
                                <Form.Control as="textarea" rows={3} onChange={event => setDesc(event.target.value)}/>
                                </Form.Group>
                                <Form.Label>Enter Milestones 🎯</Form.Label>
                                {inputFields.map((inputFields,index) =>
                                (
                                    <div key={index}>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="Milestone{index}">
                                            <Form.Control name="title" onChange={event => handleChangeInput(index,event)}/>
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="Milestone{index}">
                                            <Button variant="info"  onClick={() => handleAddFields()} >+</Button>{'   '}
                                            <Button variant="danger" onClick={() => handleRemoveFields(index)}>-</Button>
                                        </Form.Group>
                                    </Form.Row>
                                    </div>
                                ))}
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button> 
                                <Link to='/ViewProjects'><Button variant="primary">
                                    View Projects
                                </Button></Link>

                            </Form>
                        {/* </Card> */}

            </BodyWrapper>
        </div>
        </>
    )
}

export default NewProject

