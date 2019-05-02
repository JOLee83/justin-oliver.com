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
  img {
    max-width: 90vw;
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
    img {
      max-width: 70vw;
    }
    button:hover {
      background-color: rgb(250, 250, 250);
      color: rgb(139, 0, 0);
      transition: all 0.5s ease-in-out;
    }
  }
  @media (min-width: 1200px) {
    img {
      max-width: 50vw;
    }
  }
`
class Resume extends Component {
  render() {
    return (
      <ResumeDiv className="fourth">
        <h1>Resume</h1>
        <div className="resume-card">
          <button>
            <a className="link"
              href="https://drive.google.com/file/d/1TuEUxaJHyiaz4SVyjLEzUuuqmxlJBvIq/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex="8"
            >
              <i className="fas fa-file" />Download PDF
				    </a>
          </button>
          <a
            href="https://drive.google.com/file/d/1TuEUxaJHyiaz4SVyjLEzUuuqmxlJBvIq/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex="8"
          >
            <img src="./img/Justin_Oliver_Lee_Resume.jpg" alt="My Resume" />
          </a>
        </div>
      </ResumeDiv >
    );
  }
}
export default Resume;