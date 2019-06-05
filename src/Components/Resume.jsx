import React, { Component } from 'react';
import styled from 'styled-components'

const ResumeDiv = styled.div`
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
  padding-bottom: 4rem;
  .list {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .skill {
      display:flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin: .5rem;
      border: 1px solid white;
      list-style: circle inside none;
      width: 110px;
      height: 50px;
      border-radius:10px;
    }
    .pop {
      /* transition: all .5s ease; */

    }
    .unpop {
      /* transition: all .5s ease; */

      transform: scale(0);
      opacity: 0;
    }

  }
  iframe {
    max-width: 90vw;
    border: none;
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
    padding: .2rem;
    transition: all 0.5s ease-in-out;
    margin-bottom: .2rem;
    outline-color: rgb(250, 0, 0);
    cursor: pointer;
  }
  a{
    color: inherit;
    text-decoration: inherit;
    outline-color: rgb(250, 0, 0);
    cursor: pointer;
  }
	a i {
    margin-right: .5rem;
	}
  .resume-card {
    position:relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
 
  @media (min-width: 500px) {
    iframe, .list {
      max-width: 70vw;
      min-height: 70vh;
      .skill {
        font-size: 1.75rem;
        width: 220px;
      height: 90px;
      }
    }
    button:hover {
      background-color: rgb(250, 250, 250);
      color: rgb(139, 0, 0);
      transition: all 0.5s ease-in-out;
    }
  }
  @media (min-width: 1200px) {
    iframe, .list {
      max-width: 50vw;
    }
  }
`
class Resume extends Component {
  constructor(props) {
    super(props)
    this.state = {
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "C#",
        "SQL",
        "Git",
        "RESTful API",
        "SASS",
        "LESS",
        "Styled Components",
        "Flex Box",
        "BootStrap",
        "Bulma",
        "React",
        "Redux",
        "Gatsby",
        ".Net",
        "Postgres"
      ],
      yOffset: 0,
      threshold: 0,
      postThreshold: 0,
      pass: true
    }
  }
  // frameWidth = () => {
  //   return document.querySelector(".frame").clientWidth
  // }
  // frameHeight = () => {
  //   return this.frameWidth() * (11 / 8.55)
  // }

  _getOffset = () => {
    let el = document.querySelector(".list")
    let top = 0
    do {
      top += el.offsetTop
      el = el.offsetParent
    } while (el)
    return top
  }
  _setYOffset = () => {
    let yOffset = window.pageYOffset

    // console.log("Y Offset is" + yOffset)
    this.setState(() => ({
      yOffset: yOffset
    }))
    // return yOffset
  }
  _setThreshold = () => {
    let clientHeight = document.querySelector(".list").clientHeight * 0.3
    let threshold = this._getOffset() - window.innerHeight + clientHeight

    // console.log("Threshold is " + threshold)
    this.setState(() => ({
      threshold: threshold
    }))
    // return threshold
  }
  _pass = () => {
    const { threshold, yOffset, postThreshold } = this.state

    if (yOffset < threshold) {
      this.setState(prevState => ({
        pass: true
      }))
    }
    if (yOffset > postThreshold) {
      this.setState(prevState => ({
        pass: false
      }))
    }

  }
  _setPostThreshold = () => {
    let clientHeight = document.querySelector(".list").clientHeight * 2
    let postThreshold = this._getOffset() - window.innerHeight + clientHeight

    // console.log("Threshold is " + threshold)
    this.setState(() => ({
      postThreshold: postThreshold
    }))
    // return threshold
  }
  _set = () => {
    this._setYOffset()
    this._setThreshold()
    this._setPostThreshold()
    this._pass()
  }
  componentDidMount = () => {
    setTimeout(this._set, 500)
    window.addEventListener("resize", this._set)
    window.addEventListener("scroll", this._set)
    // window.addEventListener("scroll", this._getThreshold)
    // window.addEventListener("resize", this._setHeight)
    // setTimeout(this._setHeight, 50)
  }
  // _setHeight = () => {
  //   let area = document.querySelector(".frame")
  //   return area.style.minHeight = `${this.frameHeight()}px`
  // }
  render() {
    return (
      <ResumeDiv className="resume">
        <h1>Skills</h1>
        <div className="list">
          {this.state.skills.map((skill, index) => {
            // let threshold = this._getThreshold(`.position${index}`)
            // let yOffset = this.state.yOffset
            const { skills, threshold, yOffset, postThreshold, pass } = this.state
            const styles = pass ? { transition: `all .5s ${index * .05}s ease` } : { transition: `all .5s ${(skills.length - index - 1) * .05}s ease` }
            return (
              <div
                style={styles}
                className={yOffset > threshold && yOffset < postThreshold ? "skill pop" : "skill unpop"}
                key={index}>
                {skill}
              </div>
            )
          })}
          {/* <div className="skill">
            HTML
          </div>
          <div className="skill">
            CSS
          </div>
          <div className="skill">
            JavaScript
          </div>
          <div className="skill">
            C#
          </div>
          <div className="skill">
            SQL
          </div>
          <div className="skill">
            Git
          </div>
          <div className="skill">
            RESTful API
          </div>
          <div className="skill">
            SASS
          </div>
          <div className="skill">
            LESS
          </div>
          <div className="skill">
            Styled Components
          </div>
          <div className="skill">
            Flex Box
          </div>
          <div className="skill">
            BootStrap
          </div>
          <div className="skill">
            Bulma
          </div>
          <div className="skill">
            React
          </div>
          <div className="skill">
            Redux
          </div>
          <div className="skill">
            Gatsby
          </div>
          <div className="skill">
            .Net
          </div>
          <div className="skill">
            Postgres
          </div> */}

        </div>
        <h1>Resume</h1>
        <div className="resume-card">
          <div>
            <button>
              <a className="link"
                href="./Justin_Oliver_Lee_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                tabIndex="8"
              >
                <i className="fas fa-file" />Veiw PDF
              </a>
            </button>
            <button>
              <a className="link"
                href="./Justin_Oliver_Lee_Resume.pdf"
                download
                tabIndex="8"
              >
                <i className="fas fa-file" />Download PDF
              </a>
            </button>
          </div>
          {/* <iframe src="https://drive.google.com/file/d/1TuEUxaJHyiaz4SVyjLEzUuuqmxlJBvIq/preview" className="frame" width="850" title="My Resume" /> */}
        </div>
      </ResumeDiv >
    );
  }
}
export default Resume;