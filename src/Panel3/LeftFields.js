import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class LeftFields extends Component {
    render() {
        let style = {
            textAlign: 'justify'
        };
        let floatRight = {
            float: 'right',
            // backgroundColor: '#4bf542'
        };
        return (
            <div style={style}>
                <Form>
                    {/* <Form.Group controlId="ActionRadio"> */}
                        <Form.Label>Action</Form.Label>
                        {[ 'radio'].map((type) => (
                            <div key={`custom-inline-${type}`} className="mb-3">
                            <Form.Check
                                name="radio"
                                custom
                                inline
                                label="Delete"
                                type={type}
                                id={`custom-inline-${type}-1`}
                            />
                            <Form.Check
                                name="radio"
                                custom
                                inline
                                style={floatRight}
                                label="Add/Update"
                                type={type}
                                id={`custom-inline-${type}-2`}
                            />
                            </div>
                        ))}
                    {/* </Form.Group> */}

                    <Form.Group controlId="ActionRef">
                        <Form.Label>Enter Ref-marker Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Ref-marker Name" />
                    </Form.Group>

                    <Form.Group controlId="ActionAssign">
                        <Form.Label>Experience</Form.Label>
                        <Form.Control as="select" custom>
                            <option>Experience 1</option>
                            <option>Experience 2</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="ActionAssign">
                        <Form.Label>Product</Form.Label>
                        <Form.Control as="select" custom>
                            <option>Product 1</option>
                            <option>Product 2</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="ActionAssign">
                        <Form.Label>Feature</Form.Label>
                        <Form.Control as="select" custom>
                            <option>Feature 1</option>
                            <option>Feature 2</option>
                        </Form.Control>
                    </Form.Group>

                    <Button variant="info" type="submit" style={floatRight}>
                        Preview {'>>>'}
                    </Button>
                </Form>
            </div>
        );
    }
}

export default LeftFields;