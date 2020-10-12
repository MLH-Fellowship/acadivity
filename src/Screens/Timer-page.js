import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Timer from './Timer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

function Timerpage() {
    return (
        <div className='statistics'> 
            <Navbar/>
                <Container>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <div className='page_heading'>
                                <Card body>
                                    Timer
                                </Card>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <div className='page_heading'>
                                <Card body>
                                    <Timer/>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}

export default Timerpage
