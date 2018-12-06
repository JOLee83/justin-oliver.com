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
`


class MyWork extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ShowMore: false
    }
  }
  ShowMoreWork = () => {
    this.setState(prevState => ({
      ShowMore: !prevState.ShowMore
    }))
  }
  content = () => {
    if (this.state.ShowMore) {
      return <div>
        <section>
          <img src="./img/quicklee.png" alt="quicklee app" />
          <p>
            <a href="http://quicklee.surge.sh"
              target="_blank"
              rel="noopener noreferrer">Quicklee</a> is a full-stack web app that I built for my capstone project at Suncoast Developers Guild. The front-end is built with React and SASS, the back-end is an API built with C#, .Net, Linq, and Entity.</p>
          <p>Note: the API is hosted on Heroku, and if it hasn't been used in more than 30 minutes the first response from the API will take 30 seconds to be received.</p>
        </section>
        <section>
          <img src="./img/malibulawns.png" alt="malibulawns" />
          <p>
            <a href="https://www.malibulawns.com"
              target="_blank"
              rel="noopener noreferrer">MalibuLawns.com</a> was my first commercial site that I designed and built. I used various resources for the design, and built it using React, React Router, and Styled Components.</p>
        </section>
        <section>
          <img src="./img/minesweeper.png" alt="mine sweeper" />
          <p>
            <a href="http://mine-sweeper-justin.surge.sh/"
              target="_blank"
              rel="noopener noreferrer">Mine Sweeper</a> is a React based game using an API. This was from my first week of learning React at SDG. API can be slow at times, and have not set up for mobile use yet.</p>
        </section>
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
    } else {
      return <section>
        <img src="./img/quicklee.png" alt="quicklee app" />
        <p>
          <a href="http://quicklee.surge.sh"
            target="_blank"
            rel="noopener noreferrer">Quicklee</a> is a full-stack web app that I built for my capstone project at Suncoast Developers Guild. The front-end is built with React and SASS, the back-end is an API built with C#, .Net, Linq, and Entity.</p>
        <p>Note: the API is hosted on Heroku, and if it hasn't been used in more than 30 minutes the first response from the API will take 30 seconds to be received.</p>
      </section>
    }
  }

  render() {
    return (
      <MyWorkDiv className="third">
        <h1>My Work</h1>
        <div className="work-card">
          {this.content()}
          <button className="show" onClick={this.ShowMoreWork}>{this.state.ShowMore ? "See Less" : "See More Projects"}</button>
        </div>
      </MyWorkDiv >
    );
  }
}

export default MyWork;