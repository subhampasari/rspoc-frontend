// Contains the topmost panel - to edit or create a product, experience or feature

import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Existing from './Existing';
import Create from './Create';

class Panel1 extends Component {
    render() {
        let style = {
                border: '1px solid gray',
                padding: '2rem',
                margin: '0rem',
                borderRadius: '1rem'
        };
        let headStyle = {
            margin: "1rem"
        }
        return (
            <div>
                <Container>
                    <div style={headStyle}>
                        Create Experiences, Products and Features
                    </div>
                    <Row>
                        <Col style={style}><Existing /></Col>
                        <Col style={style}><Create /></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Panel1;