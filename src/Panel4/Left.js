import React, { Component } from 'react';


class Left extends Component {
    render() {
        let style = {
            textAlign: 'justify'
        }
        return (
            <div style={style}>
                <p>
                    Tidbits : <br></br>
                    Add and update : updates the ref-markers in the DB<br></br>
                    Delete :         Only deletes the product and features association<br></br>
                    To view the updated ref-markers, go to the Tableau dashboard and view hthe metrics
                </p>
            </div>
        );
    }
}

export default Left;