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
import { NavigationBar } from '../Components/Navbar/NavigationBar';
import Sidebar from '../Components/Navbar/Sidebar';

const TitleWrapper = styled.section`
  position: absolute;
    width: 1100px;
    height: 86px;
    left: 140px;
    top: 99px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Title = styled.h1`
    position: absolute;
    width: 400px;
    height: 42px;
    left: 370px;
    top: 121px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 42px;
    text-align: center;
    color: #9D9FA9;
    background: #FFFFFF;
`;

const BodyWrapper = styled.section`
    position: absolute;
    width: 1100px;
    height: 1140px;
    left: 100px;
    top: 217px;
    background: #FFFFFF;
    box-shadow: 0px 7px 14px rgba(0, 0, 0, 0.25);
    padding: 2em;
    margin-left: 43px;
    
`;

const ImgWrapper = styled.section`
    background: #FFFFFF;
    box-shadow: 0px 7px 14px rgba(0, 0, 0, 0.25);
    padding: 4em;
    position: absolute;
    width: 270px;
    height: 650px;
    left: 1300px;
    top: 99px;
    background-image: url("images/view-proj.jpg");
    background: ##FFFFFF;
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    /*background-size: cover;  Resize the background image to cover the entire container */
    padding: 10px;
    
`;

function ViewProject() {

    const ProjectDetails = [
        {
            project_name:"Acadivity",
            description: "A special MERN App!",
            milestone: ["Complete the Frontend", "Complete the Backend","Complete the DevOps","",""]
        },
        {
            project_name:"Practice DSA",
            description: "Just a Hobby!",
            milestone: ["HashMap", "Dynamic Programming","Graphs","",""]
        },
        {
            project_name:"JAVA Assignment",
            description: "Course Work",
            milestone: ["Complete Ex-1", "Complete Ex-1","Complete Ex-2","Complete Ex-3"]
        },
        {
            project_name:"JAVA Assignment",
            description: "Course Work",
            milestone: ["Complete Ex-1", "Complete Ex-1","Complete Ex-2","Complete Ex-3"]
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
                <Card  key={index} style={{width:"470px", height:"500px"}}>
                    <Card.Body >
                        <Card.Header><h3>{card.project_name}</h3></Card.Header>
                        <Card.Text style={{margin:"20px"}}>
                        <h5>Description: {card.description} 🗒️</h5>
                        </Card.Text>
                        <Card.Subtitle style={{margin:"20px"}}>
                            <h4>Milestones 🎯</h4>
                        </Card.Subtitle>
                        <ListGroup variant="flush" style={{margin:"20px"}}>
                        {milestone_array.map(listitem => (
                            <ListGroup.Item>{listitem}</ListGroup.Item>))
                        }
                        </ListGroup>
                        <Link to='/timer'><Button variant="primary" style={{marginLeft:"20px"}}>Start a session</Button></Link>
                    </Card.Body>
                </Card>
            </div>
        )
    }

    

    return (<>
        <NavigationBar />
        <Sidebar />
        <div className='viewProjects' > 
            <TitleWrapper >
                <Title >
                    My projects 💻
                </Title>
            </TitleWrapper>
            <BodyWrapper >

                        <CardGroup >
                            {
                                ProjectDetails.map(renderCard)
                            }
                            
                            </CardGroup>

            </BodyWrapper>
            <ImgWrapper></ImgWrapper>
        </div>
        </>
    )
}

export default ViewProject