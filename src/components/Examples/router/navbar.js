import React, { Component } from 'react'

const navbar = () => {
    var style = {
        color: 'white',
        fontSize: 200
      };
      console.log("khanh test source map");
    return (
        
        <div>
            <nav className="nav justify-content-center">
              <a className="nav-link test-scss test-css testabc" style={style} href="/home">Home</a>
              <a className="nav-link" href="/about">About</a>
              <a className="nav-link" href="/contact">Contact</a>
            </nav>
        </div>
    )
}

export default navbar
