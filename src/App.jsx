import React, { Component } from 'react';
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import PopMenu from './Components/PopMenu.jsx'
import MyWork from './Components/MyWork.jsx'
import Resume from './Components/Resume.jsx'
import Contact from './Components/Contact.jsx'
import TheEnd from './Components/TheEnd.jsx'

class App extends Component {




  _scrollTop = () => {
    document.querySelector(".top").scrollIntoView()
  }
  _scrollSecond = () => {
    document.querySelector(".second").scrollIntoView()
  }
  _scrollThird = () => {
    document.querySelector(".third").scrollIntoView()
  }
  _scrollFourth = () => {
    document.querySelector(".fourth").scrollIntoView()
  }
  _scrollLast = () => {
    document.querySelector(".last").scrollIntoView()
  }
  _scrollVeryLast = () => {
    document.querySelector(".very-last").scrollIntoView()
  }
  render() {
    return (
      <>
        <PopMenu />
        <Home second={this._scrollSecond} />
        <About home={this._scrollTop} third={this._scrollThird} />
        <MyWork second={this._scrollSecond} fourth={this._scrollFourth} />
        <Resume third={this._scrollThird} last={this._scrollLast} />
        <Contact fourth={this._scrollFourth} veryLast={this._scrollVeryLast} />
        <TheEnd last={this._scrollLast} />
      </>
    );
  }
}

export default App;
