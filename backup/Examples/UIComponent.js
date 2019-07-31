import React from "react";

const renderHTML = props => {
  console.log(props);
  const { items } = props; //Không dùng lệnh this.props

  const render = items.map(item => {
    // return item.age === 11 ? 
    // (
    //   <li key={item.id}>Helo UI COmponent {item.name}</li>
    // ) : null;
    return <li key={item.id}>Helo UI COmponent {item.name}</li>;
  });

  return (
    <div>
      <ul>{render}</ul>
    </div>
  );
};

export default renderHTML;
