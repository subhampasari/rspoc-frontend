import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LeftFields from './LeftFields';
import RightButtons from './RightButtons';
import Notifications, {notify} from 'react-notify-toast';

class Panel3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingPreviewData: false,
            action: "delete",
            previewExperience : "",
            previewProduct: "",
            previewFeature: "",
            previewRefName: ""
        }
    }

    resetPreviewValues() {
        this.setState({
            showingPreviewData: false,
            previewExperience : "",
            previewProduct: "",
            previewFeature: "",
            previewRefName: "",
            action: this.state.action
        })
    }

    clickPreviewButton = (e) =>  {
        e.preventDefault();
        // toast("Wow so easy !");
        this.setState({
            showingPreviewData: false,
        });
        const refName = e.currentTarget.ActionRef.value;
        let exp = e.currentTarget.AssignExperience.value;
        let prod = e.currentTarget.AssignProduct.value;
        let feat = e.currentTarget.AssignFeature.value;
        const action = e.currentTarget.action.value;

        if(action === 'delete') {
            let requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };

            fetch('http://localhost:8080/getRefMarker?refName='+refName, requestOptions)
                .then(response => response.json())
                .then((response) => {
                    if(response.length === 0)
                    {
                        notify.show('This ref-marker does not exist in the database!', "error");
                        console.log("no data");
                        return;
                    }
                    let resp = response[0];
                    exp=resp.experience;
                    prod=resp.product;
                    feat=resp.feature;

                    this.setState({
                        showingPreviewData: true,
                        previewExperience : exp,
                        previewProduct: prod,
                        previewFeature: feat,
                        previewRefName: refName,
                        action: action
                    });
                },
                (error) => {
                    notify.show('Error occurred while fetching the ref-marker! Please try again... ', "error");
                }
                );
        }
        else {
            this.setState({
                showingPreviewData: true,
                previewExperience : exp,
                previewProduct: prod,
                previewFeature: feat,
                previewRefName: refName,
                action: action
            })
        }
    }

    clickCancelPreview = (e) => {
        e.preventDefault();
        this.resetPreviewValues();
    }

    clickRadio = (e) => {
        this.setState({
            action: e.currentTarget.value,
            showingPreviewData: false,
        })
    }

    submitRefMarker = (e) => {
        e.preventDefault();
        console.log(this.state.action);
        let refName, requestOptions;
        switch(this.state.action) {
            case 'delete' : 
                refName = this.state.previewRefName;

                requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({refName:refName})
                };

                fetch('http://localhost:8080/api/v1/deleteRefMarker?refName='+refName, requestOptions)
                .then(response => response.json())
                .then((response) => {
                        notify.show('The ref-marker was deleted successfully!', "success");
                    },
                    (error) => {
                        notify.show('Error deleting ref-marker! Please try again...', "error");
                    });
                break;
            case 'add_update':
                refName = this.state.previewRefName;
                let experience = this.state.previewExperience;
                let product = this.state.previewProduct;
                let feature = this.state.previewFeature;

                requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ refName: refName, experience: experience, product: product, feature:feature })
                };

                fetch('http://localhost:8080/api/v1/createNewRefMarker', requestOptions)
                .then(response => console.log(response))
                .then(
                    (response) => {
                        notify.show('The ref-marker was created successfully!', "success");
                    },
                    (error) => {
                        notify.show('Error creating ref-marker! Please try again...', "error");
                    });
                break;
            default: break;
        }
        this.resetPreviewValues();
    }

    render() {
        let style = {
            border: '1px solid gray',
            padding: '2rem',
            margin: '0rem',
            borderRadius: '1rem'
        };
        let headStyle = {
            backgroundColor: '#E8E8E8',
        }
        return (
            <div>
                <Container>
                    <div style={headStyle}>
                        Ref-markers to Experiences, Products and Features
                    </div>
                    <Row>
                        <Col style={style}><LeftFields showingPreviewData={this.state.showingPreviewData} 
                            clickPreviewButton={this.clickPreviewButton} action={this.state.action}
                            clickRadio={this.clickRadio}/></Col>

                        <Col style={style}><RightButtons showingPreviewData={this.state.showingPreviewData} 
                         clickCancelPreview={this.clickCancelPreview} experience={this.state.previewExperience} 
                         product={this.state.previewProduct} action={this.state.action}
                         feature={this.state.previewFeature} refName={this.state.previewRefName} submitRefMarker={this.submitRefMarker}/></Col>
                    </Row>
                </Container>
                {/* <ToastContainer /> */}
            </div>
        );
    }
}

export default Panel3;