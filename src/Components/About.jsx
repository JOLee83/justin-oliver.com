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
  justify-content: flexstart ;
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
  button {
    font-family: 'Chakra Petch', sans-serif;

    border: .1rem solid rgb(250, 250, 250);
    border-radius: 5%;
    padding-top: .15rem;
    color: rgb(250, 250, 250);
    background-color: transparent;
    font-size: 1.2rem;
    outline: none;
    margin: .5rem 0 0 0;
    cursor: pointer;
    padding: .2rem;
    transition: background-color .4s ease-in-out, color .4s ease-in-out;

  }
  .about-card {
    position:relative;
    font-family: 'Chakra Petch', sans-serif;
    // padding: 0 2rem;
    max-width: 90vw;

  }
  @media (min-width: 500px) {
    img {
      margin-top 2%;
      max-width:300px;
    }
    .about-card {
      max-width: 50vw;
    }
    button:hover {
      background-color: rgb(250, 250, 250);
      color: rgb(139, 0, 0);
      transition: background-color .4s ease-in-out, color .4s ease-in-out;

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
  ReadMoreAbout = () => {
    this.setState(prevState => ({
      ReadMore: !prevState.ReadMore
    }))
  }
  content = () => {
    if (this.state.ReadMore) {
      return <div>
        <p>A Full Stack Web Developer from Florida. Recently, I decided to follow my passion for building and creating things which led me to increasing my coding knowledge around how to make user friendly, functional web applications. My past experience involved management in the Hospitality Industry, and I’ve studied business management at USF.  Through that learning process, I have come to enjoy the process and challenges that creating websites and other applications bring, while increasing my understanding of methods to improve my development skills.</p>
        <p>Although I am more than capable of back-end development, my real passions are in front-end development. My eye for detail has been a real asset in building websites that are not only functional but also appealing to the end user. My current front-end skill set includes HTML5, CSS3, JavaScript, along with frameworks such as React. My back-end skill set includes C# and the .Net framework. At this time I am continuing my development knowledge surrounding React Native, React Redux, and Phaser3. My long term goal is to continue to expand my skill sets into other languages and frameworks.</p>
        <p>Development has proven to fit well with other pieces of my life. When I’m not coding, I enjoy the challenge of doing a puzzle and playing games, along with expressing my creative nature with different arts and crafts. These outside interests help fuel my passion for front-end development.</p>
        <p>All that is missing from my career now is the opportunity to bring my passion for development to the right company. I look forward to hearing from you so that I can share additional examples of my work and show how I will be a great fit for your organization.</p>
      </div>
    } else {
      return <div>
        <p>A Full Stack Web Developer from Florida. Recently, I decided to follow my passion for building and creating things which led me to increasing my coding knowledge around how to make user friendly, functional web applications...</p>
      </div>
    }
  }


  render() {
    return (
      <AboutDiv className="second">
        <img src="./img/profilepicture.jpg" alt="Justin Oliver Lee" />
        <div className="about-card">
          <h1>About Me</h1>
          {this.content()}
          <button className="read" onClick={this.ReadMoreAbout}>{this.state.ReadMore ? "Read Less" : "Read More"}</button>
        </div>
      </AboutDiv >
    );
  }
}

export default About;