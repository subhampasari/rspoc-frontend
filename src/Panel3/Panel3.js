import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LeftFields from './LeftFields';
import RightButtons from './RightButtons';

class Panel3 extends Component {
    render() {
        let style = {
            border: '1px solid gray',
            padding: '2rem',
            margin: '0rem',
            borderRadius: '1rem'
        };
        let headStyle = {
            backgroundColor: '#E8E8E8',
        }
        return (
            <div>
                <Container>
                    <div style={headStyle}>
                        Ref-markers to Experiences, Products and Features
                    </div>
                    <Row>
                        <Col style={style}><LeftFields /></Col>
                        <Col style={style}><RightButtons /></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Panel3;