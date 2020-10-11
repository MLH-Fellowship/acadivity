import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './NewProject.css';
import Navbar from '../Components/Navbar/Navbar';



function NewProject() {

    const [inputFields, setInputFields] = useState([
        {milestonName:''}

    ]);
    
    const handleAddFields = () => {
        setInputFields([...inputFields, {milestonName:'' }])
    }

    const handleRemoveFields = (index) => {
        const values  = [...inputFields];
        values.splice(index, 1);
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
                            <Form>
                                <Form.Group controlId="projectNamee">
                                    <Form.Label>Project Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group controlId="projectDes.ControlTextarea1">
                                <Form.Label>Project Description</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <Form.Label>Enter Milestones</Form.Label>
                                {inputFields.map((inputFields,index) =>
                                (
                                    <div key={index}>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="Milestone{index}">
                                            <Form.Control />
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

                            </Form>
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}

export default NewProject

