import React from 'react';
import './SetMilestone.css';
import { Dropdown, Button } from 'react-bootstrap';



const setmilestones = () => {
    const milestonelist = [
        "Acadivity",
        "Practice DSA",
        "JAVA",
        "Guitar"
    ]
    var projectname = "Select Project";
    return(
        <div className="main-content-setmilestone">
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {projectname}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {
                            milestonelist.map((item, index) => {
                                return <Dropdown.Item key={index}>{item}</Dropdown.Item>;
                            })
                        }
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