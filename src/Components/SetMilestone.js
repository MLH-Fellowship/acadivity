import React from 'react';
import './SetMilestone.css';
import { Dropdown, Button } from 'react-bootstrap';

const setmilestones = () => {
    var projectname = "Select Project";
    return(
        <div className="main-content-setmilestone">
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {projectname}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" >Acadivity</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Practice DSA</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">JAVA Assignment</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">Guitar Practice</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            &nbsp;
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Select MileStone
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" >Complete 5 min form video 1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Complete 5 min form video 2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Complete 5 min form video 3</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">Complete final Ex</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <br/>
            <div>
                <Button variant="outline-primary" href="/statistics">Submit Time!</Button>{' '}
            </div>
        </div>
    );
};

export default setmilestones;