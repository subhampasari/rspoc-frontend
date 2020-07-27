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

                <p>Tag ref-markers to Experience, Product and Feature. Add/Update gives you the option to add or rectify incorrectly tagged markers
                    <br></br><br></br>
                    Delete will undo the tagging of the ref-markers. It will not delete the ref-marker.
                    <br></br><br></br>
                    Once ref-markers are tagged, it will take 24 hours to propagate into the tableau dashboard with updated data from the
                    launch date of the ref-marker.
                </p>

                <Form.Group controlId="PreviewArea">
                    <Form.Label>Preview</Form.Label>
                    <Form.Control as="textarea" rows="5" readOnly/>
                </Form.Group>

                <div>
                <Button variant="success" type="submit" style={floatRight}>
                    Submit
                </Button>

                <Button variant="secondary" type="submit" style={floatRight}>
                    Cancel
                </Button>

                </div>

                
            </div>
        );
    }
}

export default RightButtons;