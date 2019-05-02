import React, { Component } from 'react';
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import PopMenu from './Components/PopMenu.jsx'
import MyWork from './Components/MyWork.jsx'
import Resume from './Components/Resume.jsx'
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
        <MyWork scroll={this._scroll} />
        <Resume />
        <Contact />
      </>
    );
  }
}

export default App;