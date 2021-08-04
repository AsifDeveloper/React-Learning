import React, { Component } from 'react';
import styles from './appStyles.module.css';

function stylesheet() {
  const style = {
    color: 'red'
  };
  return (
    <div>
      <h1 className={styles.secondary}>Hello Asif</h1>
      <h2 style={style}>Error</h2>
    </div>
  );
}

export default stylesheet;
