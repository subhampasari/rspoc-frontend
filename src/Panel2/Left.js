import React, { Component } from 'react';


class Left extends Component {
    render() {
        let style = {
            textAlign: 'justify'
        }
        return (
            <div style={style}>
                <p>Self Service ref-markers dashboard gives you the ability to create Experience, Product and Features.<br></br>
                    Tag existing ref-markers to Experience, Product and Feature and submit it to view the metrics in the ref-markers dashboard.<br></br>
                    Update Experience, Product and Feature if an incorrect tag has been created.<br></br>
                    Submit a delete request for Experience, Product and Feature.
                    <br></br><br></br>
                    When to create a new Product and Feature? <br></br>
                    If product or feature is new and does not exist in the dropdown below- create a new experience or product or feature-
                    Typically, you will end up creating more of new product and features than experiences.
                </p>
            </div>
        );
    }
}

export default Left;