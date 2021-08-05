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
import Forms from './components/forms';
import LifeCycleA from './components/lifeCycleA';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/clickCounter';
import HoverCounter from './components/hoverCounter';
import ShowList from './components/showLists';
import PostForm from './components/postForm';

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
        {/* <Forms/> */}
        {/* <LifeCycleA count="1" /> */}
        {/* <ErrorBoundary>
          <Hero name="Rocky" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero name="Jocky" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero name="croocky" />
        </ErrorBoundary> */}
        {/* <ClickCounter /> */}
        {/* <HoverCounter /> */}
        {/* <ShowList /> */}
        <PostForm />
      </div>
    );
  }
}

export default App;
