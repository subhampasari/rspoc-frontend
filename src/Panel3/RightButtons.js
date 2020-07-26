import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class RightButtons extends Component {
    render() {
        let style = {
            textAlign: 'justify'
        }
        let marginStyle = {
            marginRight: '20px'
        }
        let floatRight = {
            float: 'right',
            marginLeft: '1rem'
        }
        return (
            <div style={style}>
                {/* <Button variant="info">Preview</Button> */}

                <Form.Group controlId="PreviewArea">
                    <Form.Label>Preview</Form.Label>
                    <Form.Control as="textarea" rows="4" readOnly/>
                </Form.Group>

                <div>
                <Button variant="success" type="submit" style={floatRight}>
                    Submit
                </Button>

                <Button variant="info" type="submit" style={floatRight}>
                    Preview
                </Button>

                </div>

                <Button variant="secondary" type="submit">
                    Cancel
                </Button>
            </div>
        );
    }
}

export default RightButtons;