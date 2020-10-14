import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import './ViewProject.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import CardDeck from 'react-bootstrap/CardDeck';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import CardGroup from 'react-bootstrap/CardGroup'
import { NavigationBar } from '../Components/Navbar/NavigationBar';
import Sidebar from '../Components/Navbar/Sidebar';
import axios from 'axios';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

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

    const [projectlist, setProjectlist] = React.useState('');

    const loadProducts = async () => {
        try {
            const res = await fetch('http://localhost:5000/projects/5f86012389b2c90ed4823260');
            const data = await res.json();
            setProjectlist(data);

        } catch (err) {
            console.error(err);
        }
    };
    console.log(projectlist);

    useEffect(() => {
        loadProducts();
    }, []);


    const renderCard = (card, index) => {

        const milestone_array = card.milestones;
        var no_milestone_array = [];
        
        milestone_array.map(function(listitem, index){
            if (listitem.status === "false") {
                no_milestone_array.push(listitem.title);
            }
        })

        return (
            <div className="main-content-viewproject">
                <Card key={index} style={{ width: "470px", height: "500px" }}>
                    <Card.Body >
                        <Card.Header><h3>{card.project_name}</h3></Card.Header>
                        <Card.Text style={{ margin: "20px" }}>
                            <h5>Description: {card.description} 🗒️</h5>
                        </Card.Text>
                        <Card.Subtitle style={{ margin: "20px" }}>
                            <h4>Yet to achieve milestones: 🎯</h4>
                        </Card.Subtitle>
                        <ListGroup variant="flush" style={{ margin: "20px" }}>
                            {
                                milestone_array.map(listitem => (
                                    listitem.status === "false" &&
                                    <ListGroup.Item>{listitem.title}</ListGroup.Item>
                                ))
                            }
                        </ListGroup>
                        <Card.Subtitle style={{ margin: "20px" }}>
                            <h4>Milestones Achieved: 🎯</h4>
                        </Card.Subtitle>
                        <ListGroup variant="flush" style={{ margin: "20px" }}>
                            {milestone_array.map(listitem => (
                                listitem.status === "true" &&
                                <ListGroup.Item>{listitem.title}</ListGroup.Item>))
                            }
                        </ListGroup>
                        <Link to='/timer'>
                            <Button variant="primary" style={{ marginLeft: "20px" }} onClick={() => {
                                Cookies.set('projectname', card.project_name);
                                Cookies.set('nomilestonear', no_milestone_array);
                                Cookies.set('projectid', card._id);
                            }}>
                                Start a session
                            </Button>
                        </Link>
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
                {
                    projectlist.length > 0 &&
                    <CardGroup >
                        {
                            projectlist.map(renderCard)
                        }

                    </CardGroup>
                }


            </BodyWrapper>
            <ImgWrapper></ImgWrapper>
        </div>
        </>
    )
}

export default ViewProject