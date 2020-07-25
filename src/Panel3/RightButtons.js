import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class RightButtons extends Component {
    render() {
        let style = {
            textAlign: 'justify'
        }
        let marginStyle = {
            margin: '1rem'
        }
        return (
            <div style={style}>
                <Button variant="info">Preview</Button>

                <Form.Group controlId="PreviewArea">
                    <Form.Label>Preview</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>

                <Button variant="success" type="submit">
                    Submit
                </Button>

                <Button variant="secondary" type="submit"  style={marginStyle}>
                    Cancel
                </Button>
            </div>
        );
    }
}

export default RightButtons;