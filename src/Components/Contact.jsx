import React, { Component } from 'react';
import styled from 'styled-components'

const ContactDiv = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(to bottom, rgb(25, 24, 43), rgb(40, 36, 119));
  background-size: cover;
  background-attachment: fix;
  color: rgb(250, 250, 250);
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
    font-size: 1.2rem;
    font-family: 'Chakra Petch', sans-serif;
    a {
      margin: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: rgb(250, 250, 250);
      transition: border-color 0.5s ease-in-out, color 0.5s ease-in-out;
    }
    aside {
      font-size: 0rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    a i {
      text-align: center;
      border-radius: 50%;
      border 3px solid rgb(250, 250, 250);
      overflow: hidden;
      font-size: 4rem;
      width: 6rem;
      height: 5rem;
      padding-top: 1rem;
      transition: background-color .4s ease-in-out, color .4s ease-in-out;
    }
    h1 {
      margin: .5rem;
    }
    p {
      margin: 0 0 1rem 0;
      padding: 0 1.5rem;
    }
    .contact-card {
      // position:relative;
      font-family: 'Chakra Petch', sans-serif;
      width: 100%;
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
      justify-content: center;
      align-item: center;
      flex-wrap: wrap;
      max-width: 60vw;

		}
		a {
			margin: 0 3rem .4rem 3rem;
		}
		aside {
			font-size: 1.1rem;
      text-align: center;
      width: 300px;
		}
		h1 {
      margin-top: 2rem;
			font-size: 2rem;
		}
		p {
      font-size: 1.3rem;
      max-width: 500px;
			margin: 2rem 0 8rem 0;
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
    transition: background-color .4s ease-in-out, color .4s ease-in-out;
    }
    .text-link:hover {
      color: rgb(139, 0, 0);

    }
    .text-link {
      margin-top: 1rem;
      transition: color 0.5s ease-in-out;
    }
  }
  }
  @media (min-width: 800px) {
  .back{
    background-image: url(./img/background/SeattleSkylineSilohette3.png);
    .contact-card{
    }
  }
  }
`

class Contact extends Component {
  render() {
    return (
      <ContactDiv className="last">
        <div className="back">
          <h1>Contact Me</h1>
          <p>
            Start a Conversation, Looking to fill a developer position or just want a web site built, let's talk.
				</p>
          <div className="contact-card">
            <aside>
              <a className="i-link" href="tel://19044729516">
                <i className="fas fa-mobile-alt" />
              </a>
              <a className="text-link" href="tel://19044729516">(904) 472-9516</a>
            </aside>
            <aside>
              <a className="i-link" href="mailto:lee.justin.oliver@gmail.com?subject=Hi%20Justin,%20Nice%20Website">
                <i className="fas fa-envelope" />
              </a>
              <a className="text-link" href="mailto:lee.justin.oliver@gmail.com?subject=Hi%20Justin,%20Nice%20Website">
                lee.justin.oliver@gmail.com
							</a>
            </aside>
            <aside>
              <a
                className="i-link"
                href="https://www.linkedin.com/in/justin-oliver-lee/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin" />
              </a>
              <a className="text-link" href="https://www.linkedin.com/in/justin-oliver-lee/">
                LinkedIn
							</a>
            </aside>
          </div>
        </div>
      </ContactDiv >
    );
  }
}

export default Contact;