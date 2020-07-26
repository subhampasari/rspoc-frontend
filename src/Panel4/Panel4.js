import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Left from './Left';
import Right from './Right';

class Panel4 extends Component {
    render() {
        let style = {
            border: '1px solid gray',
            padding: '2rem',
            margin: '0rem',
            borderRadius: '1rem'
        };
        return (
            <div>
                <Container>
                    <Row>
                        <Col style={style} md={8}><Left /></Col>
                        <Col style={style} md={4}><Right /></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Panel4;