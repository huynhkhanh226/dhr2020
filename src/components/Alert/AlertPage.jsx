import React, { Component } from 'react'
import { connect } from 'react-redux';

const AlertPage = (props) => {
    return (
        <div>
            <span>alert content</span>
        </div>
    )
}

function mapStateToProps(state) {
    console.log("alert mapStateToProps");
    console.log(state);
    const { alert } = state;
    console.log(alert)
    return { alert };
}

export default connect(mapStateToProps)(AlertPage)



