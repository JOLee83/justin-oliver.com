(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,n,t){e.exports=t(31)},21:function(e,n,t){},31:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(8),o=t.n(i),l=(t(21),t(1)),s=t(2),c=t(4),m=t(3),u=t(5),d=t(6),f=t(7);function h(){var e=Object(d.a)(["\n font-size: 1.7rem;\nfont-family: 'Chakra Petch', sans-serif;\n.cursor {\n  opacity: 1;\n  animation: blink .75s linear infinite;\n}\n@media (min-width: 500px) {\n  font-size: 2.5rem;\n}\n@keyframes blink {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n"]);return h=function(){return e},e}var g=f.a.div(h()),b=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(c.a)(this,Object(m.a)(n).call(this,e)))._typeWriter=function(){t.state.erase?t.setState(function(e){return{cursor:--e.cursor}},function(){t._eraser()}):t.setState(function(e){return{cursor:++e.cursor}},function(){t._eraser()})},t._eraser=function(){t.state.cursor===t.state.titles[t.state.title].length?t.setState(function(){return{erase:!0}},function(){t._delay()}):0===t.state.cursor?t.setState(function(){return{erase:!1}},function(){t._changeTitle()}):t._delay()},t._changeTitle=function(){t.state.title===t.state.titles.length-1?t.setState(function(){return{title:0}},function(){t._delay()}):t.setState(function(e){return{title:++e.title}},function(){t._delay()})},t._delay=function(){t.state.erase&&t.state.cursor===t.state.titles[t.state.title].length-1?setTimeout(t._currentTitle,3e3):t.state.erase||1!==t.state.cursor?t._currentTitle():setTimeout(t._currentTitle,1e3)},t._currentTitle=function(){t.setState(function(){return{currentTitle:t.state.titles[t.state.title].slice(0,t.state.cursor)}},function(){setTimeout(t._typeWriter,125)})},t.state={titles:["Problem Solver","Up For A Challenge","Web Developer"],title:0,cursor:0,erase:!1,currentTitle:""},t}return Object(u.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){setTimeout(this._typeWriter,500)}},{key:"render",value:function(){return a.a.createElement(g,null,a.a.createElement("div",{className:"title"},this.state.currentTitle,a.a.createElement("strong",{className:"cursor"},"|")))}}]),n}(r.Component);function p(){var e=Object(d.a)(["\n  height: 100vh;\n  background-image: url(./img/background/SeattleSkylineMobile.jpg);\n  background-size: cover;\n  color: rgb(250, 250, 250);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  .title-card {\n    line-height: 3rem;\n    margin-bottom: 10rem;\n  }\n  .name {\n    font-size: 1.8rem;\n    font-family: 'Muli', sans-serif;\n    text-transform: uppercase;\n  }\n  .job {\n    font-size: 1.7rem;\n    font-family: 'Chakra Petch', sans-serif;\n    text-transform: capitalize;\n  }\n  .faded {\n    opacity: 0;\n    transition: opacity .4s ease-in-out;\n  }\n  .fading{\n    opacity: 1;\n    transition: opacity .4s ease-in-out;\n  }\n  @media (min-width: 500px) {\n    background-image: url(./img/background/SeattleSkyline2.jpg);\n    .title-card {\n      line-height: 6rem;\n      text-shadow: -.1rem -.1rem .5rem rgb(25, 25, 25),\n        .1rem .1rem .5rem rgb(25, 25, 25),\n        .1rem .1rem .6rem rgb(25, 25, 25),\n        -.1rem -.1rem .5rem rgb(25, 25, 25);\n    }\n    .name {\n      font-size: 3rem;\n    }\n    .job {\n      font-size: 2.5rem;\n    }\n  }\n"]);return p=function(){return e},e}var w=f.a.div(p()),v=function(e){function n(){return Object(l.a)(this,n),Object(c.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement(w,{className:"top"},a.a.createElement("div",{className:"title-card"},a.a.createElement("div",{className:"name"},"justin oliver lee"),a.a.createElement(b,null)))}}]),n}(r.Component);function y(){var e=Object(d.a)(["\n  padding-top: 1rem;\n  min-height: 100vh;\n  background-image: linear-gradient(to bottom, rgb(0, 0, 0), rgb(25, 25, 25));\n  background-size: cover;\n  color: rgb(250, 250, 250);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start ;\n  z-index: 100;\n  font-size: 1.2rem;\n  img {\n    max-width:150px;\n    border-radius: 50%;\n    box-shadow: -.05rem -.05rem .1rem rgb(240, 240, 240),\n    .05rem .05rem .1rem rgb(240, 240, 240),\n    .05rem .05rem .1rem rgb(240, 240, 240),\n    -.05rem -.05rem .1rem rgb(240, 240, 240);\n  }\n  a {\n    color: rgb(250, 250, 250);\n    transition: color .4s ease-in-out;\n    outline-color: rgb(250, 0, 0);\n    cursor: pointer;\n\t}\n  button {\n    font-family: 'Chakra Petch', sans-serif;\n    border: .1rem solid rgb(250, 250, 250);\n    border-radius: 5%;\n    padding-top: .15rem;\n    color: rgb(250, 250, 250);\n    background-color: transparent;\n    font-size: 1.2rem;\n    margin: 1.5rem 0 0 0;\n    padding: .2rem;\n    transition: all 0.5s ease-in-out;\n    outline-color: rgb(250, 0, 0);\n    cursor: pointer;\n  }\n  .about-card {\n    position:relative;\n    font-family: 'Chakra Petch', sans-serif;\n    max-width: 90vw;\n  }\n  .text{\n    overflow: hidden;\n    transition: all 1.5s ease-in-out;\n    p {\n      margin-bottom: 0;\n      padding-bottom: 1em;\n    }\n    .unfaded {\n      opacity: 1;\n      transition: all 1s ease-in-out;\n    }\n    .faded {\n      opacity: 0;\n      transition: all 2s ease-in-out;\n    }\n  }\n  @media (min-width: 500px) {\n    img {\n      margin-top: 2%;\n      max-width:300px;\n    }\n    .about-card {\n      max-width: 50vw;\n    }\n    a:hover {\n      color: rgb(139, 0, 0);\n      transition: all 0.5s ease-in-out;\n    }\n    button:hover {\n      background-color: rgb(250, 250, 250);\n      color: rgb(139, 0, 0);\n      transition: all 0.5s ease-in-out;\n    }\n    p {\n      font-size: 1.2rem;\n    }\n  }\n"]);return y=function(){return e},e}var k=f.a.div(y()),x=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(c.a)(this,Object(m.a)(n).call(this,e))).previewHeight=function(){return document.querySelector(".firstP").clientHeight},t.componentDidMount=function(){window.addEventListener("resize",t._setHeight),setTimeout(t._setHeight,50)},t._setHeight=function(){return document.querySelector(".text").style.maxHeight=t.state.ReadMore?"500vh":"".concat(t.previewHeight(),"px")},t.ReadMoreAbout=function(){t.setState(function(e){return{ReadMore:!e.ReadMore}},function(){t.state.ReadMore||t.props.scroll(".second"),t._setHeight()})},t.state={ReadMore:!1},t}return Object(u.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement(k,{className:"second"},a.a.createElement("img",{src:"./img/profilepicture.jpg",alt:"Justin Oliver Lee"}),a.a.createElement("div",{className:"about-card"},a.a.createElement("h1",null,"About Me"),a.a.createElement("div",{className:"text"},a.a.createElement("p",{className:"firstP"},"A Web Developer from Florida, currently living in Seattle. Looking for my next challenge, along with ways to get involved and give back to the local developer community."),a.a.createElement("div",{className:this.state.ReadMore?"unfaded":"faded"},a.a.createElement("p",null,"Last year, I decided to follow my passion for building and creating things which led me to increasing my coding knowledge around how to make user friendly, functional web applications. Through that learning process, I have come to enjoy the process and challenges that creating websites and other applications bring, while increasing my understanding of methods to improve my development skills."),a.a.createElement("p",null,"Since moving to Seattle, I have become involved with local meet up groups. I have even become an event organizer and host with ",a.a.createElement("a",{href:"http://www.seattlejshackers.com",target:"_blank",rel:"noopener noreferrer",tabIndex:this.state.ReadMore?4:-1},"Seattle JS Hackers"),". With them I put together a Code Katas meet up. During the event I present developers of all skill levels a series of coding challenges. Then the participants work together or on their own to solve the challenges. After solving, they present their solution so everyone can see the different ways the challenges can be solved."),a.a.createElement("p",null,"My real passions are in front-end development. My eye for detail has been a real asset in building websites that are not only functional but also appealing to the end user. My current front-end skill set includes HTML5, CSS3, JavaScript, along with frameworks such as React. My back-end skill set includes C# and the .Net framework. My long-term goal is to continue to expand my skill sets into other languages and frameworks."),a.a.createElement("p",null,"Development has proven to fit well with other pieces of my life. When I\u2019m not coding, I enjoy the challenge of doing a puzzle and playing games, along with expressing my creative nature with different arts and crafts. These outside interests help fuel my passion for front-end development."),a.a.createElement("p",null,"All that is missing from my career now is the opportunity to bring my passion for development to the right company. I look forward to hearing from you so that I can share additional examples of my work and show how I will be a great fit for your organization."))),a.a.createElement("button",{className:"read",onClick:this.ReadMoreAbout,tabIndex:"3"},this.state.ReadMore?"Read Less":"Read More")))}}]),n}(r.Component);function E(){var e=Object(d.a)(["\nposition: fixed;\nwidth: 10%;\nz-index: 101;\n.mobile-button, .full-button {\n  text-align: center;\n  font-family: 'Chakra Petch', sans-serif;\n  border: .1rem solid rgb(250, 250, 250);\n  border-radius: 20%;\n  padding: .15rem .3rem 0 .3rem;\n  color: rgb(250, 250, 250);\n  background-color: transparent;\n  font-size: 1.5rem;\n  margin: .5rem 0 0 .5rem;\n  transition: background-color .4s ease-in-out;\n  max-width: 35px;\n  outline-color: rgb(250, 0, 0);\n  cursor: pointer;\n}\nbutton.jump {\n  font-family: 'Chakra Petch', sans-serif;\n  color: rgb(250, 250, 250);\n  background-color: transparent;\n  border: none;\n  font-size: 1.3rem;\n  width: 100%;\n  padding: 1rem;\n  cursor: pointer;\n  transition: color .4s ease-in-out;\n  outline-color: rgb(250, 0, 0);\n\n}\n.hidden, .shown {\n  margin-top: .3rem;\n  position: absolute;\n  background-image: linear-gradient(to top, rgb(0, 0, 0), rgb(25, 25, 25));\n  color: rgb(250, 250, 250);\n  display: flex;\n  font-size: 1.3rem;\n  width: 100vw;\n  z-index: 99;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  font-family: 'Chakra Petch', sans-serif;\n  box-shadow: -.05rem -.05rem .1rem rgb(240, 240, 240),\n  .05rem .05rem .1rem rgb(240, 240, 240),\n  .05rem .05rem .1rem rgb(240, 240, 240),\n  -.05rem -.05rem .1rem rgb(240, 240, 240);\n  transition: left .4s ease-in-out, color .4s ease-in-out;\n  z-index: none;\n}\n.hidden {\n  left: -2000%;\n}\n.shown {\n  left: 0;\n}\n.full-button {\n  display: none;\n}\n@media (min-width: 700px) {\n  .full-button{\n    display: flex;\n    font-family: 'Chakra Petch', sans-serif;\n  }\n  .mobile-button {\n    display:none;\n  }\n  .shown, .hidden {\n    font-size:1.3rem;\n    height: 80vh;\n    width:150px;\n  }\n  .hidden {\n    left: -1000%;\n  }\n  .shown {\n    left: 0;\n  }\n  .full-button {\n    font-size: 1.7rem;\n    padding-top: 0;\n    border-radius: 10%;\n    max-width: 95px;\n  }\n  .jump:hover {\n    color: rgb(139, 0, 0);\n    transition: color .4s ease-in-out;\n  }\n  .full-button:hover {\n    background-color: rgb(250, 250, 250);\n    color: rgb(139, 0, 0);\n    transition: background-color .4s ease-in-out, color .4s ease-in-out;\n  }\n}\n"]);return E=function(){return e},e}var j=f.a.div(E()),S=function(e){function n(){var e,t;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(c.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(a)))).state={popMenu:!1},t._menu=function(e){t.props.scroll(e),t._closeMenu()},t._closeMenu=function(){t.setState(function(){return{popMenu:!1}})},t._toggleMenu=function(){t.setState(function(e){return{popMenu:!e.popMenu}})},t}return Object(u.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this._closeMenu)}},{key:"render",value:function(){var e=this;return a.a.createElement(j,null,a.a.createElement("button",{className:"mobile-button",onClick:this._toggleMenu,tabIndex:"1"},this.state.popMenu?a.a.createElement("i",{className:"fas fa-times"}):a.a.createElement("i",{className:"fas fa-bars"})),a.a.createElement("button",{className:"full-button",onClick:this._toggleMenu,tabIndex:"1"},this.state.popMenu?"Close":"Menu"),a.a.createElement("div",{className:this.state.popMenu?"shown":"hidden"},a.a.createElement("button",{className:"jump",onClick:function(){return e._menu(".top")},tabIndex:this.state.popMenu?2:-1},"Home"),a.a.createElement("button",{className:"jump",onClick:function(){return e._menu(".second")},tabIndex:this.state.popMenu?2:-1},"About Me"),a.a.createElement("button",{className:"jump",onClick:function(){return e._menu(".third")},tabIndex:this.state.popMenu?2:-1},"My Work"),a.a.createElement("button",{className:"jump",onClick:function(){return e._menu(".fourth")},tabIndex:this.state.popMenu?2:-1},"Resume"),a.a.createElement("button",{className:"jump",onClick:function(){return e._menu(".last")},tabIndex:this.state.popMenu?2:-1},"Contact Me")))}}]),n}(r.Component);function M(){var e=Object(d.a)(["\n  min-height: 100vh;\n  background-image: linear-gradient(to bottom,  rgb(25, 25, 25), rgb(25, 24, 43));\n  background-size: cover;\n  color: rgb(250, 250, 250);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  z-index: 100;\n  font-family: 'Chakra Petch', sans-serif;\n  img, p {\n    max-width: 90vw;\n    font-size: 1.2rem;\n  }\n  img {\n    margin-top: .5em;\n  }\n  button {\n    font-family: 'Chakra Petch', sans-serif;\n    border: .1rem solid rgb(250, 250, 250);\n    border-radius: 5%;\n    padding-top: .15rem;\n    color: rgb(250, 250, 250);\n    background-color: transparent;\n    font-size: 1.2rem;\n    margin: .5rem 0 0 0;\n    padding: .2rem;\n    transition: all 0.5s ease-in-out;\n    outline-color: rgb(250, 0, 0);\n    cursor: pointer;\n  }\n\ta {\n    color: rgb(250, 250, 250);\n    transition: all 0.5s ease-in-out;\n    outline-color: rgb(250, 0, 0);\n    cursor: pointer;\n\t}\n  .work-card {\n    position:relative;\n  }\n  .works{\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n    transition: all 1.5s ease-in-out;\n    .unfaded {\n      opacity: 1;\n      transition: all 1s ease-in-out;\n    }\n    .faded {\n      opacity: 0;\n      transition: all 2s ease-in-out;\n    }\n  }\n  @media (min-width: 500px) {\n    img, p{\n      max-width: 50vw;\n    }\n\t\tp {\n\t\t\tfont-size: 1.3rem;\n\t\t\tmargin-bottom: 2rem;\n    }\n    a:hover {\n      color: rgb(139, 0, 0);\n      transition: all 0.5s ease-in-out;\n    }\n    button:hover {\n      background-color: rgb(250, 250, 250);\n      color: rgb(139, 0, 0);\n      transition: all 0.5s ease-in-out;\n    }\n    \n  }\n"]);return M=function(){return e},e}var N=f.a.div(M()),_=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(c.a)(this,Object(m.a)(n).call(this,e))).previewHeight=function(){return document.querySelector(".firstSec").clientHeight},t.componentDidMount=function(){window.addEventListener("resize",t._setHeight),setTimeout(t._setHeight,500)},t._setHeight=function(){return document.querySelector(".works").style.maxHeight=t.state.ShowMore?"500vh":"".concat(t.previewHeight(),"px")},t.ShowMoreWork=function(){t.setState(function(e){return{ShowMore:!e.ShowMore}},function(){t.state.ShowMore||t.props.scroll(".third"),t._setHeight()})},t.state={ShowMore:!1,MyWorks:[{title:"Quicklee",imgSrc:"./img/quicklee.png",imgAlt:"quicklee app",href:"http://quicklee.surge.sh",description:" is a full-stack web app that I built for my capstone project at Suncoast Developers Guild. The front-end is built with React and SASS, the back-end is an API built with C#, .Net, Linq, and Entity."},{title:"Malibulawns",imgSrc:"./img/malibulawns.png",imgAlt:"malibu lawns",href:"https://www.malibulawns.com",description:" was my first commercial site that I designed and built. I used various resources for the design, and built it using React, React Router, and Styled Components."},{title:"Mine Sweeper",imgSrc:"./img/minesweeper.png",imgAlt:"./img/minesweeper.png",href:"http://mine-sweeper-justin.surge.sh/",description:" is a React based game using an API. This was from my first week of learning React at SDG. API can be slow at times, and have not set up for mobile use yet."}]},t}return Object(u.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement(N,{className:"third"},a.a.createElement("h1",null,"My Work"),a.a.createElement("div",{className:"work-card"},a.a.createElement("div",{className:"works"},this.state.MyWorks.map(function(n,t){return 0===t?a.a.createElement("section",{key:t,className:"firstSec"},a.a.createElement("a",{href:n.href,target:"_blank",rel:"noopener noreferrer",tabIndex:"5"},a.a.createElement("img",{src:n.imgSrc,alt:n.imgAlt})),a.a.createElement("p",null,a.a.createElement("a",{href:n.href,target:"_blank",rel:"noopener noreferrer",tabIndex:"5"},n.title),n.description)):a.a.createElement("section",{key:t,className:e.state.ShowMore?"unfaded":"faded"},a.a.createElement("a",{href:n.href,target:"_blank",rel:"noopener noreferrer",tabIndex:e.state.ShowMore?7:-1},a.a.createElement("img",{src:n.imgSrc,alt:n.imgAlt})),a.a.createElement("p",null,a.a.createElement("a",{href:n.href,target:"_blank",rel:"noopener noreferrer",tabIndex:e.state.ShowMore?7:-1},n.title),n.description))}),a.a.createElement("section",{className:this.state.ShowMore?"unfaded":"faded"},a.a.createElement("p",null," See even more on ",a.a.createElement("a",{className:"git",href:"https://github.com/JOLee83",target:"_blank",rel:"noopener noreferrer",tabIndex:this.state.ShowMore?7:-1},"GitHub")))),a.a.createElement("button",{className:"show",onClick:this.ShowMoreWork,tabIndex:"6"},this.state.ShowMore?"See Less":"See More Projects")))}}]),n}(r.Component);function z(){var e=Object(d.a)(["\n  min-height: 100vh;\n  background-image: linear-gradient(to bottom, rgb(25, 24, 43), rgb(25, 24, 43));\n  background-size: cover;\n  color: rgb(250, 250, 250);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  z-index: 100;\n  font-family: 'Chakra Petch', sans-serif;\n  padding-bottom: 4rem;\n  iframe {\n    max-width: 90vw;\n    border: none;\n  }\n  button {\n    font-family: 'Chakra Petch', sans-serif;\n    border: .1rem solid rgb(250, 250, 250);\n    border-radius: 5%;\n    padding-top: .15rem;\n    color: rgb(250, 250, 250);\n    background-color: transparent;\n    font-size: 1.2rem;\n    outline: none;\n    margin: .5rem 0 0 0;\n    padding: .2rem;\n    transition: all 0.5s ease-in-out;\n    margin-bottom: .2rem;\n    outline-color: rgb(250, 0, 0);\n    cursor: pointer;\n  }\n  a{\n    color: inherit;\n    text-decoration: inherit;\n    outline-color: rgb(250, 0, 0);\n    cursor: pointer;\n  }\n\ta i {\n    margin-right: .5rem;\n\t}\n  .resume-card {\n    position:relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n  }\n \n  @media (min-width: 500px) {\n    iframe {\n      max-width: 70vw;\n    }\n    button:hover {\n      background-color: rgb(250, 250, 250);\n      color: rgb(139, 0, 0);\n      transition: all 0.5s ease-in-out;\n    }\n  }\n  @media (min-width: 1200px) {\n    iframe {\n      max-width: 50vw;\n    }\n  }\n"]);return z=function(){return e},e}var O=f.a.div(z()),I=function(e){function n(){var e,t;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(c.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(a)))).frameWidth=function(){return document.querySelector(".frame").clientWidth},t.frameHeight=function(){return t.frameWidth()*(11/8.55)},t.componentDidMount=function(){window.addEventListener("resize",t._setHeight),setTimeout(t._setHeight,50)},t._setHeight=function(){return document.querySelector(".frame").style.minHeight="".concat(t.frameHeight(),"px")},t}return Object(u.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement(O,{className:"fourth"},a.a.createElement("h1",null,"Resume"),a.a.createElement("div",{className:"resume-card"},a.a.createElement("button",null,a.a.createElement("a",{className:"link",href:"https://drive.google.com/file/d/1TuEUxaJHyiaz4SVyjLEzUuuqmxlJBvIq/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",tabIndex:"8"},a.a.createElement("i",{className:"fas fa-file"}),"Download PDF")),a.a.createElement("iframe",{src:"https://drive.google.com/file/d/1TuEUxaJHyiaz4SVyjLEzUuuqmxlJBvIq/preview",className:"frame",width:"850",title:"My Resume"})))}}]),n}(r.Component);function C(){var e=Object(d.a)(["\n  min-height: 100vh;\n  background-image: linear-gradient(to bottom, rgb(25, 24, 43), rgb(40, 36, 119));\n  background-size: cover;\n  color: rgb(250, 250, 250);\n  .back {\n    min-height: 100vh;\n    background-position: bottom; \n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-image: url(./img/background/SeattleSkylineSilohetteMobile.png);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    z-index: 100;\n    font-size: 1.2rem;\n    font-family: 'Chakra Petch', sans-serif;\n    a {\n      margin: 10px;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      text-decoration: none;\n      color: rgb(250, 250, 250);\n      transition: all 0.5s ease-in-out;\n      outline-color: rgb(250, 0, 0);\n      cursor: pointer;\n    }\n    .card {\n      font-size: 0rem;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n    }\n    a i {\n      text-align: center;\n      border-radius: 50%;\n      border: 3px solid rgb(250, 250, 250);\n      overflow: hidden;\n      font-size: 4rem;\n      width: 6rem;\n      height: 5rem;\n      padding-top: 1rem;\n      transition: all 0.5s ease-in-out;\n    }\n    h1 {\n      margin: .5rem;\n    }\n    p {\n      max-width: 90vw;\n      margin: 0 0 1rem 0;\n      padding: 0 1.5rem;\n    }\n    .contact-card {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-evenly;\n      font-family: 'Chakra Petch', sans-serif;\n      flex: 1;\n      padding-bottom: 10rem;\n    }\n    .i-link {\n      max-width: 6rem;\n      margin: 0;\n    }\n  }\n  @media (min-width: 500px) {\n    .back{\n      display: flex;\n      justify-content: flex-start;\n      background-image: url(./img/background/SeattleSkylineSilohette.png);\n      .contact-card {\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n        max-width: 60vw;\n      }\n      a {\n        margin: 0 3rem .4rem 3rem;\n      }\n      .card {\n        font-size: 1.1rem;\n        text-align: center;\n        width: 300px;\n      }\n      h1 {\n        margin-top: 2rem;\n        font-size: 2rem;\n      }\n      p {\n        font-size: 1.3rem;\n        max-width: 50vw;\n        margin: 2rem 0;\n        text-align: center;\n      }\n      a i {\n        font-size: 4rem;\n        width: 6rem;\n        height: 5rem;\n        padding-top: 1rem;\n      }\n      i:hover {\n        background-color: rgb(250, 250, 250);\n        color: rgb(139, 0, 0);\n        transition: all 0.5s ease-in-out;\n      }\n      .text-link:hover {\n        color: rgb(139, 0, 0);\n      }\n      .text-link {\n        margin-top: 1rem;\n        transition: all 0.5s ease-in-out;\n      }\n    }\n  }\n  @media (min-width: 800px) {\n    .back{\n      background-image: url(./img/background/SeattleSkylineSilohette3.png);\n    }\n  }\n  @media (min-width: 1200px) {\n    .card {\n      /*fix for IE*/\n      height: 0px;\n    }\n  }\n"]);return C=function(){return e},e}var H=f.a.div(C()),T=function(e){function n(){return Object(l.a)(this,n),Object(c.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement(H,{className:"last"},a.a.createElement("div",{className:"back"},a.a.createElement("h1",null,"Contact Me"),a.a.createElement("p",null,"Start a Conversation, Looking to fill a developer position or just want a web site built, let's talk."),a.a.createElement("div",{className:"contact-card"},a.a.createElement("div",{className:"card"},a.a.createElement("a",{className:"i-link",href:"tel://19044729516",tabIndex:"9"},a.a.createElement("i",{className:"fas fa-mobile-alt"})),a.a.createElement("a",{className:"text-link",href:"tel://19044729516",tabIndex:"10"},"(904) 472-9516")),a.a.createElement("div",{className:"card"},a.a.createElement("a",{className:"i-link",href:"mailto:lee.justin.oliver@gmail.com?subject=Hi%20Justin,%20Nice%20Website",tabIndex:"9"},a.a.createElement("i",{className:"fas fa-envelope"})),a.a.createElement("a",{className:"text-link",href:"mailto:lee.justin.oliver@gmail.com?subject=Hi%20Justin,%20Nice%20Website",tabIndex:"10"},"lee.justin.oliver@gmail.com")),a.a.createElement("div",{className:"card"},a.a.createElement("a",{className:"i-link",href:"https://www.linkedin.com/in/justin-oliver-lee/",target:"_blank",rel:"noopener noreferrer",tabIndex:"9"},a.a.createElement("i",{className:"fab fa-linkedin"})),a.a.createElement("a",{className:"text-link",href:"https://www.linkedin.com/in/justin-oliver-lee/",target:"_blank",rel:"noopener noreferrer",tabIndex:"10"},"LinkedIn")))))}}]),n}(r.Component),P=function(e){function n(){var e,t;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(c.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(a))))._scroll=function(e){document.querySelector(e).scrollIntoView({behavior:"smooth"})},t}return Object(u.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){console.log("Welcome to my portfolio")}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(S,{scroll:this._scroll}),a.a.createElement(v,null),a.a.createElement(x,{scroll:this._scroll}),a.a.createElement(_,{scroll:this._scroll}),a.a.createElement(I,null),a.a.createElement(T,null))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(29);var R=t(14);o.a.render(a.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}),R.polyfill()}},[[16,2,1]]]);
//# sourceMappingURL=main.731fecdb.chunk.js.map