import React, { Component } from 'react';
import styled from 'styled-components'

const ResumeDiv = styled.div`
min-height: 100vh;
background-image: linear-gradient(to bottom, rgb(25, 24, 43), rgb(25, 24, 43));
background-size: cover;
background-attachment: fix;
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

  border: .1rem solid rgb(100, 100, 100), .1rem solid rgb(150, 150, 150), .1rem solid rgb(150, 150, 150), .1rem solid rgb(100, 100, 100);
  border-radius: 5%;
  padding-top: .15rem;
  background-color: rgb(250, 250, 250);
  color: rgb(0, 0, 0);
  font-size: 1.2rem;
  outline: none;
  margin: .5rem 0 0 0;
  cursor: pointer;
  padding: .2rem;
  transition: background-color .4s ease-in-out, color .4s ease-in-out;
  margin-bottom: .2rem;
}
a{
  color: inherit;
  text-decoration: inherit;
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
      background-color: rgb(139, 0, 0);
      color: rgb(250, 250, 250);
      transition: background-color .4s ease-in-out, color .4s ease-in-out;

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
            >
              <i className="fas fa-file" />Download PDF
				    </a>
          </button>
          <a
            href="https://drive.google.com/file/d/1TuEUxaJHyiaz4SVyjLEzUuuqmxlJBvIq/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./img/Justin_Oliver_Lee_Resume.jpg" alt="My Resume" /></a>
        </div>
      </ResumeDiv >
    );
  }
}
export default Resume;