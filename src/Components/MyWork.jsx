import React, { Component } from 'react';
import styled from 'styled-components'

const MyWorkDiv = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(to bottom,  rgb(25, 25, 25), rgb(25, 24, 43));
  background-size: cover;
  color: rgb(250, 250, 250);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 100;
  font-family: 'Chakra Petch', sans-serif;
  img, p {
    max-width: 90vw;
    font-size: 1.2rem;
  }
  img {
    margin-top: .5em;
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
	a {
    color: rgb(250, 250, 250);
    transition: color .4s ease-in-out;
	}
  .work-card {
    position:relative;
  }
  .works{
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: all 1.5s ease-in-out;
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
    img, p{
      max-width: 50vw;
    }
		p {
			font-size: 1.3rem;
			margin-bottom: 2rem;
    }
    a:hover {
      color: rgb(139, 0, 0);
      transition: color .4s ease-in-out;
    }
    button:hover {
      background-color: rgb(250, 250, 250);
      color: rgb(139, 0, 0);
      transition: background-color .4s ease-in-out, color .4s ease-in-out;
    }
    
  }
`
class MyWork extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ShowMore: false,
      MyWorks: [{ title: "Quicklee", imgSrc: "./img/quicklee.png", imgAlt: "quicklee app", href: "http://quicklee.surge.sh", description: " is a full-stack web app that I built for my capstone project at Suncoast Developers Guild. The front-end is built with React and SASS, the back-end is an API built with C#, .Net, Linq, and Entity." },
      { title: "Malibulawns", imgSrc: "./img/malibulawns.png", imgAlt: "malibu lawns", href: "https://www.malibulawns.com", description: " was my first commercial site that I designed and built. I used various resources for the design, and built it using React, React Router, and Styled Components." },
      { title: "Mine Sweeper", imgSrc: "./img/minesweeper.png", imgAlt: "./img/minesweeper.png", href: "http://mine-sweeper-justin.surge.sh/", description: " is a React based game using an API. This was from my first week of learning React at SDG. API can be slow at times, and have not set up for mobile use yet." }
      ]
    }
  }
  previewHeight = () => {
    return document.querySelector(".firstSec").clientHeight
  }
  componentDidMount = () => {
    window.addEventListener("resize", this._setHeight)
    setTimeout(this._setHeight, 500)
  }
  _setHeight = () => {
    let area = document.querySelector(".works")
    return area.style.maxHeight = this.state.ShowMore ? "500vh" : `${this.previewHeight()}px`
  }
  ShowMoreWork = () => {
    this.setState(prevState => ({
      ShowMore: !prevState.ShowMore
    }), () => {
      if (!this.state.ShowMore) {
        this.props.scroll(".third")
      }
      this._setHeight()
    })
  }
  render() {
    return (
      <MyWorkDiv className="third">
        <h1>My Work</h1>
        <div className="work-card">
          <div className="works">
            {this.state.MyWorks.map((proj, i) => {
              if (i === 0) {
                return (
                  <section key={i} className="firstSec">
                    <a href={proj.href}
                      target="_blank"
                      rel="noopener noreferrer">
                      <img src={proj.imgSrc} alt={proj.imgAlt} />
                    </a>
                    <p>
                      <a href={proj.href}
                        target="_blank"
                        rel="noopener noreferrer">
                        {proj.title}
                      </a>
                      {proj.description}
                    </p>
                  </section>
                )
              } else {
                return (
                  <section key={i} className={this.state.ShowMore ? "unfaded" : "faded"}>
                    <a href={proj.href}
                      target="_blank"
                      rel="noopener noreferrer">
                      <img src={proj.imgSrc} alt={proj.imgAlt} />
                    </a>
                    <p>
                      <a href={proj.href}
                        target="_blank"
                        rel="noopener noreferrer">
                        {proj.title}
                      </a>
                      {proj.description}
                    </p>
                  </section>
                )
              }
            })}
            <section>
              <p> See even more on <a
                className="git"
                href="https://github.com/JOLee83"
                target="_blank"
                rel="noopener noreferrer"
              >GitHub</a>
              </p>
            </section>
          </div>
          <button className="show" onClick={this.ShowMoreWork}>{this.state.ShowMore ? "See Less" : "See More Projects"}</button>
        </div>
      </MyWorkDiv >
    );
  }
}
export default MyWork;