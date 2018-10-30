import React, { Component } from 'react';
import styled from 'styled-components'
const ContactDiv = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(to bottom, rgb(25, 24, 43), rgb(40, 36, 119));
  background-size: cover;
  background-attachment: fix;
  color: rgb(250, 250, 250);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  justify-content: center;

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
    margin-bottom: 1rem;
		font-size: 3rem;
		width: 4.5rem;
		height: 3.75rem;
		text-align: center;
		padding-top: .75rem;
		border-radius: 50%;
		border 3px solid rgb(250, 250, 250);

	}
	h1 {
		margin: 1rem;
		text-align: center;
		font-size: 1.5rem;
		font-style: italic;
		font-weight: normal;
		margin-bottom: .5rem;
	}
	p {
		margin: 0 0 2rem 0;
		padding: 0 1.5rem;
		text-align: center;
	}
  .contact-card {
    position:relative;
    font-family: 'Chakra Petch', sans-serif;
  }
  .up {
    display: flex;
    justify-content: center;
    align-items:flex-start;
    font-size:3rem;
  }
  .down {
    display: flex;
    justify-content: center;
    align-items:flex-end;
    flex: 1;
    font-size:3rem;
  }

  .fa-angle-double-up, .fa-angle-double-down{
    animation: nextpage 7s infinite linear;

  }
  .i-link {
    max-width: 6rem;
    // max-height: 6rem;
    margin: 0;
  }
  @media (min-width: 500px) {
    padding-top: 3rem;	
		div {
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
		}
		a {
			margin: 0 3rem .4rem 3rem;
		}
		aside {
			font-size: 1.1rem;
			text-align: center;
		}
		h1 {
			font-size: 2rem;
		}
		p {
			font-size: 1.3rem;
			margin-bottom: 6rem;
    }
    a i {
    font-size: 4rem;
		width: 6rem;
		height: 5rem;
    padding-top: 1rem;
    }
		// i:hover {
    //   color: rgb(139, 0, 0);
		// 	border-color: rgb(139, 0, 0);
    // }
    a:hover {
      color: rgb(139, 0, 0);
      border-color: rgb(139, 0, 0);

    }
    
    .up, .down {
      display: none;
 
    }
    .text-link {
      transition: color 0.5s ease-in-out;
    }
    
  @keyframes nextpage {
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


class Contact extends Component {



  render() {

    return (
      <ContactDiv className="last">
        <div className="up">
          <i onClick={this.props.fourth} className="fas fa-angle-double-up" />
        </div>
        <h1>Start a Conversation</h1>
        <p>
          Looking to fill a developer position or just want a web site built,
          let's talk.
					</p>
        <div className="contact-card">

          <aside>
            <a className="i-link" href="tel://19044729516">
              <i className="fas fa-mobile-alt" />
            </a>
            <a className="text-link" href="tel://19044729516">(904) 472-9516</a>
          </aside>
          <aside>
            <a className="i-link" href="mailto:lee.justin.oliver@gmail.com">
              <i className="fas fa-envelope" />
            </a>
            <a className="text-link" href="mailto:lee.justin.oliver@gmail.com">
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
        <div className="down">
          <i onClick={this.props.veryLast} className="fas fa-angle-double-down" />
        </div>
      </ContactDiv >
    );
  }
}

export default Contact;