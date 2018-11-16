import React, { Component } from 'react';
import styled from 'styled-components'

const MenuDiv = styled.div`
position: fixed;
width: 10%;
z-index: 101;
button {
  font-family: 'Chakra Petch', sans-serif;
  border: .1rem solid rgb(100, 100, 100), .1rem solid rgb(150, 150, 150), .1rem solid rgb(150, 150, 150), .1rem solid rgb(100, 100, 100);
  border-radius: 20%;
  padding-top: .15rem;
  background-color: rgb(250, 250, 250);
  color: rgb(0, 0, 0);
  font-size: 1.5rem;
  margin: .5rem 0 0 0;
  transition: background-color .4s ease-in-out;
}
a {
  padding: 1rem;
  cursor: pointer;
  transition: color .4s ease-in-out;
}
.hidden, .shown {
  margin-top: .3rem;
  position: absolute;
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
  transition: left .4s ease-in-out, color .4s ease-in-out;
  z-index: none;
}
.hidden {
  left: -2000%;
}
.shown {
  left: 0;
}
.full-button {
  display: none;
}
@media (min-width: 700px) {
  .full-button{
    display: flex;
    font-family: 'Chakra Petch', sans-serif;
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
    left: -1000%;
  }
  .shown {
    left: 0;
  }
  button {
    padding-top: 0;
    border-radius: 10%;
  }
  a:hover {
    color: rgb(139, 0, 0);
    transition: color .4s ease-in-out;
  }
  button:hover {
    background-color: rgb(139, 0, 0);
    color: rgb(250, 250, 250);
    transition: background-color .4s ease-in-out, color .4s ease-in-out;

  }
}
`
class PopMenu extends Component {
  state = {
    popMenu: 'hidden'
  }
  componentDidMount() {
    window.addEventListener('scroll', this._closeMenu)
  }
  _closeMenu = () => {
    this.setState(() => {
      if (this.state.popMenu === 'shown') {
        return {
          popMenu: 'hidden'
        }
      } else {
        return
      }
    })
  }

  _toggleMenu = () => {
    this.setState(() => {
      if (this.state.popMenu === 'hidden') {
        return {
          popMenu: 'shown'
        }
      } else {
        return {
          popMenu: 'hidden'
        }
      }
    })
  }
  render() {
    return (
      <MenuDiv>
        <button className="mobile-button" onClick={this._toggleMenu}>
          {this.state.popMenu === 'hidden' ? <i className="fas fa-bars" /> : <i className="fas fa-times" />}
        </button>
        <button className="full-button" onClick={this._toggleMenu}>
          {this.state.popMenu === 'hidden' ? 'Menu' : 'Close'}
        </button>
        <div className={this.state.popMenu}>
          <a onClick={this.props.home} >Home</a>
          <a onClick={this.props.second}>About Me</a>
          <a onClick={this.props.third}>My Work</a>
          <a onClick={this.props.fourth}>My Resume</a>
          <a onClick={this.props.last}>Contact Me</a>
        </div>
      </MenuDiv >
    );
  }
}

export default PopMenu;