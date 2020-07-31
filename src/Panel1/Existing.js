import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';

class Existing extends Component {

    render() {
        let style = {
            textAlign: 'justify'
        };
        return (
            <div>
                <h5>View Existing Experience, Product and Feature </h5>

                <Form style={style}>
                    <Form.Group controlId="ExistingExperience">
                        <Form.Label>Existing Experiences</Form.Label>
                        <Form.Control as="select" custom>
                            {this.props.experiences.map((experience) => <option key={experience.timestamp}>{experience.value}</option>)};
                        </Form.Control>
                    </Form.Group>
                </Form>

                <Form style={style}>
                    <Form.Group controlId="ExistingProduct">
                        <Form.Label>Existing Products</Form.Label>
                        <Form.Control as="select" custom>
                            {this.props.products.map((product) => <option key={product.timestamp}>{product.value}</option>)};
                        </Form.Control>
                    </Form.Group>
                </Form>

                <Form style={style}>
                    <Form.Group controlId="ExistingFeature">
                        <Form.Label>Existing Features</Form.Label>
                        <Form.Control as="select" custom>
                            {this.props.features.map((feature) => <option key={feature.timestamp}>{feature.value}</option>)};
                        </Form.Control>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        experiences: state.experiences,
        products: state.products,
        features: state.features
    }
}

export default connect(mapStateToProps)(Existing);