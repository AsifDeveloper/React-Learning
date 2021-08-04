import React, { Component } from 'react';
import './style.css';
import { Header } from './components/header';
import Home from './components/home';
import Footer from './components/footer';
import Counter from './components/counter';
import ParentComponent from './components/parentComponent';
import Login from './components/Login';
import NameList from './components/NameList';
import StyleSheet from './components/stylesheet';
import './components/appStyles.css';
import Forms from './components/forms'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header
          name="Manjunathan"
          heroName="Saritha"
          className="header"
          id="header"
        >
          All the friends are neccessary to attend this occasion
        </Header> */}
        {/* <Home name="Manjunathan" company="Mindtree" position="Module Lead">
          He has overcome many hurdles to attain this position. Many
          Congratulations to you!
        </Home> */}
        {/* <Footer name="Mindtree: " /> */}
        {/* <Counter /> */}
        {/* <ParentComponent /> */}
        {/* <Login /> */}
        {/* <NameList /> */}
        {/* <StyleSheet /> */}
        <Forms/>
      </div>
    );
  }
}

export default App;
