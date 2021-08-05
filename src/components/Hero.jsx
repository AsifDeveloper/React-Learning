import React, { Component } from 'react';

const Hero = ({ name }) => {
  if (name === 'croocky') {
    throw new Error('Not a hero');
  } else {
    return <div>{name}</div>;
  }
};

export default Hero;
