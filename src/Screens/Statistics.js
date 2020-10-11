import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import './Statistics.css'
import Navbar from '../Components/Navbar/Navbar';

function Statistics() {
    return (
        <div className='statistics'> 
            <Navbar/>
                <Container>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <div className='page_heading'>
                                <Card body>
                                    Statistics
                                </Card>
                            </div>
                        </Col>
                    </Row>
    
                </Container>
        </div>
    )
}

export default Statistics
