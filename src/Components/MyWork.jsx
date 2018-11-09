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
  .show {
    border: .1rem solid rgb(250, 250, 250);
    padding: .1rem;
    max-width: 120px;
    text-align: center;
    border-radius: 5%;
    transition: background-color .4s ease-in-out,
      border-color.4s ease-in-out,
      color .4s ease-in-out;
  }
  .show:active {
    background-color: rgb(250, 250, 250);
    border-color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
  }


	a {
    // text-decoration: none;
    color: rgb(250, 250, 250);

	}

	// a i {
  //   margin-bottom: 1rem;
	// 	font-size: 3rem;
	// 	width: 4.5rem;
	// 	height: 3.75rem;
	// 	text-align: center;
	// 	padding-top: .75rem;
	// 	border-radius: 50%;
	// 	border 3px solid rgb(250, 250, 250);
	// 	transition: border-color 0.5s ease-in-out, color 0.5s ease-in-out;

	// }




  .work-card {
    position:relative;
    


  }
  // .i-link {
  //   max-width: 6rem;
  //   margin: 0;
  // }
  @media (min-width: 500px) {
    // padding-top: 3rem;
    img, p{
      max-width: 50vw;
    }	
		.show:hover {
      color: rgb(139, 0, 0);
      cursor: pointer;
    }

		p {
			font-size: 1.3rem;
			margin-bottom: 2rem;
    }
    a:hover {
      color: rgb(139, 0, 0);
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
          <img src="./img/malibulawns.png" />
          <p><a href="https://www.malibulawns.com" target="_blank">MalibuLawns.com</a> was my first commercial site that I designed and built. I used various resources for the design, and built it using React, React Router, and Styled Components.</p>
        </section>
        <section>
          <img src="./img/minesweeper.png" />
          <p><a href="http://mine-sweeper-justin.surge.sh/" target="_blank">Mine Sweeper</a> is a React based game using an API. This was from my first week of learning React at SDG. API can be slow at times, and have not set up for mobile use yet.</p>
        </section>
        <section>
          <img src="./img/blackjack.png" />
          <p><a href="http://black-jack-justin.surge.sh/" target="_blank">Black Jack</a> is a JavaScript based game. This was the culmination of my first week of learning JavaScript at SDG. Set up the CSS for mobile use, but looks great on large screens as well.</p>
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
        <img src="./img/malibulawns.png" />
        <p><a href="https://www.malibulawns.com" target="_blank">MalibuLawns.com</a> was my first commercial site that I designed and built. I used various resources for the design, and built it using React, React Router, and Styled Components.</p>
      </section>
    }
  }


  render() {

    return (
      <MyWorkDiv className="third">
        <h1>My Work</h1>
        <div className="work-card">
          {this.content()}
          <p className="show" onClick={this.ShowMoreWork}>{this.state.ShowMore ? "See Less" : "See More"}</p>
        </div>
      </MyWorkDiv >
    );
  }
}

export default MyWork;