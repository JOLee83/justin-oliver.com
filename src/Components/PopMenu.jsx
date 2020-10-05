import React, { Component } from 'react';
import styled from 'styled-components';

const MenuDiv = styled.div`
  position: fixed;
  z-index: 101;

  .mobile-button, .full-button {
    text-align: center;
    font-family: 'Chakra Petch', sans-serif;
    color: rgb(250, 250, 250);
    background-color: transparent;
    font-size: 1.4rem;
    transition: background-color .4s ease-in-out;
    outline-color: rgb(250, 0, 0);
    cursor: pointer;
    z-index: 100;
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
  }

  .bar {
    position: fixed;
    background-color: rgb(250, 250, 250);
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
      transition: all .5s linear;
      border-radius: 5px;
      width: 28px;
      height: 3px;
      top: 24px;
      left: 11px;
      z-index: 101;
    }

    .close-2 {
      transition: all .5s linear;
      border-radius: 5px;
      width: 33px;
      height: 33px;
      top: 8px;
      left: 8px;
      opacity: 0;
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

  .jump {
    font-family: 'Chakra Petch', sans-serif;
    color: rgb(250, 250, 250);
    background-color: transparent;
    border: none;
    font-size: 1.3rem;
    padding: 0 32px 0 16px;
    margin-bottom: 1rem;
    text-decoration: none;
    text-align: left;
    cursor: pointer;
    transition: color .4s ease-in-out;
    outline-color: rgb(250, 0, 0);
    display: flex;

    .icon-frame {
      width: 30px;
      text-align: center;
      margin-right: 15px;
    }
  }

  .hidden, .shown {
    padding: 80px 0;
    position: fixed;
    background-image: linear-gradient(to top, rgb(0, 0, 0), rgb(25, 25, 25));
    color: rgb(250, 250, 250);
    font-size: 1.3rem;
    height: calc(100vh - 45px);
    width: fit-content;    
    z-index: 99;
    font-family: 'Chakra Petch', sans-serif;
    box-shadow: -.05rem -.05rem .1rem rgb(240, 240, 240),
    .05rem .05rem .1rem rgb(240, 240, 240),
    .05rem .05rem .1rem rgb(240, 240, 240),
    -.05rem -.05rem .1rem rgb(240, 240, 240);
    transition: all .5s ease-in-out;

    .link-flex {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: calc(100vh - 125px);
      max-height: 450px;
    }
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

  .hidden-menu-background, .shown-menu-background {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgb(0, 0, 0);
    z-index: 98;
    transition: opacity .4s ease-in-out;
  }

  .shown-menu-background {
    opacity: .5;
  }

  .hidden-menu-background {
    opacity: 0;
    pointer-events: none;
  }

  @media (min-width: 700px) {
    .full-button {
      position: fixed;
      top: 8px;
      left: 6px;
      border: none;
      border-radius: 0;
      padding: 0;
      font-family: 'Chakra Petch', sans-serif;
      width: 102px;
      height: 35px;
      display: flex;
      font-size: 1.5rem;
      overflow: visible;

      .button-div {
        position: fixed;
        top: 8px;
        left: 6px;
        border: .1rem solid rgb(250, 250, 250);
        padding: 0 .3rem 0 34px;
        border-radius: 5px;
        transition: all .4s linear;
        width: 60px;
      }

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
      display: none;
    }

    .jump:hover {
      color: rgb(139, 0, 0);
      transition: color .4s ease-in-out;
    }

    .full-button:hover {
      .button-div {
        background-color: rgb(250, 250, 250);
        color: rgb(139, 0, 0);
      }

      .bar {
        background-color: rgb(139, 0, 0);
        transition: all .5s linear;
      }
    }
  }
`
class PopMenu extends Component {
  state = {
    popMenu: false,
    buttonText: 'Menu',
    fading: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this._closeMenu);
  }

  _menu = target => () => {
    this.props.scroll(target);
    this._closeMenu();
  }

  _closeMenu = () => {
    if (this.state.popMenu) {
      this._toggleMenu();
    }
  }

  _toggleMenu = () => {
    this.setState(prevState => ({
      popMenu: !prevState.popMenu,
    })
    );
    this._changeText();
  }

  _changeText = () => {
    this.setState(() => ({
      fading: true
    }));

    setTimeout(() => {
      this.setState(() => ({
        buttonText: this.state.buttonText === 'Menu' ? 'Close' : 'Menu',
        fading: false,
      }));
    }, 500)
  }

  _button = () => {
    return (
      <>
        <div className={`bar ${this.state.popMenu ? 'close-1-1' : 'open-1-1'}`} />
        <div className={`bar ${this.state.popMenu ? 'close-1-2' : 'open-1-2'}`} />
        <div className={`bar ${this.state.popMenu ? 'close-2' : 'open-2'}`} />
        <div className={`bar ${this.state.popMenu ? 'close-3-1' : 'open-3-1'}`} />
        <div className={`bar ${this.state.popMenu ? 'close-3-2' : 'open-3-2'}`} />
      </>
    );
  }

  render() {
    return (
      <MenuDiv>
        <button
          className='mobile-button'
          onClick={this._toggleMenu}
          tabIndex='1'
          alt='opens navigation menu'
        >
          <div className='button-div' />
          {this._button()}
        </button>
        <button
          className='full-button'
          onClick={this._toggleMenu}
          tabIndex='1'
          alt='opens navigation menu'
        >
          <div className='button-div'>
            {this._button()}

            <div className={this.state.fading ? 'faded' : 'unfaded'}>
              {this.state.buttonText}
            </div>
          </div>
        </button>
        <div className={this.state.popMenu ? 'shown' : 'hidden'}>
          <div className='link-flex'>
            <button
              className='jump'
              onClick={this._menu('.home')}
              tabIndex={this.state.popMenu ? 2 : -1}
              alt='scrolls to top of page'
            >
              <div className='icon-frame'>
                <i className='fas fa-home' />
              </div>
            Home
          </button>
            <button
              className='jump'
              onClick={this._menu('.about')}
              tabIndex={this.state.popMenu ? 2 : -1}
              alt='scrolls to about me section'
            >
              <div className='icon-frame'>
                <i className='fas fa-user' />
              </div>
            About Me
          </button>
            <button
              className='jump'
              onClick={this._menu('.skills')}
              tabIndex={this.state.popMenu ? 2 : -1}
              alt='scrolls to my skills section'
            >
              <div className='icon-frame'>
                <i className='fas fa-list-ul' />
              </div>
            My Skills
          </button >
            <button
              className='jump'
              onClick={this._menu('.work')}
              tabIndex={this.state.popMenu ? 2 : -1}
              alt='scrolls to my work section'
            >
              <div className='icon-frame'>
                <i className='fas fa-bookmark' />
              </div>
            My Work
          </button >
            <button
              className='jump'
              onClick={this._menu('.contact')}
              tabIndex={this.state.popMenu ? 2 : -1}
              alt='scrolls to contact section'
            >
              <div className='icon-frame'>
                <i className='fas fa-address-card' />
              </div>
            Contact Me
          </button >
            <a className='jump'
              href='https://drive.google.com/file/d/13DDGPebrTjKaTiu8gJsrjU576D46lp6Q/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
              tabIndex={this.state.popMenu ? 2 : -1}
              onClick={this._closeMenu}
              alt=''
            >
              <div className='icon-frame'>
                <i className='fab fa-google-drive' />
              </div>
            My Resume
          </a>
          </div>
        </div >
        <div className={this.state.popMenu ? 'shown-menu-background' : 'hidden-menu-background'} onClick={this._closeMenu} />
      </MenuDiv >
    );
  }
}

export default PopMenu;
