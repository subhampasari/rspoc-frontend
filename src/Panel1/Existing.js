import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class Existing extends Component {
    render() {
        let style = {
            textAlign: 'justify'
        };
        return (
            <div>
                <h5>Existing Experience, Product or Feature </h5>

                <Form style={style}>
                    <Form.Group controlId="ExistingExperience">
                        <Form.Label>Existing Experience</Form.Label>
                        <Form.Control as="select" custom>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                </Form>

                <Form style={style}>
                    <Form.Group controlId="ExistingProduct">
                        <Form.Label>Existing Product</Form.Label>
                        <Form.Control as="select" custom>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                </Form>

                <Form style={style}>
                    <Form.Group controlId="ExistingFeature">
                        <Form.Label>Existing Feature</Form.Label>
                        <Form.Control as="select" custom>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default Existing;