import React, { Component } from 'react';
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import PopMenu from './Components/PopMenu.jsx'
import MyWork from './Components/MyWork.jsx'
import Resume from './Components/Resume.jsx'
import Contact from './Components/Contact.jsx'
import TheEnd from './Components/TheEnd.jsx'

class App extends Component {

  state = {
    end: 'normal'
  }

  _breakThePage = () => {
    this.setState(() => {
      if (this.state.end === 'normal') {
        return {
          end: 'break'
        }
      } else {
        return {
          end: 'normal'
        }
      }
    })
  }
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
        {/* <div className={this.state.end}><h1>Who Turned Off The Lights?</h1>
          <label className="switch">
            <input type="checkbox" onClick={this._breakThePage} />
            <span className="slider round"></span>
          </label>
        </div> */}
        <PopMenu
          home={this._scrollTop}
          second={this._scrollSecond}
          third={this._scrollThird}
          fourth={this._scrollFourth}
          last={this._scrollLast} />
        <Home />
        <About />
        <MyWork />
        <Resume />
        <Contact />
        <TheEnd />
      </>
    );
  }
}

export default App;