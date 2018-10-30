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
  z-index: 100;
  justify-content: center;
  font-family: 'Chakra Petch', sans-serif;
  img, p {
    max-width: 90vw;
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
	// 	margin: 10px;
	// 	display: flex;
	// 	flex-direction: column;
  //   align-items: center;
    text-decoration: none;
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

  .up {
    display: flex;
    justify-content: center;
    align-items:flex-start;
    font-size:3rem;
  }
  .down {
    display: flex;
    justify-content: center;
    align-items:flex-start;
    flex: 1;
    font-size:3rem;
    // margin-bottom: 4rem;

  }

  .fa-angle-double-up, .fa-angle-double-down{
    animation: nextpage 7s infinite linear;

  }
  // .i-link {
  //   max-width: 6rem;
  //   margin: 0;
  // }
  @media (min-width: 500px) {
    padding-top: 3rem;
    img, p{
      max-width: 50vw;
    }	
		.show:hover {
      color: rgb(139, 0, 0);
      cursor: pointer;
    }
		// a {
		// 	margin: 0 3rem .4rem 3rem;
		// }
	
		// h1 {
		// 	font-size: 2rem;
		// }
		p {
			font-size: 1.3rem;
			margin-bottom: 6rem;
    }
    // a i {
    // font-size: 4rem;
		// width: 6rem;
		// height: 5rem;
    // padding-top: 1rem;
    // }
		// i:hover {
    //   color: rgb(139, 0, 0);
		// 	border-color: rgb(139, 0, 0);
    // }
    // a:hover {
    //   color: rgb(139, 0, 0);
    // }
    
    .up, .down {
      display: none;
 
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
      return <section>
        <img src="./img/malibulawns.png" />
        <p><a href="www.malibulawns.com" target="_blank">MalibuLawns.com</a> was my first commercial site that I designed and built. I used various resources for the design, and built it using React, React Router, and Styled Components.</p>
      </section>
    } else {
      return <section>
        <img src="./img/malibulawns.png" />
        <p><a href="www.malibulawns.com" target="_blank">MalibuLawns.com</a> was my first commercial site that I designed and built. I used various resources for the design, and built it using React, React Router, and Styled Components.</p>
      </section>
    }
  }


  render() {

    return (
      <MyWorkDiv className="third">
        <div className="up">
          <i onClick={this.props.second} className="fas fa-angle-double-up" />
        </div>

        <div className="work-card">
          {this.content()}
          <p className="show" onClick={this.ShowMoreWork}>{this.state.ShowMore ? "Show Less" : "Show More"}</p>

        </div>
        <div className="down">
          <i onClick={this.props.fourth} className="fas fa-angle-double-down" />
        </div>
      </MyWorkDiv >
    );
  }
}

export default MyWork;