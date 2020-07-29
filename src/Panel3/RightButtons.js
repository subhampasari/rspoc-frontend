import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class RightButtons extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        let style = {
            textAlign: 'justify'
        }
        let floatRight = {
            float: 'right',
            marginLeft: '1rem'
        }
        let value = !this.props.showingPreviewData ? "" : "RefMarker Name : "+this.props.refName+"\nExperience : " + 
                this.props.experience+"\nProduct : " + this.props.product + "\nFeature : "+this.props.feature +
                "\nAction : " + this.props.action;
        return (
            <div style={style}>
                {/* <p>{this.props.showingPreviewData ? 'True' : 'False'}</p> */}
                <p>Tag ref-markers to Experience, Product and Feature. Add/Update gives you the option to add or rectify incorrectly tagged markers
                    <br></br><br></br>
                    Delete will undo the tagging of the ref-markers. It will not delete the ref-marker.
                    <br></br><br></br>
                    Once ref-markers are tagged, it will take 24 hours to propagate into the tableau dashboard with updated data from the
                    launch date of the ref-marker.
                </p>

                <Form.Group controlId="PreviewArea">
                    <Form.Label>Preview</Form.Label>
                    <Form.Control as="textarea" rows="5" readOnly value={value} />
                </Form.Group>

                <div>
                <Button variant="success" type="submit" style={floatRight} onClick={(e) => this.props.submitRefMarker(e)}
                    disabled={!this.props.showingPreviewData ? true : false}>
                    Submit
                </Button>

                <Button variant="secondary" type="submit" style={floatRight} onClick={(e) => this.props.clickCancelPreview(e)}
                    disabled={!this.props.showingPreviewData ? true : false}>
                    Cancel
                </Button>

                </div>

                
            </div>
        );
    }
}

export default RightButtons;