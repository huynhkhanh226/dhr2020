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
      <div style={style} className="test-sass">
        abc
      </div>
      <Button color="primary">primary</Button>{" "}
      <Button color="secondary">secondary</Button>{" "}
      <Button color="success">success</Button>{" "}
      <Button color="info">info</Button>{" "}
      <Button color="warning">warning</Button>{" "}
      <Button color="danger">danger</Button> <Button color="link">link</Button>


    </div>
  );
};

export default navbar;
