import React, { Component } from 'react';
import styled from 'styled-components'

const AboutDiv = styled.div`
  padding-top: 1rem;
  min-height: 100vh;
  background-image: linear-gradient(to bottom, rgb(0, 0, 0), rgb(25, 25, 25));
  background-size: cover;
  color: rgb(250, 250, 250);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start ;
  z-index: 100;
  font-size: 1.2rem;
  img {
    max-width:150px;
    border-radius: 50%;
    box-shadow: -.05rem -.05rem .1rem rgb(240, 240, 240),
    .05rem .05rem .1rem rgb(240, 240, 240),
    .05rem .05rem .1rem rgb(240, 240, 240),
    -.05rem -.05rem .1rem rgb(240, 240, 240);
  }
  a {
    color: rgb(250, 250, 250);
    transition: color .4s ease-in-out;
    outline-color: rgb(250, 0, 0);
    cursor: pointer;
	}
  button {
    font-family: 'Chakra Petch', sans-serif;
    border: .1rem solid rgb(250, 250, 250);
    border-radius: 5%;
    padding-top: .15rem;
    color: rgb(250, 250, 250);
    background-color: transparent;
    font-size: 1.2rem;
    margin: 1.5rem 0 0 0;
    padding: .2rem;
    transition: all 0.5s ease-in-out;
    outline-color: rgb(250, 0, 0);
    cursor: pointer;
  }
  .about-card {
    position:relative;
    font-family: 'Chakra Petch', sans-serif;
    max-width: 90vw;
  }
  .text{
    overflow: hidden;
    transition: all 1.5s ease-in-out;
    p {
      margin-bottom: 0;
      padding-bottom: 1em;
    }
    .unfaded {
      opacity: 1;
      transition: all 1s ease-in-out;
    }
    .faded {
      opacity: 0;
      transition: all 2s ease-in-out;
    }
  }
  @media (min-width: 500px) {
    img {
      margin-top: 2%;
      max-width:300px;
    }
    .about-card {
      max-width: 50vw;
    }
    a:hover {
      color: rgb(139, 0, 0);
      transition: all 0.5s ease-in-out;
    }
    button:hover {
      background-color: rgb(250, 250, 250);
      color: rgb(139, 0, 0);
      transition: all 0.5s ease-in-out;
    }
    p {
      font-size: 1.2rem;
    }
  }
`
class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ReadMore: false
    }
  }
  previewHeight = () => {
    return document.querySelector(".firstP").clientHeight
  }
  componentDidMount = () => {
    window.addEventListener("resize", this._setHeight)
    setTimeout(this._setHeight, 50)
  }
  _setHeight = () => {
    let area = document.querySelector(".text")
    return area.style.maxHeight = this.state.ReadMore ? "500vh" : `${this.previewHeight()}px`
  }
  ReadMoreAbout = () => {
    this.setState(prevState => ({
      ReadMore: !prevState.ReadMore
    }), () => {
      if (!this.state.ReadMore) {
        this.props.scroll(".second")
      }
      this._setHeight()
    })
  }
  render() {
    return (
      <AboutDiv className="second">
        <img src="./img/profilepicture.jpg" alt="Justin Oliver Lee" />
        <div className="about-card">
          <h1>About Me</h1>
          <div className="text">
            <p className="firstP">A Web Developer from Florida, currently living in Seattle. Looking for my next challenge, along with ways to get involved and give back to the local developer community.</p>
            <div className={this.state.ReadMore ? "unfaded" : "faded"}>
              <p>Last year, I decided to follow my passion for building and creating things which led me to increasing my coding knowledge around how to make user friendly, functional web applications. Through that learning process, I have come to enjoy the process and challenges that creating websites and other applications bring, while increasing my understanding of methods to improve my development skills.</p>
              <p>Since moving to Seattle, I have become involved with local meet up groups. I have even become an event organizer and host with <a href="http://www.seattlejshackers.com" target="_blank" rel="noopener noreferrer" tabIndex={this.state.ReadMore ? 4 : -1}>Seattle JS Hackers</a>. With them I put together a Code Katas meet up. During the event I present developers of all skill levels a series of coding challenges. Then the participants work together or on their own to solve the challenges. After solving, they present their solution so everyone can see the different ways the challenges can be solved.</p>
              <p>My real passions are in front-end development. My eye for detail has been a real asset in building websites that are not only functional but also appealing to the end user. My current front-end skill set includes HTML5, CSS3, JavaScript, along with frameworks such as React. My back-end skill set includes C# and the .Net framework. My long-term goal is to continue to expand my skill sets into other languages and frameworks.</p>
              <p>Development has proven to fit well with other pieces of my life. When I’m not coding, I enjoy the challenge of doing a puzzle and playing games, along with expressing my creative nature with different arts and crafts. These outside interests help fuel my passion for front-end development.</p>
              <p>All that is missing from my career now is the opportunity to bring my passion for development to the right company. I look forward to hearing from you so that I can share additional examples of my work and show how I will be a great fit for your organization.</p>
            </div>
          </div>
          <button className="read" onClick={this.ReadMoreAbout} tabIndex="3">{this.state.ReadMore ? "Read Less" : "Read More"}</button>
        </div>
      </AboutDiv >
    );
  }
}
export default About;