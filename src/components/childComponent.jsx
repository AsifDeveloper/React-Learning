import React, { Component } from 'react';

function ChildComponent(props) {
  return (
    <button
      onClick={() => {
        props.greetParentHandler('Child');
      }}
    >
      Click Me {props.message}
    </button>
  );
}

export default ChildComponent;
