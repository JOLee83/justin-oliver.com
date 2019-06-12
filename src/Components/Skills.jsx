import React, { Component } from 'react';
import styled from 'styled-components'

const SkillsDiv = styled.div`
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
  /* padding-bottom: 4rem; */
  font-size: 1.2rem;
  h1, p {
    margin:0 0 .5rem 0;
  }
  /* p {
    margin-top: 0;
    
  } */
  .list {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-size: 1rem;
    .skill {
      display:flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin: .5rem;
      border: 1px solid white;
      width: 110px;
      height: 50px;
      border-radius:10px;
    }
    .unpop {
      transform: scale(0);
      opacity: 0;
    }
  }
  @media (min-width: 500px) {
    .list {
      max-width: 70vw;
      min-height: 70vh;
      .skill {
        font-size: 1.6rem;
        width: 220px;
        height: 75px;
      }
    }
  }
  @media (min-width: 1200px) {
    .list {
      max-width: 50vw;
    }
  }
`
class Skills extends Component {
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

    this.setState(() => ({
      yOffset: yOffset
    }))
  }
  _setThreshold = () => {
    let clientHeight = document.querySelector(".list").clientHeight * 0.3
    let threshold = this._getOffset() - window.innerHeight + clientHeight

    this.setState(() => ({
      threshold: threshold
    }))
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
    this.setState(() => ({
      postThreshold: postThreshold
    }))
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
  }
  render() {
    return (
      <SkillsDiv className="skills">
        <h1>My Skills</h1>
        <p>Project experience with</p>
        <div className="list">
          {this.state.skills.map((skill, index) => {
            const { skills, threshold, yOffset, postThreshold, pass } = this.state
            const styles = pass ? { transition: `all .5s ${index * .05}s ease` } : { transition: `all .5s ${(skills.length - index - 1) * .05}s ease` }
            return (
              <div
                style={styles}
                className={yOffset > threshold && yOffset < postThreshold ? "skill" : "skill unpop"}
                key={index}>
                {skill}
              </div>
            )
          })}
        </div>
      </SkillsDiv >
    );
  }
}
export default Skills;