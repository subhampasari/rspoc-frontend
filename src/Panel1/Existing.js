import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class Existing extends Component {

    constructor(props) {
        super(props);

        this.state = {
            experiences: ['Experience 1', 'Experience 2', 'Experience 3'],
            products: ['Product 1', 'Product 2', 'Product 3', 'Product 4'],
            features: ['Feature 1', 'Feature 2']
        }
    }

    render() {
        let style = {
            textAlign: 'justify'
        };
        return (
            <div>
                <h5>Existing Experience, Product and Feature </h5>

                <Form style={style}>
                    <Form.Group controlId="ExistingExperience">
                        <Form.Label>Existing Experience</Form.Label>
                        <Form.Control as="select" custom>
                            {this.state.experiences.map((experience) => <option>{experience}</option>)};
                        </Form.Control>
                    </Form.Group>
                </Form>

                <Form style={style}>
                    <Form.Group controlId="ExistingProduct">
                        <Form.Label>Existing Product</Form.Label>
                        <Form.Control as="select" custom>
                            {this.state.products.map((product) => <option>{product}</option>)};
                        </Form.Control>
                    </Form.Group>
                </Form>

                <Form style={style}>
                    <Form.Group controlId="ExistingFeature">
                        <Form.Label>Existing Feature</Form.Label>
                        <Form.Control as="select" custom>
                            {this.state.features.map((feature) => <option>{feature}</option>)};
                        </Form.Control>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default Existing;