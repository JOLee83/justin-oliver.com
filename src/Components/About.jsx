import React, { Component } from 'react';
import styled from 'styled-components'
const AboutDiv = styled.div`
 
min-height: 100vh;
  background-image: linear-gradient(to bottom, rgb(0, 0, 0), rgb(25, 25, 25));
  background-size: cover;
  background-attachment: fix;
  color: rgb(250, 250, 250);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;

  img {
    max-width:150px;
    border-radius: 50%;
    box-shadow: -.05rem -.05rem .1rem rgb(240, 240, 240),
    .05rem .05rem .1rem rgb(240, 240, 240),
    .05rem .05rem .1rem rgb(240, 240, 240),
    -.05rem -.05rem .1rem rgb(240, 240, 240);

  }


  .about-card {
    position:relative;
    font-family: 'Chakra Petch', sans-serif;
    padding: 0 2rem;


  }

  .up {
    display: flex;
    justify-content: center;
    align-items:flex-start;
    font-size:3rem;
  }
  .down {
    display: flex;
    justify-content: center;
    align-items:flex-end;
    flex: 1;
    font-size:3rem;
  }
  .read {
    border: .1rem solid rgb(250, 250, 250);
    padding: .1rem;
    max-width: 100px;
    text-align: center;
    border-radius: 5%;
    transition: background-color .4s ease-in-out,
      border-color.4s ease-in-out,
      color .4s ease-in-out;
  }
  .read:active {
    background-color: rgb(250, 250, 250);
    border-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
  }
  .fas {
    animation: nextpage 7s infinite linear;

  }

  @media (min-width: 500px) {
    // background-image: url(./img/background/SeattleSkyline.jpg);
    img {
      margin-top 2%;
      max-width:300px;
    }
    .about-card {
      max-width: 500px;
    }
    
    .up, .down {
      display: none;
    }
    .read:hover {
      color: rgb(139, 0, 0);
      cursor: pointer;
    }
  }
  @keyframes nextpage {
    0% {
      opacity: 1;
      transform: scale(.5);

    }
    50% {
      opacity: .2;
      transform: scale(1);
    }
    100% {
      opacity: 1;
      transform: scale(.5);


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
  ReadMoreAbout = () => {
    this.setState(prevState => ({
      ReadMore: !prevState.ReadMore
    }))
  }
  content = () => {
    if (this.state.ReadMore) {
      return <div>
        <p>I’m Justin Oliver Lee, a Full Stack Web Developer in the Tampa Bay Area. My past experience involved management in the Hospitality Industry, and I’ve studied business management at USF. Recently, I decided to follow my passion for building and creating things which led me to increasing my coding knowledge around how to make user friendly, functional web applications. Through that learning process, I have come to enjoy the process and challenges that creating websites and other applications bring, while increasing my understanding of methods to improve my development skills.</p>
        <p>Although I am more than capable of back-end development, my real passions are in front-end development. My eye for detail has been a real asset in building websites that are not only functional but also appealing to the end user. My current front-end skill set includes HTML5, CSS3, JavaScript, along with frameworks such as React. My back-end skill set includes C# and the .Net framework. At this time I am continuing my development knowledge surrounding React Native, React Redux, and Phaser3. My long term goal is to continue to expand my skill sets into other languages and frameworks.</p>
        <p>Development has proven to fit well with other pieces of my life. When I’m not coding, I enjoy the challenge of doing a puzzle and playing games, along with expressing my creative nature with different arts and crafts. These outside interests help fuel my passion for front-end development.</p>
        <p>All that is missing from my career now is the opportunity to bring my passion for development to the right company. I look forward to hearing from you so that I can share additional examples of my work and show how I will be a great fit for your organization.</p>
      </div>
    } else {
      return <div>
        <p>I’m Justin Oliver Lee, a Full Stack Web Developer in the Tampa Bay Area.</p>
      </div>
    }
  }


  render() {

    return (
      <AboutDiv className="second">
        <div className="up">
          <i className="fas fa-angle-double-up" />
        </div>
        <img src="./img/profilepicture.jpg" alt="my_profile_picture" />
        <div className="about-card">
          <h1>About Me,</h1>
          {this.content()}
          <p className="read" onClick={this.ReadMoreAbout}>{this.state.ReadMore ? "Read Less" : "Read More"}</p>
        </div>
        <div className="down">
          <i className="fas fa-angle-double-down" />
        </div>
      </AboutDiv >
    );
  }
}

export default About;