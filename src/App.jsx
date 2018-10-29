import React, { Component } from 'react';
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import PopMenu from './Components/PopMenu.jsx'
import Contact from './Components/Contact.jsx'


class App extends Component {
  render() {
    return (
      <>
        <PopMenu />
        <Home />
        <About />
        <Contact />
      </>
    );
  }
}

export default App;
