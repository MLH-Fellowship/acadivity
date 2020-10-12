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
            project_name:"Project title 1",
            description: "something here",
            milestone: ["task 1", "task 2","task 3"]
        },
        {
            project_name:"Project title 2",
            description: "something here",
            milestone: ["task 1", "task 2","task 3"]
        },
        {
            project_name:"Project title 3",
            description: "something here",
            milestone: ["task 1", "task 2","task 3","task 4", "task 5","task 6"]
        }

    ]


    const renderCard = (card,index) => {

        const milestone_array = [...card.milestone]

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
                <ListGroup variant="flush">
                {milestone_array.map(listitem => (
                    <ListGroup.Item>{listitem}</ListGroup.Item>))
                }
                </ListGroup>
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
