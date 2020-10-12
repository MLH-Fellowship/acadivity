import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './NewProject.css';
import Navbar from '../Components/Navbar/Navbar';
import axios from 'axios'
import {Link} from 'react-router-dom'

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

    return (
        <div className='newProject'> 
            <Navbar/>
                <Container>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <div className='page_heading'>
                                <Card body>
                                    Add a new Project
                                </Card>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="projectNamee">
                                    <Form.Label>Project Name</Form.Label>
                                    <Form.Control type="text" onChange={event => {setProjectName(event.target.value)}}/>
                                </Form.Group>
                                <Form.Group controlId="projectDes.ControlTextarea1">
                                <Form.Label>Project Description</Form.Label>
                                <Form.Control as="textarea" rows={3} onChange={event => setDesc(event.target.value)}/>
                                </Form.Group>
                                <Form.Label>Enter Milestones</Form.Label>
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
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}

export default NewProject

