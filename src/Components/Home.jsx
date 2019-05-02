import React, { Component } from 'react';
import styled from 'styled-components'

const HomeDiv = styled.div`
  height: 100vh;
  background-image: url(./img/background/SeattleSkylineMobile.jpg);
  background-size: cover;
  color: rgb(250, 250, 250);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .title-card {
    line-height: 3rem;
    margin-bottom: 10rem;
  }
  .name {
    font-size: 1.8rem;
    font-family: 'Muli', sans-serif;
    text-transform: uppercase;
  }
  .job {
    font-size: 1.7rem;
    font-family: 'Chakra Petch', sans-serif;
    text-transform: capitalize;
  }
  .faded {
    opacity: 0;
    transition: opacity .4s ease-in-out;
  }
  .fading{
    opacity: 1;
    transition: opacity .4s ease-in-out;
  }
  @media (min-width: 500px) {
    background-image: url(./img/background/SeattleSkyline2.jpg);
    .title-card {
      line-height: 6rem;
      text-shadow: -.1rem -.1rem .5rem rgb(25, 25, 25),
        .1rem .1rem .5rem rgb(25, 25, 25),
        .1rem .1rem .6rem rgb(25, 25, 25),
        -.1rem -.1rem .5rem rgb(25, 25, 25);
    }
    .name {
      font-size: 3rem;
    }
    .job {
      font-size: 2.5rem;
    }
  }
`

class Home extends Component {
  state = {
    fading: false,
    title: "problem solver"
  }
  componentWillMount() {
    setTimeout(this.changeTitle, 1000)
    setInterval(this.changeTitle, 4000)
  }
  componentWillUnmount() {
    clearInterval(this.changeTitle)
  }
  changeTitle = () => {
    this.timer = setTimeout(_ => {
      this.setState({ fading: true })
    }, 1000);
    if (this.state.title === "problem solver") {
      this.timer = setTimeout(_ => {
        this.setState({ title: 'up for a challenge' })
        this.setState({ fading: false })
      }, 2000);
    }
    if (this.state.title === "up for a challenge") {
      this.timer = setTimeout(_ => {
        this.setState({ title: 'web developer' })
        this.setState({ fading: false })
      }, 2000);
    }
    if (this.state.title === "web developer") {
      this.timer = setTimeout(_ => {
        this.setState({ title: 'problem solver' })
        this.setState({ fading: false })
      }, 2000);
    }
  }
  render() {
    const { title, fading } = this.state;
    return (
      <HomeDiv className="top">
        <div className="title-card">
          <div className="name">justin oliver lee</div>
          <div className={`${fading ? 'faded job' : 'fading job'}`}>{title}</div>
        </div>
      </HomeDiv>
    );
  }
}

export default Home;