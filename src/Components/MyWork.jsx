import React, { Component } from 'react';
import styled from 'styled-components'

const MyWorkDiv = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(to bottom,  rgba(25, 25, 25), rgb(25, 24, 43));
  background-size: cover;
  background-attachment: fix;
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
    img, p{
      max-width: 50vw;
    }	
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


class MyWork extends Component {



  render() {

    return (
      <MyWorkDiv className="third">
        <div className="up">
          <i onClick={this.props.second} className="fas fa-angle-double-up" />
        </div>

        <div className="work-card">
          <section>
            <img src="./img/malibulawns.png" />
            <p><a href="www.malibulawns.com" target="_blank"></a> was my first commercial site that I designed and built. I used various resources for the design, and built it using React, React Router, and Styled Components.</p>
          </section>
        </div>
        <div className="down">
          <i onClick={this.props.fourth} className="fas fa-angle-double-down" />
        </div>
      </MyWorkDiv >
    );
  }
}

export default MyWork;