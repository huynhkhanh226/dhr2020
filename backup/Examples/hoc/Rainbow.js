import React, { Component } from 'react'

const Rainbow = (WrappedComponent) =>  {
    const colors = ['read', 'blue','yellow', 'black','pink']

    const randomColor = colors[Math.floor( Math.random() * 5)];
    const style = {
        color: randomColor
    };

    return (props) => {
        console.log(props);
        return (
            <div style={style}>
                <WrappedComponent {...props}/>
            </div>
        );
    }
}

export default Rainbow
