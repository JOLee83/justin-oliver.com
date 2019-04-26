import React, { Component } from 'react';
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import PopMenu from './Components/PopMenu.jsx'
import MyWork from './Components/MyWork.jsx'
import Resume from './Components/Resume.jsx'
import Contact from './Components/Contact.jsx'

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
        <PopMenu
          home={this._scrollTop}
          second={this._scrollSecond}
          third={this._scrollThird}
          fourth={this._scrollFourth}
          last={this._scrollLast} />
        <Home />
        <About second={this._scrollSecond} />
        <MyWork third={this._scrollThird} />
        <Resume />
        <Contact />

      </>
    );
  }
}

export default App;