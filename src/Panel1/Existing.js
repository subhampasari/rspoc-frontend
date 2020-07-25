import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class Existing extends Component {
    render() {
        return (
            <div>
                <h5>Existing Experience, Product or Feature </h5>

                <Form>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Label>Custom select</Form.Label>
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