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

    componentDidMount() {
        let exp=[], prod=[], feat=[];
        fetch('http://localhost:8080/getEntities')
            .then(res => res.json())
            .then(
                (result) => {
                    result.forEach((value) => {
                        if(value.type === 'Experience')
                            exp.push(value);
                        else if(value.type === 'Product')
                            prod.push(value);
                        else if(value.type === 'Feature')
                            feat.push(value);
                        
                    });
                    this.setState({
                        experiences: exp,
                        products: prod,
                        features: feat
                    });
                },
                (error) => {
                    console.log(error);
                }
            )
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
                            {this.state.experiences.map((experience) => <option key={experience.value}>{experience.value}</option>)};
                        </Form.Control>
                    </Form.Group>
                </Form>

                <Form style={style}>
                    <Form.Group controlId="ExistingProduct">
                        <Form.Label>Existing Product</Form.Label>
                        <Form.Control as="select" custom>
                            {this.state.products.map((product) => <option key={product.value}>{product.value}</option>)};
                        </Form.Control>
                    </Form.Group>
                </Form>

                <Form style={style}>
                    <Form.Group controlId="ExistingFeature">
                        <Form.Label>Existing Feature</Form.Label>
                        <Form.Control as="select" custom>
                            {this.state.features.map((feature) => <option key={feature.value}>{feature.value}</option>)};
                        </Form.Control>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default Existing;