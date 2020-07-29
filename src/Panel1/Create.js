import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { notify } from 'react-notify-toast';

class Create extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }

    changeValue = (e) => {
        this.setState({
          value: e.target.value
        });
    }

    createNew = (event) => {
        event.preventDefault();
        let type = event.target.type.value;
        let value = this.state.value;

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type: type, value: value })
        };

        fetch('http://localhost:8080/api/v1/createNewEntity', requestOptions)
        .then(response => console.log(response))
        .then((response) => {
                notify.show('Submitted Successfully! Please refresh the page to view the added item in the list', "success");
                this.setState({ value: ""})
            },
            (error) => {
                notify.show('Error occurred while creating the entity! Please try again... ', "error");
            });
    }

    render() {
        let style = {
            textAlign: 'justify'
        };
        let floatRight = {
            float: 'right'
        }
        return (
            <div>
                <h5>Create Experience, Product and Feature </h5>
                <div style={style}>
                    <p>
                        We have standardized the naming convention of ref-markers by which we can automate reading of experience
                        from ref-marker, however new products and features are being created.
                    </p>
                </div>
                <Form ref={form => this.form = form} style={style} onSubmit={this.createNew}>
                    <Form.Group controlId="CreateType">
                        <Form.Label>Select Type</Form.Label>
                        <Form.Control as="select" custom name={'type'}>
                            <option key={'experience'}>Experience</option>
                            <option key={'product'}>Product</option>
                            <option key={'feature'}>Feature</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="CreateValue">
                        <Form.Label>Enter a value</Form.Label>
                        <Form.Control type="text" onChange={this.changeValue} name={'value'} value={this.state.value} placeholder="Enter a value" required/>
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