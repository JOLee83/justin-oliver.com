import React, { Component } from 'react';
import TypeWriter from './TypeWriter.jsx'

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
  }
`
class Home extends Component {
  render() {
    return (
      <HomeDiv className="home">
        <div className="title-card">
          <div className="name">justin oliver lee</div>
          <TypeWriter />
        </div>
      </HomeDiv>
    );
  }
}

export default Home;