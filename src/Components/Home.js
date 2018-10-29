import React, { Component } from 'react';
import styled from 'styled-components'
const HomeDiv = styled.div`
  height: 100vh;
  background-image: url(./img/background/SeattleSkylineMobile.jpg);
  background-size: cover;
  background-attachment: fix;
  color: white;
  text-align: center;

  .title-card {
    position:relative;
    top: 35%;
    line-height: 3rem;

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
  .down {
    position:relative;
    top: 70%;
    font-size:3rem;
    animation: nextpagedown 7s infinite linear;
  }

  @media (min-width: 500px) {
    background-image: url(./img/background/SeattleSkyline.jpg);
    width: 100vw;
    heigth: auto;
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
    .down {
      display: none;
    }

  }
  @keyframes nextpagedown {
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


class Home extends Component {
  render() {
    return (
      <HomeDiv className="top">
        <div className="title-card">
          <div className="name">justin oliver lee</div>
          <div className="job">web developer</div>
        </div>
        <div className="down">
          <i className="fas fa-angle-double-down" />
        </div>
      </HomeDiv>
    );
  }
}

export default Home;