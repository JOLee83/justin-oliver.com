import React, { Component } from 'react';
import styled from 'styled-components'

const EndDiv = styled.div`
  min-height: 100vh;
  background-color: rgb(40, 36, 119);
  background-image: url(./img/background/SeattleSkylineSilohetteMobile.png);
  background-position: bottom; 
  background-size: 100%;
  background-repeat: no-repeat;
  color: rgb(250, 250, 250);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  justify-content: center;
  font-family: 'Chakra Petch', sans-serif;
  .end-card {
    position:relative;
  	display: flex;
		justify-content: center;
    align-items: center;
    flex: 1;
  }
  @media (min-width: 500px) {
    padding-top: 3rem;
    background-image: url(./img/background/SeattleSkylineSilohette3.png);
		h1 {
      font-size: 2rem;
		}
  }
`

class TheEnd extends Component {
  render() {
    return (
      <EndDiv className="very-last">
        <div className="end-card" id="rain">
          <h1>The End</h1>
        </div>
      </EndDiv >
    );
  }
}

export default TheEnd;