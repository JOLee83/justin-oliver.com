import React, { Component } from 'react';
import styled from 'styled-components'

const MenuDiv = styled.div`
  position: fixed;
  z-index: 101;
  .mobile-button, .full-button {
    text-align: center;
    font-family: 'Chakra Petch', sans-serif;
    border-radius: 20%;
    color: rgb(250, 250, 250);
    background-color: transparent;
    font-size: 1.5rem;
    transition: background-color .4s ease-in-out;
    outline-color: rgb(250, 0, 0);
    cursor: pointer;
  }
  .mobile-button {
    position: fixed;
    top: 3px;
    left: 3px;
    margin: 2px;
    overflow: visible;
    border: none;
    width: 41px;
    height: 41px;
    .bar {
      position: fixed;
      background-color: rgb(250, 250, 250);
    }
    .button-div {
      position: fixed;
      top: 8px;
      left: 8px;
      width: 31px;
      height: 31px;
      border: .1rem solid rgb(250, 250, 250);
      border-radius: 5px;
      z-index: 99;
      background-color: rgba(0,0,0,.5);

      box-shadow: -.1rem -.1rem 1rem rgb(25, 25, 25),
          .1rem .1rem 1rem rgb(25, 25, 25),
          .1rem .1rem 1rem rgb(25, 25, 25),
          -.1rem -.1rem 1rem rgb(25, 25, 25);
    }
    .open-1-1 {
      transition: all .5s linear;
      width: 14px;
      height: 3px;
      border-radius:5px 0 0 5px;
      top: 16px;
      left: 11px;
      z-index: 102;
    }
    .close-1-1 {
      transition: all .5s linear;
      width: 18px;
      height: 3px;
      border-radius:5px 0 0 5px;
      transform: rotate(45deg);
      top: 18px;
      left: 11px;
      z-index: 102;
    }
    .open-1-2 {
      transition: all .5s linear;
      width: 14px;
      height: 3px;
      border-radius:0 5px 5px 0;
      top: 16px;
      left: 25px;
      z-index: 102;
    }
    .close-1-2 {
      transition: all .5s linear;
      width: 16px;
      height: 3px;
      border-radius:0 5px 5px 0;
      transform: rotate(-45deg);
      top: 18px;
      left: 23px;
      z-index: 102;
    }
    .open-2 {
      transition: all .9s ease-in-out;
      border-radius: 5px;
      width: 28px;
      height: 3px;
      top: 24px;
      left: 11px;
      z-index: 101;
    }
    .close-2 {
      transition: all .9s ease-in-out;
      border-radius: 5px;
      width: 33px;
      height: 33px;
      top: 8px;
      left: 8px;
      background-color: rgba(0,0,0,.5);
    }
    .open-3-1 {
      transition: all .5s linear;
      width: 14px;
      height: 3px;
      border-radius:5px 0 0 5px;
      top: 32px;
      left: 11px;
      z-index: 102;
    }
    .close-3-1 {
      transition: all .5s linear;
      width: 16px;
      height: 3px;
      border-radius:5px 0 0 5px;
      transform: rotate(-45deg);
      top: 30px;
      left: 11px;
      z-index: 102;
    }
    .open-3-2 {
      transition: all .5s linear;
      width: 14px;
      height: 3px;
      border-radius:0 5px 5px 0;
      top: 32px;
      left: 25px;
      z-index: 102;
    }
    .close-3-2 {
      transition: all .5s linear;
      width: 16px;
      height: 3px;
      border-radius:0 5px 5px 0;
      transform: rotate(45deg);
      top: 30px;
      left: 23px;
      z-index: 102;
    }
  }
  button.jump {
    font-family: 'Chakra Petch', sans-serif;
    color: rgb(250, 250, 250);
    background-color: transparent;
    border: none;
    font-size: 1.3rem;
    width: 100%;
    padding: 1rem;
    cursor: pointer;
    transition: color .4s ease-in-out;
    outline-color: rgb(250, 0, 0);
  }
  .hidden, .shown {
    margin-top: .3rem;
    position: fixed;
    top: 45px;
    background-image: linear-gradient(to top, rgb(0, 0, 0), rgb(25, 25, 25));
    color: rgb(250, 250, 250);
    display: flex;
    font-size: 1.3rem;
    width: 100vw;
    z-index: 99;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-family: 'Chakra Petch', sans-serif;
    box-shadow: -.05rem -.05rem .1rem rgb(240, 240, 240),
    .05rem .05rem .1rem rgb(240, 240, 240),
    .05rem .05rem .1rem rgb(240, 240, 240),
    -.05rem -.05rem .1rem rgb(240, 240, 240);
    transition: all .4s ease-in-out;
    z-index: none;
  }
  .hidden {
    left: -150%;
  }
  .shown {
    left: 0;
  }
  .full-button {
    display: none;
  }
  @media (min-width: 700px) {
    .full-button {
      position: fixed;
      top: 8px;
      left: 8px;
      border: .1rem solid rgb(250, 250, 250);
      display: flex;
      font-family: 'Chakra Petch', sans-serif;
      padding: .15rem .3rem 0 .3rem;
      width: 80px;
      .faded {
        text-align: center;
        opacity: 0;
        transition: opacity .4s ease-in-out;
      }
      .unfaded {
        text-align: center;
        opacity: 1;
        transition: opacity .4s ease-in-out;
      }
    }
    .mobile-button {
      display:none;
    }
    .shown, .hidden {
      font-size:1.3rem;
      height: 80vh;
      width:150px;
    }
    .hidden {
      left: -100%;
    }
    .shown {
      left: 0;
    }
    .full-button {
      font-size: 1.7rem;
      padding-top: 0;
      border-radius: 10%;
      max-width: 95px;
    }
    .jump:hover {
      color: rgb(139, 0, 0);
      transition: color .4s ease-in-out;
    }
    .full-button:hover {
      background-color: rgb(250, 250, 250);
      color: rgb(139, 0, 0);
      transition: background-color .4s ease-in-out, color .4s ease-in-out;
    }
  }
`
class PopMenu extends Component {
  state = {
    popMenu: false,
    buttonText: "Menu",
    fading: false
  }
  componentDidMount() {
    window.addEventListener('scroll', this._closeMenu)
  }
  _menu = target => {
    this.props.scroll(target)
    this._closeMenu()
  }
  _closeMenu = () => {
    if (this.state.popMenu) {
      this.setState(() => {
        return {
          popMenu: false
        }
      })
      this._changeText()
    }

  }
  _toggleMenu = () => {
    this.setState(prevState => {
      return {
        popMenu: !prevState.popMenu
      }
    })
    this._changeText()
  }
  _changeText = () => {
    this.setState(() => ({
      fading: true
    }))
    setTimeout(_ => {
      if (this.state.buttonText === "Menu") {
        this.setState(() => ({
          buttonText: "Close",
          fading: false
        }))
      } else {
        this.setState(() => ({
          buttonText: "Menu",
          fading: false
        }))
      }
    }, 500)
  }
  render() {
    return (
      <MenuDiv>
        <button className="mobile-button" onClick={this._toggleMenu} tabIndex="1">
          <div className="button-div" />
          <div className={`bar ${this.state.popMenu ? "close-1-1" : "open-1-1"}`} />
          <div className={`bar ${this.state.popMenu ? "close-1-2" : "open-1-2"}`} />
          <div className={`bar ${this.state.popMenu ? "close-2" : "open-2"}`} />
          <div className={`bar ${this.state.popMenu ? "close-3-1" : "open-3-1"}`} />
          <div className={`bar ${this.state.popMenu ? "close-3-2" : "open-3-2"}`} />
        </button>
        <button className="full-button" onClick={this._toggleMenu} tabIndex="1">
          <div className={this.state.fading ? "faded" : "unfaded"}>{this.state.buttonText}</div>
        </button>
        <div className={this.state.popMenu ? "shown" : "hidden"}>
          <button className="jump" onClick={() => this._menu(".home")} tabIndex={this.state.popMenu ? 2 : -1}>
            Home
          </button>
          <button className="jump" onClick={() => this._menu(".about")} tabIndex={this.state.popMenu ? 2 : -1}>
            About Me
          </button>
          <button className="jump" onClick={() => this._menu(".work")} tabIndex={this.state.popMenu ? 2 : -1}>
            My Work
          </button >
          <button className="jump" onClick={() => this._menu(".resume")} tabIndex={this.state.popMenu ? 2 : -1}>
            Resume
          </button >
          <button className="jump" onClick={() => this._menu(".contact")} tabIndex={this.state.popMenu ? 2 : -1}>
            Contact Me
          </button >
        </div >
      </MenuDiv >
    );
  }
}
export default PopMenu;