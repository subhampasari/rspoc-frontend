import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class LeftFields extends Component {
    render() {
        let style = {
            textAlign: 'justify'
        }
        return (
            <div style={style}>
                <Form>
                    {/* <Form.Group controlId="ActionRadio"> */}
                        <Form.Label>Action</Form.Label>
                        {[ 'radio'].map((type) => (
                            <div key={`custom-inline-${type}`} className="mb-3">
                            <Form.Check
                                custom
                                inline
                                label="Delete"
                                type={type}
                                id={`custom-inline-${type}-1`}
                            />
                            <Form.Check
                                custom
                                inline
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
                        <Form.Label>Assign Ref-marker</Form.Label>
                        <Form.Control as="select" custom>
                            <option>Experience</option>
                            <option>Product</option>
                            <option>Feature</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default LeftFields;