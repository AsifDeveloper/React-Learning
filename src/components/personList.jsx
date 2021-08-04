import React, { Component } from 'react';

function PersonList(props) {
  const names = props.person;
  return (
    <div>
      Hello, My Name is {names.name}. I am {names.Age}. I have {names.Skill}
    </div>
  );
}

export default PersonList;
