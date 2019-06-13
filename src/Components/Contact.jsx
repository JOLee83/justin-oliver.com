import React, { Component } from 'react';
import styled from 'styled-components'

const ContactDiv = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(to bottom, rgb(25, 24, 43), rgb(40, 36, 119));
  background-size: cover;
  color: rgb(250, 250, 250);
  font-size: 1.2rem;

  .back {
    min-height: 100vh;
    background-position: bottom; 
    background-size: 100%;
    background-repeat: no-repeat;
    background-image: url(./img/background/SeattleSkylineSilohetteMobile.png);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    z-index: 100;
    font-family: 'Chakra Petch', sans-serif;
    a {
      margin: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: rgb(250, 250, 250);
      transition: all 0.5s ease-in-out;
      outline-color: rgb(250, 0, 0);
      cursor: pointer;
    }
    .card {
      font-size: 0rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    a i {
      text-align: center;
      border-radius: 50%;
      border: 3px solid rgb(250, 250, 250);
      overflow: hidden;
      font-size: 4rem;
      width: 6rem;
      height: 5rem;
      padding-top: 1rem;
      transition: all 0.5s ease-in-out;
    }
    h1 {
      margin: .5rem;
    }
    p {
      max-width: 90vw;
      margin: 0 0 1rem 0;
      padding: 0 1.5rem;
    }
    .contact-card {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      font-family: 'Chakra Petch', sans-serif;
      flex: 1;
    }
    .i-link {
      max-width: 6rem;
      margin: 0;
    }
  }
  @media (min-width: 500px) {
    .back{
      display: flex;
      justify-content: flex-start;
      background-image: url(./img/background/SeattleSkylineSilohette.png);
      .contact-card {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        max-width: 60vw;
      }
      a {
        margin: 0 3rem .4rem 3rem;
      }
      .card {
        text-align: center;
        width: 300px;
      }
      h1 {
        margin-top: 2rem;
      }
      p {
        font-size: 1.3rem;
        max-width: 50vw;
        margin: 2rem 0;
        text-align: center;
      }
      a i {
        font-size: 4rem;
        width: 6rem;
        height: 5rem;
        padding-top: 1rem;
      }
      i:hover {
        background-color: rgb(250, 250, 250);
        color: rgb(139, 0, 0);
        transition: all 0.5s ease-in-out;
      }
      .text-link:hover {
        color: rgb(139, 0, 0);
      }
      .text-link {
        margin-top: 1rem;
        transition: all 0.5s ease-in-out;
      }
    }
  }
  @media (min-width: 800px) {
    .back{
      background-image: url(./img/background/SeattleSkylineSilohette3.png);
    }
    .text-link {
      font-size: 1.2rem;
    }
  }
  @media (min-width: 1200px) {
    .card {
      /*fix for IE*/
      height: 0px;
    }
  }
`
class Contact extends Component {
  render() {
    return (
      <ContactDiv className="contact">
        <div className="back">
          <h1>Contact Me</h1>
          <p>
            Start a Conversation, Looking to fill a developer position or just want a web site built, let's talk.
				  </p>
          <div className="contact-card">
            <div className="card">
              <a
                className="i-link"
                href="tel://19044729516"
                tabIndex="9"
              >
                <i className="fas fa-mobile-alt" />
              </a>
              <a
                className="text-link"
                href="tel://19044729516"
                tabIndex="10"
              >
                (904) 472-9516
              </a>
            </div>
            <div className="card">
              <a
                className="i-link"
                href="mailto:lee.justin.oliver@gmail.com?subject=Hi%20Justin,%20Nice%20Website"
                tabIndex="9"
              >
                <i className="fas fa-envelope" />
              </a>
              <a
                className="text-link"
                href="mailto:lee.justin.oliver@gmail.com?subject=Hi%20Justin,%20Nice%20Website"
                tabIndex="10"
              >
                lee.justin.oliver@gmail.com
							</a>
            </div>
            <div className="card">
              <a
                className="i-link"
                href="https://www.linkedin.com/in/justin-oliver-lee/"
                target="_blank"
                rel="noopener noreferrer"
                tabIndex="9"
              >
                <i className="fab fa-linkedin" />
              </a>
              <a
                className="text-link"
                href="https://www.linkedin.com/in/justin-oliver-lee/"
                target="_blank"
                rel="noopener noreferrer"
                tabIndex="10"
              >
                LinkedIn
							</a>
            </div>
          </div>
        </div>
      </ContactDiv >
    );
  }
}
export default Contact;