import React from 'react';

export const Header = props => {
  return (
    <div id={props.id} className={props.className}>
      <h1>
        {' '}
        {props.name} marries {props.heroName}{' '}
      </h1>
      <h2> {props.children} </h2>
    </div>
  );
};
