import React, { Component } from 'react';
import styled from 'styled-components'

const TpyeDiv = styled.div`
 font-size: 1.7rem;
font-family: 'Chakra Petch', sans-serif;
.cursor {
  opacity: 1;
  animation: blink 1s step-end infinite;
}
@media (min-width: 500px) {
  font-size: 2.5rem;
}
@keyframes blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
`
class TypeWriter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titles: ["Problem Solver", "Up For A Challenge", "Web Developer", "Problem Solver", "Up For A Challenge", "Web Developer", "Na Na Na Batman!"],
      title: 0,
      cursor: 0,
      erase: false,
      currentTitle: ""
    }
  }
  componentDidMount() {
    setTimeout(this._typeWriter, 500)
  }
  _typeWriter = () => {
    if (this.state.erase) {
      this.setState(prevState => ({
        cursor: --prevState.cursor
      }), () => {
        this._eraser()
      })
    } else {
      this.setState(prevState => ({
        cursor: ++prevState.cursor
      }), () => {
        this._eraser()
      })
    }
  }
  _eraser = () => {
    if (this.state.cursor === this.state.titles[this.state.title].length) {
      this.setState(() => ({
        erase: true
      }), () => {
        this._delay()
      })
    }
    else if (this.state.cursor === 0) {
      this.setState(() => ({
        erase: false
      }), () => {
        this._changeTitle()
      })
    } else {
      this._delay()
    }
  }
  _changeTitle = () => {
    if (this.state.title === this.state.titles.length - 1) {
      this.setState(() => ({
        title: 0
      }), () => {
        this._delay()
      })
    } else {
      this.setState(prevState => ({
        title: ++prevState.title
      }), () => {
        this._delay()
      })
    }
  }
  _delay = () => {
    if (this.state.erase && this.state.cursor === this.state.titles[this.state.title].length - 1) {
      setTimeout(this._currentTitle, 3000)
    }
    else if (!this.state.erase && this.state.cursor === 1) {
      setTimeout(this._currentTitle, 1000)
    } else {
      this._currentTitle()
    }
  }
  _currentTitle = () => {
    this.setState(() => ({
      currentTitle: this.state.titles[this.state.title].slice(0, this.state.cursor)
    }), () => {
      if (this.state.erase) {
        setTimeout(this._typeWriter, 75)
      } else {
        setTimeout(this._typeWriter, 125)
      }
    })
  }
  render() {
    return (
      <TpyeDiv>
        <div className="title">{this.state.currentTitle}<span className="cursor">|</span></div>
      </TpyeDiv>
    );
  }
}
export default TypeWriter;