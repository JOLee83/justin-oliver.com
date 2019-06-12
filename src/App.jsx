import React, { Component } from 'react';
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import PopMenu from './Components/PopMenu.jsx'
import MyWork from './Components/MyWork.jsx'
import Skills from './Components/Skills.jsx'
import Contact from './Components/Contact.jsx'

class App extends Component {
  _scroll = target => {
    document.querySelector(target).scrollIntoView({ behavior: "smooth" })
  }
  componentDidMount() {
    console.log("Welcome to my portfolio")
  }
  render() {
    return (
      <>
        <PopMenu scroll={this._scroll} />
        <Home />
        <About scroll={this._scroll} />
        <Skills />
        <MyWork scroll={this._scroll} />
        <Contact />
      </>
    );
  }
}

export default App;