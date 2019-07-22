import React, { Component } from "react";
import { Button, ButtonToolbar } from "reactstrap";
const navbar = () => {
    var style = {
      color: "white",
      fontSize: 200
    };
  console.log("khanh test source map");
  return (
    <div>
        <div style={style} className="test-sass">abc</div>
      <ButtonToolbar>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="info">Info</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
      </ButtonToolbar>
    </div>
  );
};

export default navbar;
