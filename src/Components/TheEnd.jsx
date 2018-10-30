import React, { Component } from 'react';
import styled from 'styled-components'

const EndDiv = styled.div`
  min-height: 100vh;
  background-color: rgb(40, 36, 119);
  background-image: url(./img/background/SeattleSkylineSilohetteMobile.png);
  background-position: bottom; 

  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: fix;
  color: rgb(250, 250, 250);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  justify-content: center;
  font-family: 'Chakra Petch', sans-serif;
  img {
    // background-size: cover;
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
  }

	a {
		margin: 10px;
		display: flex;
		flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: rgb(250, 250, 250);

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
		transition: border-color 0.5s ease-in-out, color 0.5s ease-in-out;

	}

  button {
    font-size: 2rem;
    border-radius: 1rem;
    color:white;
    background-color: darkred;
    border-color: pink black black pink;
  }


  .end-card {
    position:relative;
  
    


  }

  .up {
    // position: relative;
    // top: 100;
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
    margin: 0;
  }
  @media (min-width: 500px) {
    padding-top: 3rem;
    background-image: url(./img/background/SeattleSkylineSilohette2.png);
	
		div {
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
		}
		a {
			margin: 0 3rem .4rem 3rem;
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
		i:hover {
      color: rgb(139, 0, 0);
			border-color: rgb(139, 0, 0);
    }
    a:hover {
      color: rgb(139, 0, 0);
    }
    
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


class TheEnd extends Component {
  render() {
    return (
      <EndDiv className="very-last">
        <div className="up">
          <i onClick={this.props.last} className="fas fa-angle-double-up" />
        </div>

        <div className="end-card">
          <h1>THE END...</h1>
        </div>
        <button onClick={this.props.break}>
          Don't Press Me
        </button>
      </EndDiv >
    );
  }
}

export default TheEnd;