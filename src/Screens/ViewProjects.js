import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import './ViewProject.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
import Navbar from '../Components/Navbar/Navbar';
import {Link} from 'react-router-dom'

function ViewProject() {

    const ProjectDetails = [
        {
            project_name:"Acadivity",
            description: "A MERN App with something special!",
            milestone: ["Complete the Frontend", "Complete the Backend","Complete the DevOps"]
        },
        {
            project_name:"Practice DSA",
            description: "Just a Hobby!",
            milestone: ["HashMap", "Dynamic Programming","Graphs"]
        },
        {
            project_name:"JAVA Assignment",
            description: "Course Work",
            milestone: ["Complete Ex-1", "Complete Ex-1","Complete Ex-2","Complete Ex-3", "Complete Ex-4","Complete Ex-5"]
        },
        {
            project_name:"Guitar Practice",
            description: "Wild Hobby!",
            milestone: ["Complete 5 min form video 1", "Complete 5 min form video 2","Complete 5 min form video 3","Complete final Ex"]
        }

    ]


    const renderCard = (card,index) => {

        const milestone_array = [...card.milestone]

        return(
            <div className="main-content-viewproject">
                <Card style={{ width: '30rem' }} key={index}>
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
                        <Link to='/timer'><Button variant="primary">Start a session</Button></Link>
                    </Card.Body>
                </Card>
            </div>
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
                    <Col md={{ span: 30, offset: 1 }}>
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