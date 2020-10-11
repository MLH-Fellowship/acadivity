import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
//import './ViewProject.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
import Navbar from '../Components/Navbar/Navbar';


function ViewProject() {

    const ProjectDetails = [
        {
            project_name:"Project 1",
            description: "something here",
            milestone: [
                {
                    title: "task 1"
                },
                {
                    title: "task 2"
                },
                {
                    title: "task 3"
                }
            ]
        },
        {
            project_name:"Project 2",
            description: "something here",
            milestone: [
                {
                    title: "task 1"
                },
                {
                    title: "task 2"
                },
                {
                    title: "task 3"
                }
            ]
        },
        {
            project_name:"Project 3",
            description: "something here",
            milestone: [
                {
                    title: "task 1"
                },
                {
                    title: "task 2"
                },
                {
                    title: "task 3"
                }
            ]
        }

    ]


    const renderCard = (card,index) => {
        return(
            <Card style={{ width: '18rem' }} key={index}>
            <Card.Body>
                <Card.Header>{card.project_name}</Card.Header>
                <Card.Text>
                {card.description}
                </Card.Text>
                <Card.Subtitle>
                    Milestones
                </Card.Subtitle>
                <Button variant="primary">Start a session</Button>
            </Card.Body>
            </Card>
        )
    }

    

    return (
        <div className='viewProjects'> 
            <Navbar/>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <div className='page_heading'>
                            <Card body>
                                Projects
                            </Card>
                        </div>
                    </Col>
                    <Col md={{ span: 6, offset: 3 }}>
                    <CardDeck>
                        {
                            ProjectDetails.map(renderCard)
                        }
                    </CardDeck>
                    </Col>
                </Row>
  
            </Container>
        </div>
    )
}

export default ViewProject
