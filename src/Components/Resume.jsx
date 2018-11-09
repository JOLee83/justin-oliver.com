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
img {
  // max-height: 80vh;
  max-width: 90vw;
}
  
  

	.link {
		margin: 10px;
		display: flex;
		// flex-direction: column;
    justify-content: center;
    text-decoration: none;
    color: rgb(250, 250, 250);
    	transition: color 0.5s ease-in-out;

	}

	a i {
    margin-right: .5rem;
	// 	font-size: 3rem;
	// 	width: 4.5rem;
	// 	height: 3.75rem;
	// 	text-align: center;
	// 	padding-top: .75rem;
	// 	border-radius: 50%;
	// 	border 3px solid rgb(250, 250, 250);

	}




  .resume-card {
    position:relative;
    


  }


  .fa-angle-double-up, .fa-angle-double-down{
    animation: nextpage 7s infinite linear;

  }
  
  @media (min-width: 500px) {
    // padding-top: 3rem;	
    img {
      max-width: 70vw;
    }
		
		
	
	

    a:hover {
      color: rgb(139, 0, 0);
    }
    
  
 
    }
    @media (min-width: 1200px) {
      img {
        max-width: 40vw;
      }
    }
  }
`


class Resume extends Component {



  render() {

    return (
      <ResumeDiv className="fourth">
        <h1>Resume</h1>

        <div className="resume-card">
          <a className="link"
            href="https://drive.google.com/file/d/1TuEUxaJHyiaz4SVyjLEzUuuqmxlJBvIq/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-file" />Download PDF
				</a>
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