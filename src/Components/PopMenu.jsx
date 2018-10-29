import React, { Component } from 'react';
import styled from 'styled-components'
const MenuDiv = styled.div`
position: fixed;
width: 10%;
z-index: 101;

button {
  border: none;
  background-color: transparent;
  color: rgb(250, 250, 250);
  font-size: 1.5rem;
  outline: none;
}
a {
  padding: 1rem;
}
.hidden, .shown {
  position:relative;
  background-image: linear-gradient(to top, rgb(0, 0, 0), rgb(25, 25, 25));
  color: rgb(250, 250, 250);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-family: 'Chakra Petch', sans-serif;
  height: 90vh;
  width:135px;
  box-shadow: -.05rem -.05rem .1rem rgb(240, 240, 240),
  .05rem .05rem .1rem rgb(240, 240, 240),
  .05rem .05rem .1rem rgb(240, 240, 240),
  -.05rem -.05rem .1rem rgb(240, 240, 240);
  transition: left .4s ease-in-out;

}
.hidden {
  left: -1000%;
  
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
    width:150px;

  }
}
`
class PopMenu extends Component {
  state = {
    popMenu: 'hidden'
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
          <a>Home</a>
          <a>About Me</a>
          <a>My Work</a>
          <a>My Resume</a>
          <a>Contact Me</a>
        </div>
      </MenuDiv>
    );
  }
}

export default PopMenu;