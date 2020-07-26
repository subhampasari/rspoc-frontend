import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class Create extends Component {
    render() {
        let style = {
            textAlign: 'justify'
        };
        let floatRight = {
            float: 'right'
        }
        return (
            <div>
                <h5>Create Experience, Product or Feature </h5>

                <Form style={style}>
                    <Form.Group controlId="CreateType">
                        <Form.Label>Select Type</Form.Label>
                        <Form.Control as="select" custom>
                            <option>Experience</option>
                            <option>Product</option>
                            <option>Feature</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="CreateValue">
                        <Form.Label>Enter a value</Form.Label>
                        <Form.Control type="text" placeholder="Enter a value" />
                    </Form.Group>

                    <Button variant="success" type="submit" style={floatRight}>
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Create;