import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class LeftFields extends Component {
    render() {
        let style = {
            textAlign: 'justify'
        };
        let floatRight = {
            float: 'right',
        };
        let floatLeft = {
            float: 'left',
        };
        let marginRight = {
            marginRight: '1rem'
        }
        return (
            <div style={style}>
                <Form onSubmit={this.props.clickPreviewButton}>
                        <Form.Label>Action</Form.Label>
                        <br></br>
                        <div>
                            <div style={floatLeft}>
                                <input onChange={this.props.clickRadio} htmlFor="delete" style={marginRight} type="radio"
                                 value="delete" name="action" checked={this.props.action==='delete'?true:false} />
                                <label htmlFor="delete">Delete</label> 
                            </div>
                            <div style={floatRight}>
                                <label style={marginRight} htmlFor="add_update">Add/Update</label> 
                                <input htmlFor="add_update" onChange={this.props.clickRadio} type="radio" value="add_update" name="action"
                                checked={this.props.action==='add_update'?true:false} />
                                
                            </div>
                        </div>
                        <br></br><br></br>

                    <Form.Group controlId="ActionRef">
                        <Form.Label>Enter Ref-marker Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Ref-marker Name" required />
                    </Form.Group>

                    <Form.Group controlId="AssignExperience">
                        <Form.Label>Experience</Form.Label>
                        <Form.Control as="select" custom required disabled={this.props.action === 'delete' ? true : false}>
                            {this.props.experiences.map((experience) => <option key={experience.timestamp}>{experience.value}</option>)};
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="AssignProduct">
                        <Form.Label>Product</Form.Label>
                        <Form.Control as="select" custom required disabled={this.props.action === 'delete' ? true : false}>
                            {this.props.products.map((product) => <option key={product.timestamp}>{product.value}</option>)};
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="AssignFeature">
                        <Form.Label>Feature</Form.Label>
                        <Form.Control as="select" custom required disabled={this.props.action === 'delete' ? true : false}>
                            {this.props.features.map((feature) => <option key={feature.timestamp}>{feature.value}</option>)};
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


const mapStateToProps = (state) => {
    return {
        experiences: state.experiences,
        products: state.products,
        features: state.features
    }
}


export default connect(mapStateToProps)(LeftFields);