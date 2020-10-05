import React, { Component } from 'react';
import styled from 'styled-components'

const AboutDiv = styled.div`
  padding: 10px 0;
  min-height: 100vh;
  background-image: linear-gradient(to bottom, rgb(0, 0, 0), rgb(25, 25, 25));
  background-size: cover;
  color: rgb(250, 250, 250);
  display: flex;
  flex-direction: column;
  align-items: center;
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
  .read {
    .faded {
        text-align: center;
        opacity: 0;
        transition: opacity 1s ease-in-out;
      }
      .unfaded {
        text-align: center;
        opacity: 1;
        transition: opacity 1s ease-in-out;
      }
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
      max-width: 70vw;
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

  @media (min-width: 1200px) {
    .about-card {
			max-width: 800px;
		}
	}
`
class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ReadMore: false,
      buttonText: "Read More",
      fading: false
    }
  }
  previewHeight = () => {
    return document.querySelector(".firstP").clientHeight
  }
  componentDidMount = () => {
    window.addEventListener("resize", this._setHeight)
    setTimeout(this._setHeight, 1000)
  }
  _setHeight = () => {
    let area = document.querySelector(".text")
    return area.style.maxHeight = this.state.ReadMore ? "3000px" : `${this.previewHeight()}px`
  }
  ReadMoreAbout = () => {
    this.setState(prevState => ({
      ReadMore: !prevState.ReadMore
    }), () => {
      if (!this.state.ReadMore) {
        this.props.scroll(".about")
      }
      this._setHeight()
      this._changeText()
    })
  }
  _changeText = () => {
    this.setState(() => ({
      fading: true
    }))
    setTimeout(_ => {
      if (this.state.buttonText === "Read More") {
        this.setState(() => ({
          buttonText: "Read Less",
          fading: false
        }))
      } else {
        this.setState(() => ({
          buttonText: "Read More",
          fading: false
        }))
      }
    }, 1100)
  }
  render() {
    return (
      <AboutDiv className="about">
        <img src="./img/profilepicture.jpg" alt="Justin Oliver Lee" />
        <div className="about-card">
          <h1>About Me</h1>
          <div className="text">
            <p className="firstP" onLoad={this._setHeight}>A Software Engineer from Florida, currently living in the Greater Seattle Area. Looking for my next challenge, along with ways to get involved and give back to the local developer community.</p>
            <div className={this.state.ReadMore ? "unfaded" : "faded"}>
              <p>In 2018, I decided to follow my passion for building and creating things which led me to increasing my coding knowledge around how to make user friendly, functional web applications. Through that learning process, I have come to enjoy the process and challenges that creating websites and other applications bring, while increasing my understanding of methods to improve my development skills.</p>
              <p>When I first arrived in Seattle, I became involved with local meetup groups; like Seattle JS, Seattle JS Hackers, and Bellevue JS. I have been an organizer, host, and speaker for several events. Since becoming involved with meetup groups in early 2018, I have been hosting a monthly event called Code Katas. Code Katas is an event where I present the participants (developers of all skill levels) with a series of coding challenges. They then work with other participants or on their own to solve the challenges. Between each round in the series, the participants present their solutions to the group and talk about the code and how they came to find the solutions; it is good practice for any developer to prepare for interviews or see the different ways a single challenge can be solved. Along with Code Katas, I have been involved with events like open codes, lean coffees, and hackathons; I was even the MC and stage manager for the forum stage and Cascadia JS in 2019.</p>
              <p>Since arriving in Seattle, I have gained experience and grown as a front-end developer. My first job as a front-end developer was working as a subcontractor for Stackend Solutions (a SaaS company for startups). During my time at Stackend Solutions, I worked on and even led the front-end development for multiple clients. The first project I led was rebuilding a clients web page as a React app then connecting their Firebase backend from the iOS app they had already launched. I also led the initial build of front end of a React Native app that would serve as a concierge app for a startup based in Chicago. I next took a full time position as the primary front-end developer for pubGENIUS (an ad tech startup that offers ad ops as a service). My time at pubGENIUS was primarily spent working on internal and external web apps for managing ad stacks. The apps were built with TypeScript, using React, Node, Redux, MySQL, along with various packages. Although my title was front-end developer at pubGENIUS I was involved in back-end development as well; this mostly involved connecting the front end and making additions to and changing the apps services, routes, and database when needed. During my time working as a developer, I have gained an in-depth understanding of the various languages, frameworks, and technologies, along with computer science fundamentals. I am looking forward to continuing my journey of learning and growing as a developer.</p>
              <p>If you think I may be a good fit for your team, have a need for a freelance developer, or would like to become involved with the local developer community as a sponsor, host, speaker, or even just attend an event, I am ready for any challenge and more than happy to help in any way. I look forward to hearing from you or your organization.</p>
            </div>
          </div>
          <button className="read" onClick={this.ReadMoreAbout} tabIndex="3">
            <div className={this.state.fading ? "faded" : "unfaded"}>
              {this.state.buttonText}
            </div>
          </button>
        </div>
      </AboutDiv >
    );
  }
}
export default About;