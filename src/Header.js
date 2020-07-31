import React from 'react';

function Header() {
    var style = {
        padding: '1rem',
    };
    let styleJustify = {
        width: '75%',
        align: 'centre',
        marginLeft: 'auto',
        marginRight: 'auto',
        border: '1px solid black',
        marginBottom: '1rem',
        backgroundColor: '#e8e8e8',
        padding: '1rem'
    };
    return (
        <div>
            <div style={style}>
                Self Service for tagging ref-markers
            </div>

            {/* <div style={styleJustify}>
                <p>
                    This dashboard enables you to view, create and assign ref-markers to appropriate experiences, product and features.
                    You have the ability to create Experiences, Products and Features. 
                </p>
            </div> */}
        </div>
    );
}

export default Header;