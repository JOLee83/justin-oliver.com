import React, { Component } from 'react';
import styled from 'styled-components';
import { Projects } from '../Constants/Projects';

const MyWorkDiv = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(to bottom, rgb(25, 24, 43), rgb(25, 24, 43));
  background-size: cover;
  color: rgb(250, 250, 250);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 100;
  font-family: 'Chakra Petch', sans-serif;
  font-size: 1.2rem;

  h1 {
    margin: 0 0 .5rem 0;
  }
  .subtitle {
    margin: 0 0 .5rem 0;
  }
  img, p {
    max-width: 90vw;
    font-size: 1.2rem;
  }
  button {
    font-family: 'Chakra Petch', sans-serif;
    border: .1rem solid rgb(250, 250, 250);
    border-radius: 5%;
    padding-top: .15rem;
    color: rgb(250, 250, 250);
    background-color: transparent;
    font-size: 1.2rem;
    margin: 0;
    padding: .2rem;
    transition: all 0.5s ease-in-out;
    outline-color: rgb(250, 0, 0);
    cursor: pointer;
  }
	a {
    color: rgb(250, 250, 250);
    transition: all 0.5s ease-in-out;
    outline-color: rgb(250, 0, 0);
    cursor: pointer;
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
  .show {
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
  @media (min-width: 500px) {
    img, p{
      max-width: 70vw;
    }

    .work-card {
      max-width: 70vw;

      p {
			font-size: 1.3rem;
			margin-bottom: 2rem;
      }
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
  }

  @media (min-width: 1200px) {
    img, p{
      max-width: 800px;
    }

    .work-card {
      max-width: 800px;
		}
	}
`
class MyWork extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ShowMore: false,
      MyWorks: Projects,
      buttonText: "More Projects",
      fading: false
    }
  }
  previewHeight = () => {
    return document.querySelector(".firstSec").clientHeight
  }
  componentDidMount = () => {
    window.addEventListener("resize", this._setHeight)
    setTimeout(this._setHeight, 1000)
  }
  _setHeight = () => {
    let area = document.querySelector(".works")
    return area.style.maxHeight = this.state.ShowMore ? "3000px" : `${this.previewHeight()}px`
  }
  ShowMoreWork = () => {
    this.setState(prevState => ({
      ShowMore: !prevState.ShowMore
    }), () => {
      if (!this.state.ShowMore) {
        this.props.scroll(".work")
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
      if (this.state.buttonText === "More Projects") {
        this.setState(() => ({
          buttonText: "Less Projects",
          fading: false
        }))
      } else {
        this.setState(() => ({
          buttonText: "More Projects",
          fading: false
        }))
      }
    }, 1100)
  }
  render() {
    return (
      <MyWorkDiv className="work">
        <h1>My Work</h1>
        <p className="subtitle">Some of my professional and personal projects</p>
        <div className="work-card">
          <div className="works">
            {this.state.MyWorks.map((proj, i) => {
              if (i === 0) {
                return (
                  <section key={i} className="firstSec">
                    <a href={proj.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex="5">
                      <img src={proj.imgSrc} alt={proj.imgAlt} onLoad={this._setHeight} />
                    </a>
                    <p>
                      <a href={proj.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex="5">
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
                      rel="noopener noreferrer"
                      tabIndex={this.state.ShowMore ? 7 : -1}
                    >
                      <img src={proj.imgSrc} alt={proj.imgAlt} />
                    </a>
                    <p>
                      <a href={proj.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={this.state.ShowMore ? 7 : -1}
                      >
                        {proj.title}
                      </a>
                      {proj.description}
                    </p>
                  </section>
                )
              }
            })}
            <section className={this.state.ShowMore ? "unfaded" : "faded"}>
              <p> See even more on <a
                className="git"
                href="https://github.com/JOLee83"
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={this.state.ShowMore ? 7 : -1}
              >GitHub</a>
              </p>
            </section>
          </div>
          <button className="show" onClick={this.ShowMoreWork} tabIndex="6">
            <div className={this.state.fading ? "faded" : "unfaded"}>
              {this.state.buttonText}
            </div>
          </button>
        </div>
      </MyWorkDiv >
    );
  }
}
export default MyWork;