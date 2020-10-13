import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import './ViewProject.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import CardGroup from 'react-bootstrap/CardGroup'

const TitleWrapper = styled.section`
  position: absolute;
    width: 965px;
    height: 86px;
    left: 435px;
    top: 99px;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Title = styled.h1`
    position: absolute;
    width: 400px;
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
    width: 1500px;
    height: 580px;
    left: 100px;
    top: 217px;
    background: #FFFFFF;
    box-shadow: 0px 7px 14px rgba(0, 0, 0, 0.25);
    padding: 4em;
    margin-left: 43px;
    
`;

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
        // {
        //     project_name:"Guitar Practice",
        //     description: "Wild Hobby!",
        //     milestone: ["Complete 5 min form video 1", "Complete 5 min form video 2","Complete 5 min form video 3","Complete final Ex"]
        // }

    ]


    const renderCard = (card,index) => {

        const milestone_array = [...card.milestone]

        return(
            <div className="main-content-viewproject">
                <Card  key={index}>
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
            <TitleWrapper>
                <Title>
                    View projects
                </Title>
            </TitleWrapper>
            <BodyWrapper>

                        <CardGroup>
                            {
                                ProjectDetails.map(renderCard)
                            }
                            </CardGroup>

            </BodyWrapper>
        </div>
    )
}

export default ViewProject