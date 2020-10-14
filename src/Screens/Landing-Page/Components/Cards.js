import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import './Cards.css';

function Cards() {
  return (
    <CardDeck>
      <Card>
        <Card.Img variant="top" src="images/01.jpg" />
        <Card.Body>
          <Card.Title className='card-title'>Grade  Aid</Card.Title>
          <Card.Text>
            Provide a target CGPA in X semesters.<br/>
            Get a detailed report on the minimum requirement <br/>per semester to reach the target.<br/>
            Update CGPA after each semester to get a revised plan <br/>of action.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="images/03.jpg" />
        <Card.Body>
          <Card.Title>Project Manager</Card.Title>
          <Card.Text>
              Create / edit projects<br/>
              Time your work<br/>
              Set milestones and conquer them.<br/>
              Stay motivated through post work retrospection.<br/>
              Take breaks with our entertainment suggestions
          </Card.Text>
        </Card.Body>
      </Card>
      {/* <Card>
        <Card.Img variant="top" src="images/03.jpg" />
        <Card.Body>
          <Card.Title>Attendance Guide</Card.Title>
          <Card.Text>
            Check your current attendance in each subject.<br/>
            Get a plan on managing attendance to maintain the target percentage
          </Card.Text>
        </Card.Body>
      </Card> */}
  </CardDeck>
  )
}

export default Cards
