(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,n,t){e.exports=t(31)},21:function(e,n,t){},31:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(8),i=t.n(o),s=(t(21),t(1)),l=t(2),c=t(4),u=t(3),d=t(5),m=t(6),p=t(7);function h(){var e=Object(m.a)(["\n  font-size: 1.7rem;\n  font-family: 'Chakra Petch', sans-serif;\n  .cursor {\n    opacity: 1;\n    animation: blink 1s step-end infinite;\n  }\n  @media (min-width: 500px) {\n    font-size: 2.5rem;\n  }\n  @keyframes blink {\n    0% {\n      opacity: 0;\n    }\n    50% {\n      opacity: 1;\n    }\n  }\n"]);return h=function(){return e},e}var f=p.a.div(h()),g=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(c.a)(this,Object(u.a)(n).call(this,e)))._typeWriter=function(){t.state.erase?t.setState(function(e){return{cursor:--e.cursor}},function(){t._eraser()}):t.setState(function(e){return{cursor:++e.cursor}},function(){t._eraser()})},t._eraser=function(){t.state.cursor===t.state.titles[t.state.title].length?t.setState(function(){return{erase:!0}},function(){t._delay()}):0===t.state.cursor?t.setState(function(){return{erase:!1}},function(){t._changeTitle()}):t._delay()},t._changeTitle=function(){t.state.title===t.state.titles.length-1?t.setState(function(){return{title:0}},function(){t._delay()}):t.setState(function(e){return{title:++e.title}},function(){t._delay()})},t._delay=function(){t.state.erase&&t.state.cursor===t.state.titles[t.state.title].length-1?setTimeout(t._currentTitle,3e3):t.state.erase||1!==t.state.cursor?t._currentTitle():setTimeout(t._currentTitle,1e3)},t._currentTitle=function(){t.setState(function(){return{currentTitle:t.state.titles[t.state.title].slice(0,t.state.cursor)}},function(){t.state.erase?setTimeout(t._typeWriter,75):setTimeout(t._typeWriter,125)})},t.state={titles:["Problem Solver","Up For A Challenge","Web Developer","Problem Solver","Up For A Challenge","Web Developer","Na Na Na Batman!"],title:0,cursor:0,erase:!1,currentTitle:""},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){setTimeout(this._typeWriter,500)}},{key:"render",value:function(){return r.a.createElement(f,null,r.a.createElement("div",{className:"title"},this.state.currentTitle,r.a.createElement("span",{className:"cursor"},"|")))}}]),n}(a.Component);function b(){var e=Object(m.a)(["\n  height: 100vh;\n  background-image: url(./img/background/SeattleSkylineMobile.jpg);\n  background-size: cover;\n  color: rgb(250, 250, 250);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  .title-card {\n    line-height: 3rem;\n    margin-bottom: 10rem;\n  }\n  .name {\n    font-size: 1.8rem;\n    font-family: 'Muli', sans-serif;\n    text-transform: uppercase;\n  }\n  @media (min-width: 500px) {\n    background-image: url(./img/background/SeattleSkyline2.jpg);\n    .title-card {\n      line-height: 6rem;\n      text-shadow: -.1rem -.1rem .5rem rgb(25, 25, 25),\n        .1rem .1rem .5rem rgb(25, 25, 25),\n        .1rem .1rem .6rem rgb(25, 25, 25),\n        -.1rem -.1rem .5rem rgb(25, 25, 25);\n    }\n    .name {\n      font-size: 3rem;\n    }\n  }\n"]);return b=function(){return e},e}var x=p.a.div(b()),v=function(e){function n(){return Object(s.a)(this,n),Object(c.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(x,{className:"home"},r.a.createElement("div",{className:"title-card"},r.a.createElement("div",{className:"name"},"justin oliver lee"),r.a.createElement(g,null)))}}]),n}(a.Component);function w(){var e=Object(m.a)(["\n  padding-top: 1rem;\n  min-height: 100vh;\n  background-image: linear-gradient(to bottom, rgb(0, 0, 0), rgb(25, 25, 25));\n  background-size: cover;\n  color: rgb(250, 250, 250);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  z-index: 100;\n  font-size: 1.2rem;\n  img {\n    max-width:150px;\n    border-radius: 50%;\n    box-shadow: -.05rem -.05rem .1rem rgb(240, 240, 240),\n    .05rem .05rem .1rem rgb(240, 240, 240),\n    .05rem .05rem .1rem rgb(240, 240, 240),\n    -.05rem -.05rem .1rem rgb(240, 240, 240);\n  }\n  a {\n    color: rgb(250, 250, 250);\n    transition: color .4s ease-in-out;\n    outline-color: rgb(250, 0, 0);\n    cursor: pointer;\n\t}\n  button {\n    font-family: 'Chakra Petch', sans-serif;\n    border: .1rem solid rgb(250, 250, 250);\n    border-radius: 5%;\n    padding-top: .15rem;\n    color: rgb(250, 250, 250);\n    background-color: transparent;\n    font-size: 1.2rem;\n    margin: 1.5rem 0 0 0;\n    padding: .2rem;\n    transition: all 0.5s ease-in-out;\n    outline-color: rgb(250, 0, 0);\n    cursor: pointer;\n  }\n  .read {\n    .faded {\n        text-align: center;\n        opacity: 0;\n        transition: opacity 1s ease-in-out;\n      }\n      .unfaded {\n        text-align: center;\n        opacity: 1;\n        transition: opacity 1s ease-in-out;\n      }\n  }\n  .about-card {\n    position:relative;\n    font-family: 'Chakra Petch', sans-serif;\n    max-width: 90vw;\n  }\n  .text{\n    overflow: hidden;\n    transition: all 1.5s ease-in-out;\n    p {\n      margin-bottom: 0;\n      padding-bottom: 1em;\n    }\n    .unfaded {\n      opacity: 1;\n      transition: all 1s ease-in-out;\n    }\n    .faded {\n      opacity: 0;\n      transition: all 2s ease-in-out;\n    }\n  }\n  @media (min-width: 500px) {\n    img {\n      margin-top: 2%;\n      max-width:300px;\n    }\n    .about-card {\n      max-width: 50vw;\n    }\n    a:hover {\n      color: rgb(139, 0, 0);\n      transition: all 0.5s ease-in-out;\n    }\n    button:hover {\n      background-color: rgb(250, 250, 250);\n      color: rgb(139, 0, 0);\n      transition: all 0.5s ease-in-out;\n    }\n    p {\n      font-size: 1.2rem;\n    }\n  }\n"]);return w=function(){return e},e}var k=p.a.div(w()),y=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(c.a)(this,Object(u.a)(n).call(this,e))).previewHeight=function(){return document.querySelector(".firstP").clientHeight},t.componentDidMount=function(){window.addEventListener("resize",t._setHeight),setTimeout(t._setHeight,50)},t._setHeight=function(){return document.querySelector(".text").style.maxHeight=t.state.ReadMore?"500vh":"".concat(t.previewHeight(),"px")},t.ReadMoreAbout=function(){t.setState(function(e){return{ReadMore:!e.ReadMore}},function(){t.state.ReadMore||t.props.scroll(".about"),t._setHeight(),t._changeText()})},t._changeText=function(){t.setState(function(){return{fading:!0}}),setTimeout(function(e){"Read More"===t.state.buttonText?t.setState(function(){return{buttonText:"Read Less",fading:!1}}):t.setState(function(){return{buttonText:"Read More",fading:!1}})},1100)},t.state={ReadMore:!1,buttonText:"Read More",fading:!1},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(k,{className:"about"},r.a.createElement("img",{src:"./img/profilepicture.jpg",alt:"Justin Oliver Lee"}),r.a.createElement("div",{className:"about-card"},r.a.createElement("h1",null,"About Me"),r.a.createElement("div",{className:"text"},r.a.createElement("p",{className:"firstP"},"A Web Developer from Florida, currently living in the Greater Seattle Area. Looking for my next challenge, along with ways to get involved and give back to the local developer community."),r.a.createElement("div",{className:this.state.ReadMore?"unfaded":"faded"},r.a.createElement("p",null,"In 2018, I decided to follow my passion for building and creating things which led me to increasing my coding knowledge around how to make user friendly, functional web applications. Through that learning process, I have come to enjoy the process and challenges that creating websites and other applications bring, while increasing my understanding of methods to improve my development skills."),r.a.createElement("p",null,"When I first arrived in Seattle, I became involved with local meetup groups; like Seattle JS, Seattle JS Hackers, and Bellevue JS. I have been an organizer, host, and speaker for several events. Since becoming involved with meetup groups in early 2018, I have been hosting a monthly event called Code Katas. Code Katas is an event where I present the participants (developers of all skill levels) with a series of coding challenges. They then work with other participants or on their own to solve the challenges. Between each round in the series, the participants present their solutions to the group and talk about the code and how they came to find the solutions; it is good practice for any developer to prepare for interviews or see the different ways a single challenge can be solved. Along with Code Katas, I have been involved with events like open codes, lean coffees, and hackathons; I was even the MC and stage manager for the forum stage and Cascadia JS in 2019."),r.a.createElement("p",null,"Since arriving in Seattle, I have gained experience and grown as a front-end developer. My first job as a front-end developer was working as a subcontractor for Stackend Solutions (a SaaS company for startups). During my time at Stackend Solutions, I worked on and even led the front-end development for multiple clients. The first project I led was rebuilding a clients web page as a React app then connecting their Firebase backend from the iOS app they had already launched. I also led the initial build of front end of a React Native app that would serve as a concierge app for a startup based in Chicago. I next took a full time position as the primary front-end developer for pubGENIUS (an ad tech startup that offers ad ops as a service). My time at pubGENIUS was primarily spent working on internal and external web apps for managing ad stacks. The apps were built with TypeScript, using React, Node, Redux, MySQL, along with various packages. Although my title was front-end developer at pubGENIUS I was involved in back-end development as well; this mostly involved connecting the front end and making additions to and changing the apps services, routes, and database when needed. During my time working as a developer, I have gained an in-depth understanding of the various languages, frameworks, and technologies, along with computer science fundamentals. I am looking forward to continuing my journey of learning and growing as a developer."),r.a.createElement("p",null,"If you think I may be a good fit for your team, have a need for a freelance developer, or would like to become involved with the local developer community as a sponsor, host, speaker, or even just attend an event, I am ready for any challenge and more than happy to help in any way. I look forward to hearing from you or your organization."))),r.a.createElement("button",{className:"read",onClick:this.ReadMoreAbout,tabIndex:"3"},r.a.createElement("div",{className:this.state.fading?"faded":"unfaded"},this.state.buttonText))))}}]),n}(a.Component);function S(){var e=Object(m.a)(["\n  position: fixed;\n  z-index: 101;\n  .mobile-button, .full-button {\n    text-align: center;\n    font-family: 'Chakra Petch', sans-serif;\n    border-radius: 20%;\n    color: rgb(250, 250, 250);\n    background-color: transparent;\n    font-size: 1.5rem;\n    transition: background-color .4s ease-in-out;\n    outline-color: rgb(250, 0, 0);\n    cursor: pointer;\n  }\n  .mobile-button {\n    position: fixed;\n    top: 3px;\n    left: 3px;\n    margin: 2px;\n    overflow: visible;\n    border: none;\n    width: 41px;\n    height: 41px;\n    .bar {\n      position: fixed;\n      background-color: rgb(250, 250, 250);\n    }\n    .button-div {\n      position: fixed;\n      top: 8px;\n      left: 8px;\n      width: 31px;\n      height: 31px;\n      border: .1rem solid rgb(250, 250, 250);\n      border-radius: 5px;\n      z-index: 99;\n      background-color: rgba(0,0,0,.5);\n\n      box-shadow: -.1rem -.1rem 1rem rgb(25, 25, 25),\n          .1rem .1rem 1rem rgb(25, 25, 25),\n          .1rem .1rem 1rem rgb(25, 25, 25),\n          -.1rem -.1rem 1rem rgb(25, 25, 25);\n    }\n    .open-1-1 {\n      transition: all .5s linear;\n      width: 14px;\n      height: 3px;\n      border-radius:5px 0 0 5px;\n      top: 16px;\n      left: 11px;\n      z-index: 102;\n    }\n    .close-1-1 {\n      transition: all .5s linear;\n      width: 18px;\n      height: 3px;\n      border-radius:5px 0 0 5px;\n      transform: rotate(45deg);\n      top: 18px;\n      left: 11px;\n      z-index: 102;\n    }\n    .open-1-2 {\n      transition: all .5s linear;\n      width: 14px;\n      height: 3px;\n      border-radius:0 5px 5px 0;\n      top: 16px;\n      left: 25px;\n      z-index: 102;\n    }\n    .close-1-2 {\n      transition: all .5s linear;\n      width: 16px;\n      height: 3px;\n      border-radius:0 5px 5px 0;\n      transform: rotate(-45deg);\n      top: 18px;\n      left: 23px;\n      z-index: 102;\n    }\n    .open-2 {\n      transition: all .5s linear;\n      border-radius: 5px;\n      width: 28px;\n      height: 3px;\n      top: 24px;\n      left: 11px;\n      z-index: 101;\n    }\n    .close-2 {\n      transition: all .5s linear;\n      border-radius: 5px;\n      width: 33px;\n      height: 33px;\n      top: 8px;\n      left: 8px;\n      background-color: rgba(0,0,0,.5);\n    }\n    .open-3-1 {\n      transition: all .5s linear;\n      width: 14px;\n      height: 3px;\n      border-radius:5px 0 0 5px;\n      top: 32px;\n      left: 11px;\n      z-index: 102;\n    }\n    .close-3-1 {\n      transition: all .5s linear;\n      width: 16px;\n      height: 3px;\n      border-radius:5px 0 0 5px;\n      transform: rotate(-45deg);\n      top: 30px;\n      left: 11px;\n      z-index: 102;\n    }\n    .open-3-2 {\n      transition: all .5s linear;\n      width: 14px;\n      height: 3px;\n      border-radius:0 5px 5px 0;\n      top: 32px;\n      left: 25px;\n      z-index: 102;\n    }\n    .close-3-2 {\n      transition: all .5s linear;\n      width: 16px;\n      height: 3px;\n      border-radius:0 5px 5px 0;\n      transform: rotate(45deg);\n      top: 30px;\n      left: 23px;\n      z-index: 102;\n    }\n  }\n  .jump {\n    font-family: 'Chakra Petch', sans-serif;\n    color: rgb(250, 250, 250);\n    background-color: transparent;\n    border: none;\n    font-size: 1.3rem;\n    padding: 1rem;\n    text-decoration: none;\n    text-align: center;\n    cursor: pointer;\n    transition: color .4s ease-in-out;\n    outline-color: rgb(250, 0, 0);\n  }\n  .hidden, .shown {\n    margin-top: .3rem;\n    position: fixed;\n    top: 45px;\n    background-image: linear-gradient(to top, rgb(0, 0, 0), rgb(25, 25, 25));\n    color: rgb(250, 250, 250);\n    display: flex;\n    font-size: 1.3rem;\n    width: 100vw;\n    z-index: 99;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    font-family: 'Chakra Petch', sans-serif;\n    box-shadow: -.05rem -.05rem .1rem rgb(240, 240, 240),\n    .05rem .05rem .1rem rgb(240, 240, 240),\n    .05rem .05rem .1rem rgb(240, 240, 240),\n    -.05rem -.05rem .1rem rgb(240, 240, 240);\n    transition: all .4s ease-in-out;\n    z-index: none;\n  }\n  .hidden {\n    left: -150%;\n  }\n  .shown {\n    left: 0;\n  }\n  .full-button {\n    display: none;\n  }\n  @media (min-width: 700px) {\n    .full-button {\n      position: fixed;\n      top: 8px;\n      left: 8px;\n      border: .1rem solid rgb(250, 250, 250);\n      display: flex;\n      font-family: 'Chakra Petch', sans-serif;\n      padding: .15rem .3rem 0 .3rem;\n      width: 80px;\n      .faded {\n        text-align: center;\n        opacity: 0;\n        transition: opacity .4s ease-in-out;\n      }\n      .unfaded {\n        text-align: center;\n        opacity: 1;\n        transition: opacity .4s ease-in-out;\n      }\n    }\n    .mobile-button {\n      display:none;\n    }\n    .shown, .hidden {\n      font-size:1.3rem;\n      height: 80vh;\n      width:150px;\n    }\n    .hidden {\n      left: -100%;\n    }\n    .shown {\n      left: 0;\n    }\n    .full-button {\n      font-size: 1.7rem;\n      padding-top: 0;\n      border-radius: 10%;\n      max-width: 95px;\n    }\n    .jump:hover {\n      color: rgb(139, 0, 0);\n      transition: color .4s ease-in-out;\n    }\n    .full-button:hover {\n      background-color: rgb(250, 250, 250);\n      color: rgb(139, 0, 0);\n      transition: background-color .4s ease-in-out, color .4s ease-in-out;\n    }\n  }\n"]);return S=function(){return e},e}var E=p.a.div(S()),j=function(e){function n(){var e,t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(c.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={popMenu:!1,buttonText:"Menu",fading:!1},t._menu=function(e){t.props.scroll(e),t._closeMenu()},t._closeMenu=function(){t.state.popMenu&&(t.setState(function(){return{popMenu:!1}}),t._changeText())},t._toggleMenu=function(){t.setState(function(e){return{popMenu:!e.popMenu}}),t._changeText()},t._changeText=function(){t.setState(function(){return{fading:!0}}),setTimeout(function(e){"Menu"===t.state.buttonText?t.setState(function(){return{buttonText:"Close",fading:!1}}):t.setState(function(){return{buttonText:"Menu",fading:!1}})},500)},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this._closeMenu)}},{key:"render",value:function(){var e=this;return r.a.createElement(E,null,r.a.createElement("button",{className:"mobile-button",onClick:this._toggleMenu,tabIndex:"1",alt:"opens navigation menu"},r.a.createElement("div",{className:"button-div"}),r.a.createElement("div",{className:"bar ".concat(this.state.popMenu?"close-1-1":"open-1-1")}),r.a.createElement("div",{className:"bar ".concat(this.state.popMenu?"close-1-2":"open-1-2")}),r.a.createElement("div",{className:"bar ".concat(this.state.popMenu?"close-2":"open-2")}),r.a.createElement("div",{className:"bar ".concat(this.state.popMenu?"close-3-1":"open-3-1")}),r.a.createElement("div",{className:"bar ".concat(this.state.popMenu?"close-3-2":"open-3-2")})),r.a.createElement("button",{className:"full-button",onClick:this._toggleMenu,tabIndex:"1",alt:"opens navigation menu"},r.a.createElement("div",{className:this.state.fading?"faded":"unfaded"},this.state.buttonText)),r.a.createElement("div",{className:this.state.popMenu?"shown":"hidden"},r.a.createElement("button",{className:"jump",onClick:function(){return e._menu(".home")},tabIndex:this.state.popMenu?2:-1,alt:"scrolls to top of page"},"Home"),r.a.createElement("button",{className:"jump",onClick:function(){return e._menu(".about")},tabIndex:this.state.popMenu?2:-1,alt:"scrolls to about me section"},"About Me"),r.a.createElement("button",{className:"jump",onClick:function(){return e._menu(".skills")},tabIndex:this.state.popMenu?2:-1,alt:"scrolls to my skills section"},"My Skills"),r.a.createElement("button",{className:"jump",onClick:function(){return e._menu(".work")},tabIndex:this.state.popMenu?2:-1,alt:"scrolls to my work section"},"My Work"),r.a.createElement("button",{className:"jump",onClick:function(){return e._menu(".contact")},tabIndex:this.state.popMenu?2:-1,alt:"scrolls to contact section"},"Contact Me"),r.a.createElement("a",{className:"jump",href:"./Justin_Oliver_Lee_Resume.pdf",target:"_blank",rel:"noopener noreferrer",tabIndex:this.state.popMenu?2:-1,onClick:function(){return e._closeMenu()},alt:"opens resume PDF in new window"},"My Resume")))}}]),n}(a.Component);function M(){var e=Object(m.a)(["\n  min-height: 100vh;\n  background-image: linear-gradient(to bottom, rgb(25, 24, 43), rgb(25, 24, 43));\n  background-size: cover;\n  color: rgb(250, 250, 250);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  z-index: 100;\n  font-family: 'Chakra Petch', sans-serif;\n  font-size: 1.2rem;\n\n  h1 {\n    margin: 0 0 .5rem 0;\n  }\n  .subtitle {\n    margin: 0 0 .5rem 0;\n  }\n  img, p {\n    max-width: 90vw;\n    font-size: 1.2rem;\n  }\n  button {\n    font-family: 'Chakra Petch', sans-serif;\n    border: .1rem solid rgb(250, 250, 250);\n    border-radius: 5%;\n    padding-top: .15rem;\n    color: rgb(250, 250, 250);\n    background-color: transparent;\n    font-size: 1.2rem;\n    margin: 0;\n    padding: .2rem;\n    transition: all 0.5s ease-in-out;\n    outline-color: rgb(250, 0, 0);\n    cursor: pointer;\n  }\n\ta {\n    color: rgb(250, 250, 250);\n    transition: all 0.5s ease-in-out;\n    outline-color: rgb(250, 0, 0);\n    cursor: pointer;\n\t}\n  .work-card {\n    position:relative;\n  }\n  .works{\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n    transition: all 1.5s ease-in-out;\n    .unfaded {\n      opacity: 1;\n      transition: all 1s ease-in-out;\n    }\n    .faded {\n      opacity: 0;\n      transition: all 2s ease-in-out;\n    }\n  }\n  .show {\n    .faded {\n        text-align: center;\n        opacity: 0;\n        transition: opacity 1s ease-in-out;\n      }\n      .unfaded {\n        text-align: center;\n        opacity: 1;\n        transition: opacity 1s ease-in-out;\n      }\n  }\n  @media (min-width: 500px) {\n    img, p{\n      max-width: 50vw;\n    }\n    .work-card {\n      p {\n\t\t\tfont-size: 1.3rem;\n\t\t\tmargin-bottom: 2rem;\n      }\n    }\n\t\t\n    a:hover {\n      color: rgb(139, 0, 0);\n      transition: all 0.5s ease-in-out;\n    }\n    button:hover {\n      background-color: rgb(250, 250, 250);\n      color: rgb(139, 0, 0);\n      transition: all 0.5s ease-in-out;\n    }\n    \n  }\n"]);return M=function(){return e},e}var _=p.a.div(M()),N=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(c.a)(this,Object(u.a)(n).call(this,e))).previewHeight=function(){return document.querySelector(".firstSec").clientHeight},t.componentDidMount=function(){window.addEventListener("resize",t._setHeight),setTimeout(t._setHeight,500)},t._setHeight=function(){return document.querySelector(".works").style.maxHeight=t.state.ShowMore?"500vh":"".concat(t.previewHeight(),"px")},t.ShowMoreWork=function(){t.setState(function(e){return{ShowMore:!e.ShowMore}},function(){t.state.ShowMore||t.props.scroll(".work"),t._setHeight(),t._changeText()})},t._changeText=function(){t.setState(function(){return{fading:!0}}),setTimeout(function(e){"More Projects"===t.state.buttonText?t.setState(function(){return{buttonText:"Less Projects",fading:!1}}):t.setState(function(){return{buttonText:"More Projects",fading:!1}})},1100)},t.state={ShowMore:!1,MyWorks:[{title:"Quicklee",imgSrc:"./img/quicklee.png",imgAlt:"quicklee app",href:"http://quicklee.surge.sh",description:" is a full-stack web app that I built for my capstone project at Suncoast Developers Guild. The front-end is built with React and SASS, the back-end is an API built with C#, .Net, Linq, and Entity."},{title:"Malibulawns",imgSrc:"./img/malibulawns.png",imgAlt:"malibu lawns",href:"https://www.malibulawns.com",description:" was my first commercial site that I designed and built. I used various resources for the design, and built it using React, React Router, and Styled Components."},{title:"Mine Sweeper",imgSrc:"./img/minesweeper.png",imgAlt:"./img/minesweeper.png",href:"http://mine-sweeper-justin.surge.sh/",description:" is a React based game using an API. This was from my first week of learning React at SDG. API can be slow at times, and have not set up for mobile use yet."}],buttonText:"More Projects",fading:!1},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(_,{className:"work"},r.a.createElement("h1",null,"My Work"),r.a.createElement("p",{className:"subtitle"},"Some of my professional and personal projects"),r.a.createElement("div",{className:"work-card"},r.a.createElement("div",{className:"works"},this.state.MyWorks.map(function(n,t){return 0===t?r.a.createElement("section",{key:t,className:"firstSec"},r.a.createElement("a",{href:n.href,target:"_blank",rel:"noopener noreferrer",tabIndex:"5"},r.a.createElement("img",{src:n.imgSrc,alt:n.imgAlt})),r.a.createElement("p",null,r.a.createElement("a",{href:n.href,target:"_blank",rel:"noopener noreferrer",tabIndex:"5"},n.title),n.description)):r.a.createElement("section",{key:t,className:e.state.ShowMore?"unfaded":"faded"},r.a.createElement("a",{href:n.href,target:"_blank",rel:"noopener noreferrer",tabIndex:e.state.ShowMore?7:-1},r.a.createElement("img",{src:n.imgSrc,alt:n.imgAlt})),r.a.createElement("p",null,r.a.createElement("a",{href:n.href,target:"_blank",rel:"noopener noreferrer",tabIndex:e.state.ShowMore?7:-1},n.title),n.description))}),r.a.createElement("section",{className:this.state.ShowMore?"unfaded":"faded"},r.a.createElement("p",null," See even more on ",r.a.createElement("a",{className:"git",href:"https://github.com/JOLee83",target:"_blank",rel:"noopener noreferrer",tabIndex:this.state.ShowMore?7:-1},"GitHub")))),r.a.createElement("button",{className:"show",onClick:this.ShowMoreWork,tabIndex:"6"},r.a.createElement("div",{className:this.state.fading?"faded":"unfaded"},this.state.buttonText))))}}]),n}(a.Component);function O(){var e=Object(m.a)(["\n\tmin-height: 100vh;\n\tbackground-image: linear-gradient(\n\t\tto bottom,\n\t\trgb(25, 25, 25),\n\t\trgb(25, 24, 43)\n\t);\n\tbackground-size: cover;\n\tcolor: rgb(250, 250, 250);\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: flex-start;\n\tz-index: 100;\n\tfont-family: 'Chakra Petch', sans-serif;\n\tfont-size: 1.2rem;\n  \n\th1, p {\n\t\tmargin: 0 0 0.5rem 0;\n\t}\n\n\t.list {\n\t\twidth: 90%;\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\tjustify-content: center;\n\t\tfont-size: 1rem;\n\n\t\t.skill {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\ttext-align: center;\n\t\t\tmargin: 0.5rem;\n\t\t\tborder: 1px solid white;\n\t\t\twidth: 110px;\n\t\t\theight: 50px;\n\t\t\tborder-radius: 10px;\n\t\t}\n\n\t\t.unpop {\n\t\t\ttransform: scale(0);\n\t\t\topacity: 0;\n\t\t}\n\t}\n\n\t@media (min-width: 500px) {\n\t\t.list {\n\t\t\tmax-width: 70vw;\n\t\t\tmin-height: 70vh;\n\t\t\t.skill {\n\t\t\t\tfont-size: 1.6rem;\n\t\t\t\twidth: 220px;\n\t\t\t\theight: 75px;\n\t\t\t}\n\t\t}\n\t}\n\n\t@media (min-width: 1200px) {\n\t\t.list {\n\t\t\tmax-width: 50vw;\n\t\t}\n\t}\n"]);return O=function(){return e},e}var T=p.a.div(O()),I=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(c.a)(this,Object(u.a)(n).call(this,e)))._getOffset=function(){var e=document.querySelector(".list"),n=0;do{n+=e.offsetTop,e=e.offsetParent}while(e);return n},t._setYOffset=function(){var e=window.pageYOffset;t.setState(function(){return{yOffset:e}})},t._setThreshold=function(){var e=.3*document.querySelector(".list").clientHeight,n=t._getOffset()-window.innerHeight+e;t.setState(function(){return{threshold:n}})},t._pass=function(){var e=t.state,n=e.threshold,a=e.yOffset,r=e.postThreshold;a<n&&t.setState(function(e){return{pass:!0}}),a>r&&t.setState(function(e){return{pass:!1}})},t._setPostThreshold=function(){var e=2*document.querySelector(".list").clientHeight,n=t._getOffset()-window.innerHeight+e;t.setState(function(){return{postThreshold:n}})},t._set=function(){t._setYOffset(),t._setThreshold(),t._setPostThreshold(),t._pass()},t.componentDidMount=function(){setTimeout(t._set,500),window.addEventListener("resize",t._set),window.addEventListener("scroll",t._set)},t.state={skills:["HTML","CSS","JavaScript","TypeScript","C#","SQL","Git","RESTful API","SASS","LESS","Styled Components","Flex Box","BootStrap","Bulma","Material UI","React","Redux","React Native","Node",".Net","Postgres","MySQL","GitHub","GitLab","Azure Devops"],yOffset:0,threshold:0,postThreshold:0,pass:!0},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(T,{className:"skills"},r.a.createElement("h1",null,"My Skills"),r.a.createElement("p",null,"Project experience with"),r.a.createElement("div",{className:"list"},this.state.skills.map(function(n,t){var a=e.state,o=a.skills,i=a.threshold,s=a.yOffset,l=a.postThreshold,c=a.pass?{transition:"all .5s ".concat(.05*t,"s ease")}:{transition:"all .5s ".concat(.05*(o.length-t-1),"s ease")};return r.a.createElement("div",{style:c,className:s>i&&s<l?"skill":"skill unpop",key:t},n)})))}}]),n}(a.Component);function z(){var e=Object(m.a)(["\n  min-height: 100vh;\n  background-image: linear-gradient(to bottom, rgb(25, 24, 43), rgb(40, 36, 119));\n  background-size: cover;\n  color: rgb(250, 250, 250);\n  font-size: 1.2rem;\n\n  .back {\n    min-height: 100vh;\n    background-position: bottom; \n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-image: url(./img/background/SeattleSkylineSilohetteMobile.png);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    z-index: 100;\n    font-family: 'Chakra Petch', sans-serif;\n    a {\n      margin: 10px;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      text-decoration: none;\n      color: rgb(250, 250, 250);\n      transition: all 0.5s ease-in-out;\n      outline-color: rgb(250, 0, 0);\n      cursor: pointer;\n    }\n    .card {\n      font-size: 0rem;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n    }\n    a i {\n      text-align: center;\n      border-radius: 50%;\n      border: 3px solid rgb(250, 250, 250);\n      overflow: hidden;\n      font-size: 4rem;\n      width: 6rem;\n      height: 5rem;\n      padding-top: 1rem;\n      transition: all 0.5s ease-in-out;\n    }\n    h1 {\n      margin: .5rem;\n    }\n    p {\n      max-width: 90vw;\n      margin: 0 0 1rem 0;\n      padding: 0 1.5rem;\n    }\n    .contact-card {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-evenly;\n      font-family: 'Chakra Petch', sans-serif;\n      flex: 1;\n    }\n    .i-link {\n      max-width: 6rem;\n      margin: 0;\n    }\n  }\n  @media (min-width: 500px) {\n    .back{\n      display: flex;\n      justify-content: flex-start;\n      background-image: url(./img/background/SeattleSkylineSilohette.png);\n      .contact-card {\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n        max-width: 60vw;\n      }\n      a {\n        margin: 0 3rem .4rem 3rem;\n      }\n      .card {\n        text-align: center;\n        width: 300px;\n      }\n      h1 {\n        margin-top: 2rem;\n      }\n      p {\n        font-size: 1.3rem;\n        max-width: 50vw;\n        margin: 2rem 0;\n        text-align: center;\n      }\n      a i {\n        font-size: 4rem;\n        width: 6rem;\n        height: 5rem;\n        padding-top: 1rem;\n      }\n      i:hover {\n        background-color: rgb(250, 250, 250);\n        color: rgb(139, 0, 0);\n        transition: all 0.5s ease-in-out;\n      }\n      .text-link:hover {\n        color: rgb(139, 0, 0);\n      }\n      .text-link {\n        margin-top: 1rem;\n        transition: all 0.5s ease-in-out;\n      }\n    }\n  }\n  @media (min-width: 800px) {\n    .back{\n      background-image: url(./img/background/SeattleSkylineSilohette3.png);\n    }\n    .text-link {\n      font-size: 1.2rem;\n    }\n  }\n  @media (min-width: 1200px) {\n    .card {\n      /*fix for IE*/\n      height: 0px;\n    }\n  }\n"]);return z=function(){return e},e}var C=p.a.div(z()),P=function(e){function n(){return Object(s.a)(this,n),Object(c.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(C,{className:"contact"},r.a.createElement("div",{className:"back"},r.a.createElement("h1",null,"Contact Me"),r.a.createElement("p",null,"Start a Conversation, Looking to fill a developer position or just want a web site built, let's talk."),r.a.createElement("div",{className:"contact-card"},r.a.createElement("div",{className:"card"},r.a.createElement("a",{className:"i-link",href:"tel://19044729516",tabIndex:"9"},r.a.createElement("i",{className:"fas fa-mobile-alt"})),r.a.createElement("a",{className:"text-link",href:"tel://19044729516",tabIndex:"10"},"(904) 472-9516")),r.a.createElement("div",{className:"card"},r.a.createElement("a",{className:"i-link",href:"mailto:lee.justin.oliver@gmail.com?subject=Hi%20Justin,%20Nice%20Website",tabIndex:"9"},r.a.createElement("i",{className:"fas fa-envelope"})),r.a.createElement("a",{className:"text-link",href:"mailto:lee.justin.oliver@gmail.com?subject=Hi%20Justin,%20Nice%20Website",tabIndex:"10"},"lee.justin.oliver@gmail.com")),r.a.createElement("div",{className:"card"},r.a.createElement("a",{className:"i-link",href:"https://www.linkedin.com/in/justin-oliver-lee/",target:"_blank",rel:"noopener noreferrer",tabIndex:"9"},r.a.createElement("i",{className:"fab fa-linkedin"})),r.a.createElement("a",{className:"text-link",href:"https://www.linkedin.com/in/justin-oliver-lee/",target:"_blank",rel:"noopener noreferrer",tabIndex:"10"},"LinkedIn")))))}}]),n}(a.Component),R=function(e){function n(){var e,t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(c.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r))))._scroll=function(e){document.querySelector(e).scrollIntoView({behavior:"smooth"})},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){console.log("Welcome to my portfolio")}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{scroll:this._scroll}),r.a.createElement(v,null),r.a.createElement(y,{scroll:this._scroll}),r.a.createElement(I,null),r.a.createElement(N,{scroll:this._scroll}),r.a.createElement(P,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(29);var H=t(14);i.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}),H.polyfill()}},[[16,2,1]]]);
//# sourceMappingURL=main.3a97ab14.chunk.js.map