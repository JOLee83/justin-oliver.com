import React, { Component } from 'react';
import styled from 'styled-components'

const MenuDiv = styled.div`
position: fixed;
z-index: 101;
.mobile-button, .full-button {
  position: fixed;
  top: 8px;
  left: 8px;
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
  border: none;
  width: 35px;
  height: 35px;
  .flex {
    display: flex;
  }
  .bar {
    position: fixed;
    background-color: rgb(250, 250, 250);
  }
  .o-one-1 {
    transition: all .5s linear;
    width: 18px;
    height: 3px;
    border-radius:5px 0 0 5px;
    top: 16px;
    left: 11px;
  }
  .c-one-1 {
    transition: all .5s linear;
    width: 18px;
    height: 3px;
    border-radius:5px 0 0 5px;
    transform: rotate(45deg);
    top: 18px;
    left: 11px;
  }
  .o-one-2 {
    transition: all .5s linear;
    width: 16px;
    height: 3px;
    border-radius:0 5px 5px 0;
    top: 16px;
    left: 23px;
  }
  .c-one-2 {
    transition: all .5s linear;
    width: 16px;
    height: 3px;
    border-radius:0 5px 5px 0;
    transform: rotate(-45deg);
    top: 18px;
    left: 23px;
  }
  .o-two {
    transition: all .5s linear;
    border-radius: 5px;
    width: 28px;
    height: 3px;
    top: 24px;
    left: 11px;
  }
  .c-two {
    transition: all .5s linear;
    border-radius: 5px;
    width: 28px;
    height: 3px;
    top: 24px;
    left: 11px;
    opacity: 0;
  }
  .o-three-1 {
    transition: all .5s linear;
    width: 14px;
    height: 3px;
    border-radius:5px 0 0 5px;
    top: 32px;
    left: 11px;
  }
  .c-three-1 {
    transition: all .5s linear;
    width: 16px;
    height: 3px;
    border-radius:5px 0 0 5px;
    transform: rotate(-45deg);
    top: 30px;
    left: 11px;
  }
  .o-three-2 {
    transition: all .5s linear;
    width: 16px;
    height: 3px;
    border-radius:0 5px 5px 0;
    top: 32px;
    left: 23px;
  }
  .c-three-2 {
    transition: all .5s linear;
    width: 16px;
    height: 3px;

    border-radius:0 5px 5px 0;
    transform: rotate(45deg);
    top: 30px;
    left: 23px;
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
  .full-button{
    border: .1rem solid rgb(250, 250, 250);
    display: flex;
    font-family: 'Chakra Petch', sans-serif;
    padding: .15rem .3rem 0 .3rem;
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
    popMenu: false
  }
  componentDidMount() {
    window.addEventListener('scroll', this._closeMenu)
  }
  _menu = target => {
    this.props.scroll(target)
    this._closeMenu()
  }
  _closeMenu = () => {
    this.setState(() => {
      return {
        popMenu: false
      }
    })
  }
  _toggleMenu = () => {
    this.setState(prevState => {
      return {
        popMenu: !prevState.popMenu
      }
    })
  }
  render() {
    return (
      <MenuDiv>
        <button className="mobile-button" onClick={this._toggleMenu} tabIndex="1">
          <div className="flex">
            <div className={`bar ${this.state.popMenu ? "c-one-1" : "o-one-1"}`} />
            <div className={`bar ${this.state.popMenu ? "c-one-2" : "o-one-2"}`} />
          </div>
          <div className={`bar ${this.state.popMenu ? "c-two" : "o-two"}`} />
          <div className="flex">
            <div className={`bar ${this.state.popMenu ? "c-three-1" : "o-three-1"}`} />
            <div className={`bar ${this.state.popMenu ? "c-three-2" : "o-three-2"}`} />
          </div>
        </button>
        <button className="full-button" onClick={this._toggleMenu} tabIndex="1">
          {this.state.popMenu ? 'Close' : 'Menu'}
        </button>
        <div className={this.state.popMenu ? "shown" : "hidden"}>
          <button className="jump" onClick={() => this._menu(".top")} tabIndex={this.state.popMenu ? 2 : -1}>
            Home
          </button>
          <button className="jump" onClick={() => this._menu(".second")} tabIndex={this.state.popMenu ? 2 : -1}>
            About Me
          </button>
          <button className="jump" onClick={() => this._menu(".third")} tabIndex={this.state.popMenu ? 2 : -1}>
            My Work
          </button >
          <button className="jump" onClick={() => this._menu(".fourth")} tabIndex={this.state.popMenu ? 2 : -1}>
            Resume
          </button >
          <button className="jump" onClick={() => this._menu(".last")} tabIndex={this.state.popMenu ? 2 : -1}>
            Contact Me
          </button >
        </div >
      </MenuDiv >
    );
  }
}
export default PopMenu;