(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){e.exports=t(28)},20:function(e,n,t){},28:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(8),i=t.n(o),l=(t(20),t(1)),s=t(2),c=t(4),m=t(3),u=t(5),d=t(6),g=t(7);function h(){var e=Object(d.a)(["\n  height: 100vh;\n  background-image: url(./img/background/SeattleSkylineMobile.jpg);\n  background-size: cover;\n  color: rgb(250, 250, 250);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  animation: intro 1s ease-in;\n  .title-card {\n    line-height: 3rem;\n    margin-bottom: 10rem;\n  }\n  .name {\n    font-size: 1.8rem;\n    font-family: 'Muli', sans-serif;\n    text-transform: uppercase;\n  }\n  .job {\n    font-size: 1.7rem;\n    font-family: 'Chakra Petch', sans-serif;\n    text-transform: capitalize;\n  }\n  .faded {\n    opacity: 0;\n    transition: opacity .4s ease-in-out;\n  }\n  .fading{\n    opacity: 1;\n    transition: opacity .4s ease-in-out;\n  }\n  @media (min-width: 500px) {\n    background-image: url(./img/background/SeattleSkyline2.jpg);\n    .title-card {\n      line-height: 6rem;\n      text-shadow: -.1rem -.1rem .5rem rgb(25, 25, 25),\n        .1rem .1rem .5rem rgb(25, 25, 25),\n        .1rem .1rem .6rem rgb(25, 25, 25),\n        -.1rem -.1rem .5rem rgb(25, 25, 25);\n    }\n    .name {\n      font-size: 3rem;\n    }\n    .job {\n      font-size: 2.5rem;\n    }\n  }\n  @keyframes intro {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"]);return h=function(){return e},e}var f=g.a.div(h()),b=function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(c.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(r)))).state={fading:!1,title:"problem solver"},t.changeTitle=function(){t.timer=setTimeout(function(e){t.setState({fading:!0})},1e3),"problem solver"===t.state.title&&(t.timer=setTimeout(function(e){t.setState({title:"up for a challenge"}),t.setState({fading:!1})},2e3)),"up for a challenge"===t.state.title&&(t.timer=setTimeout(function(e){t.setState({title:"web developer"}),t.setState({fading:!1})},2e3)),"web developer"===t.state.title&&(t.timer=setTimeout(function(e){t.setState({title:"problem solver"}),t.setState({fading:!1})},2e3))},t}return Object(u.a)(n,e),Object(s.a)(n,[{key:"componentWillMount",value:function(){setTimeout(this.changeTitle,1e3),setInterval(this.changeTitle,4e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.changeTitle)}},{key:"render",value:function(){var e=this.state,n=e.title,t=e.fading;return r.a.createElement(f,{className:"top"},r.a.createElement("div",{className:"title-card"},r.a.createElement("div",{className:"name"},"justin oliver lee"),r.a.createElement("div",{className:"".concat(t?"faded job":"fading job")},n)))}}]),n}(a.Component);function p(){var e=Object(d.a)(["\n  padding-top: 1rem;\n  min-height: 100vh;\n  background-image: linear-gradient(to bottom, rgb(0, 0, 0), rgb(25, 25, 25));\n  background-size: cover;\n  color: rgb(250, 250, 250);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flexstart ;\n  z-index: 100;\n  font-size: 1.2rem;\n  img {\n    max-width:150px;\n    border-radius: 50%;\n    box-shadow: -.05rem -.05rem .1rem rgb(240, 240, 240),\n    .05rem .05rem .1rem rgb(240, 240, 240),\n    .05rem .05rem .1rem rgb(240, 240, 240),\n    -.05rem -.05rem .1rem rgb(240, 240, 240);\n  }\n  button {\n    font-family: 'Chakra Petch', sans-serif;\n\n    border: .1rem solid rgb(100, 100, 100), .1rem solid rgb(150, 150, 150), .1rem solid rgb(150, 150, 150), .1rem solid rgb(100, 100, 100);\n    border-radius: 5%;\n    padding-top: .15rem;\n    background-color: rgb(250, 250, 250);\n    color: rgb(0, 0, 0);\n    font-size: 1.2rem;\n    outline: none;\n    margin: .5rem 0 0 0;\n    cursor: pointer;\n    padding: .2rem;\n    transition: background-color .4s ease-in-out, color .4s ease-in-out;\n\n  }\n  .about-card {\n    position:relative;\n    font-family: 'Chakra Petch', sans-serif;\n    // padding: 0 2rem;\n    max-width: 90vw;\n\n  }\n  @media (min-width: 500px) {\n    img {\n      margin-top 2%;\n      max-width:300px;\n    }\n    .about-card {\n      max-width: 50vw;\n    }\n    button:hover {\n      background-color: rgb(139, 0, 0);\n      color: rgb(250, 250, 250);\n      transition: background-color .4s ease-in-out, color .4s ease-in-out;\n\n    }\n    p {\n      font-size: 1.2rem;\n    }\n  }\n"]);return p=function(){return e},e}var v=g.a.div(p()),w=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(c.a)(this,Object(m.a)(n).call(this,e))).ReadMoreAbout=function(){t.setState(function(e){return{ReadMore:!e.ReadMore}})},t.content=function(){return t.state.ReadMore?r.a.createElement("div",null,r.a.createElement("p",null,"A Full Stack Web Developer in the Tampa Bay Area. Recently, I decided to follow my passion for building and creating things which led me to increasing my coding knowledge around how to make user friendly, functional web applications. My past experience involved management in the Hospitality Industry, and I\u2019ve studied business management at USF.  Through that learning process, I have come to enjoy the process and challenges that creating websites and other applications bring, while increasing my understanding of methods to improve my development skills."),r.a.createElement("p",null,"Although I am more than capable of back-end development, my real passions are in front-end development. My eye for detail has been a real asset in building websites that are not only functional but also appealing to the end user. My current front-end skill set includes HTML5, CSS3, JavaScript, along with frameworks such as React. My back-end skill set includes C# and the .Net framework. At this time I am continuing my development knowledge surrounding React Native, React Redux, and Phaser3. My long term goal is to continue to expand my skill sets into other languages and frameworks."),r.a.createElement("p",null,"Development has proven to fit well with other pieces of my life. When I\u2019m not coding, I enjoy the challenge of doing a puzzle and playing games, along with expressing my creative nature with different arts and crafts. These outside interests help fuel my passion for front-end development."),r.a.createElement("p",null,"All that is missing from my career now is the opportunity to bring my passion for development to the right company. I look forward to hearing from you so that I can share additional examples of my work and show how I will be a great fit for your organization.")):r.a.createElement("div",null,r.a.createElement("p",null,"A Full Stack Web Developer in the Tampa Bay Area. Recently, I decided to follow my passion for building and creating things which led me to increasing my coding knowledge around how to make user friendly, functional web applications..."))},t.state={ReadMore:!1},t}return Object(u.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(v,{className:"second"},r.a.createElement("img",{src:"./img/profilepicture.jpg",alt:"my_profile_picture"}),r.a.createElement("div",{className:"about-card"},r.a.createElement("h1",null,"About Me"),this.content(),r.a.createElement("button",{className:"read",onClick:this.ReadMoreAbout},this.state.ReadMore?"Read Less":"Read More")))}}]),n}(a.Component);function k(){var e=Object(d.a)(["\nposition: fixed;\nwidth: 10%;\nz-index: 101;\nbutton {\n  text-align: center:\n  font-family: 'Chakra Petch', sans-serif;\n  border: .1rem solid rgb(100, 100, 100), .1rem solid rgb(150, 150, 150), .1rem solid rgb(150, 150, 150), .1rem solid rgb(100, 100, 100);\n  border-radius: 20%;\n  padding: .15rem .25rem 0 .25rem;\n  background-color: rgb(250, 250, 250);\n  color: rgb(0, 0, 0);\n  font-size: 1.5rem;\n  margin: .5rem 0 0 .5rem;\n  transition: background-color .4s ease-in-out;\n  max-width: 35px;\n}\na {\n  padding: 1rem;\n  cursor: pointer;\n  transition: color .4s ease-in-out;\n}\n.hidden, .shown {\n  margin-top: .3rem;\n  position: absolute;\n  background-image: linear-gradient(to top, rgb(0, 0, 0), rgb(25, 25, 25));\n  color: rgb(250, 250, 250);\n  display: flex;\n  font-size: 1.3rem;\n  width: 100vw;\n  z-index: 99;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  font-family: 'Chakra Petch', sans-serif;\n  box-shadow: -.05rem -.05rem .1rem rgb(240, 240, 240),\n  .05rem .05rem .1rem rgb(240, 240, 240),\n  .05rem .05rem .1rem rgb(240, 240, 240),\n  -.05rem -.05rem .1rem rgb(240, 240, 240);\n  transition: left .4s ease-in-out, color .4s ease-in-out;\n  z-index: none;\n}\n.hidden {\n  left: -2000%;\n}\n.shown {\n  left: 0;\n}\n.full-button {\n  display: none;\n}\n@media (min-width: 700px) {\n  .full-button{\n    display: flex;\n    font-family: 'Chakra Petch', sans-serif;\n  }\n  .mobile-button {\n    display:none;\n  }\n  .shown, .hidden {\n    font-size:1.3rem;\n    height: 80vh;\n    width:150px;\n  }\n  .hidden {\n    left: -1000%;\n  }\n  .shown {\n    left: 0;\n  }\n  button {\n    padding-top: 0;\n    border-radius: 10%;\n    max-width: 95px;\n\n  }\n  a:hover {\n    color: rgb(139, 0, 0);\n    transition: color .4s ease-in-out;\n  }\n  button:hover {\n    background-color: rgb(139, 0, 0);\n    color: rgb(250, 250, 250);\n    transition: background-color .4s ease-in-out, color .4s ease-in-out;\n\n  }\n}\n"]);return k=function(){return e},e}var y=g.a.div(k()),x=function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(c.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(r)))).state={popMenu:"hidden"},t._closeMenu=function(){t.setState(function(){return"shown"===t.state.popMenu?{popMenu:"hidden"}:void 0})},t._toggleMenu=function(){t.setState(function(){return"hidden"===t.state.popMenu?{popMenu:"shown"}:{popMenu:"hidden"}})},t}return Object(u.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this._closeMenu)}},{key:"render",value:function(){return r.a.createElement(y,null,r.a.createElement("button",{className:"mobile-button",onClick:this._toggleMenu},"hidden"===this.state.popMenu?r.a.createElement("i",{className:"fas fa-bars"}):r.a.createElement("i",{className:"fas fa-times"})),r.a.createElement("button",{className:"full-button",onClick:this._toggleMenu},"hidden"===this.state.popMenu?"Menu":"Close"),r.a.createElement("div",{className:this.state.popMenu},r.a.createElement("a",{onClick:this.props.home},"Home"),r.a.createElement("a",{onClick:this.props.second},"About Me"),r.a.createElement("a",{onClick:this.props.third},"My Work"),r.a.createElement("a",{onClick:this.props.fourth},"My Resume"),r.a.createElement("a",{onClick:this.props.last},"Contact Me")))}}]),n}(a.Component);function E(){var e=Object(d.a)(["\n  min-height: 100vh;\n  background-image: linear-gradient(to bottom,  rgb(25, 25, 25), rgb(25, 24, 43));\n  background-size: cover;\n  color: rgb(250, 250, 250);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  z-index: 100;\n  font-family: 'Chakra Petch', sans-serif;\n  img, p {\n    max-width: 90vw;\n    font-size: 1.2rem;\n  }\n  button {\n    font-family: 'Chakra Petch', sans-serif;\n\n    border: .1rem solid rgb(100, 100, 100), .1rem solid rgb(150, 150, 150), .1rem solid rgb(150, 150, 150), .1rem solid rgb(100, 100, 100);\n    border-radius: 5%;\n    padding-top: .15rem;\n    background-color: rgb(250, 250, 250);\n    color: rgb(0, 0, 0);\n    font-size: 1.2rem;\n    outline: none;\n    margin: .5rem 0 0 0;\n    cursor: pointer;\n    padding: .2rem;\n    transition: background-color .4s ease-in-out, color .4s ease-in-out;\n\n  }\n\n\n\ta {\n    color: rgb(250, 250, 250);\n    transition: color .4s ease-in-out;\n\n\t}\n  .work-card {\n    position:relative;\n  }\n  @media (min-width: 500px) {\n    img, p{\n      max-width: 50vw;\n    }\t\n\t\n\t\tp {\n\t\t\tfont-size: 1.3rem;\n\t\t\tmargin-bottom: 2rem;\n    }\n    a:hover {\n      color: rgb(139, 0, 0);\n      transition: color .4s ease-in-out;\n    }\n    button:hover {\n      background-color: rgb(139, 0, 0);\n      color: rgb(250, 250, 250);\n      transition: background-color .4s ease-in-out, color .4s ease-in-out;\n\n    }\n"]);return E=function(){return e},e}var j=g.a.div(E()),S=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(c.a)(this,Object(m.a)(n).call(this,e))).ShowMoreWork=function(){t.setState(function(e){return{ShowMore:!e.ShowMore}})},t.content=function(){return t.state.ShowMore?r.a.createElement("div",null,r.a.createElement("section",null,r.a.createElement("img",{src:"./img/malibulawns.png"}),r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.malibulawns.com",target:"_blank"},"MalibuLawns.com")," was my first commercial site that I designed and built. I used various resources for the design, and built it using React, React Router, and Styled Components.")),r.a.createElement("section",null,r.a.createElement("img",{src:"./img/minesweeper.png"}),r.a.createElement("p",null,r.a.createElement("a",{href:"http://mine-sweeper-justin.surge.sh/",target:"_blank"},"Mine Sweeper")," is a React based game using an API. This was from my first week of learning React at SDG. API can be slow at times, and have not set up for mobile use yet.")),r.a.createElement("section",null,r.a.createElement("img",{src:"./img/blackjack.png"}),r.a.createElement("p",null,r.a.createElement("a",{href:"http://black-jack-justin.surge.sh/",target:"_blank"},"Black Jack")," is a JavaScript based game. This was the culmination of my first week of learning JavaScript at SDG. Set up the CSS for mobile use, but looks great on large screens as well."),r.a.createElement("p",null," See even more on ",r.a.createElement("a",{className:"git",href:"https://github.com/JOLee83",target:"_blank",rel:"noopener noreferrer"},"GitHub")))):r.a.createElement("section",null,r.a.createElement("img",{src:"./img/malibulawns.png"}),r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.malibulawns.com",target:"_blank"},"MalibuLawns.com")," was my first commercial site that I designed and built. I used various resources for the design, and built it using React, React Router, and Styled Components."))},t.state={ShowMore:!1},t}return Object(u.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(j,{className:"third"},r.a.createElement("h1",null,"My Work"),r.a.createElement("div",{className:"work-card"},this.content(),r.a.createElement("button",{className:"show",onClick:this.ShowMoreWork},this.state.ShowMore?"See Less":"See More Projects")))}}]),n}(a.Component);function M(){var e=Object(d.a)(["\nmin-height: 100vh;\nbackground-image: linear-gradient(to bottom, rgb(25, 24, 43), rgb(25, 24, 43));\nbackground-size: cover;\nbackground-attachment: fix;\ncolor: rgb(250, 250, 250);\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: flex-start;\nz-index: 100;\nfont-family: 'Chakra Petch', sans-serif;\npadding-bottom: 4rem;\nimg {\n  max-width: 90vw;\n}\nbutton {\n  font-family: 'Chakra Petch', sans-serif;\n\n  border: .1rem solid rgb(100, 100, 100), .1rem solid rgb(150, 150, 150), .1rem solid rgb(150, 150, 150), .1rem solid rgb(100, 100, 100);\n  border-radius: 5%;\n  padding-top: .15rem;\n  background-color: rgb(250, 250, 250);\n  color: rgb(0, 0, 0);\n  font-size: 1.2rem;\n  outline: none;\n  margin: .5rem 0 0 0;\n  cursor: pointer;\n  padding: .2rem;\n  transition: background-color .4s ease-in-out, color .4s ease-in-out;\n  margin-bottom: .2rem;\n}\na{\n  color: inherit;\n  text-decoration: inherit;\n}\n\ta i {\n    margin-right: .5rem;\n\t}\n  .resume-card {\n    position:relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n  }\n  @media (min-width: 500px) {\n    img {\n      max-width: 70vw;\n    }\n    button:hover {\n      background-color: rgb(139, 0, 0);\n      color: rgb(250, 250, 250);\n      transition: background-color .4s ease-in-out, color .4s ease-in-out;\n\n    }\n    \n  }\n  @media (min-width: 1200px) {\n    img {\n      max-width: 50vw;\n    }\n  }\n"]);return M=function(){return e},e}var O=g.a.div(M()),z=function(e){function n(){return Object(l.a)(this,n),Object(c.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(O,{className:"fourth"},r.a.createElement("h1",null,"Resume"),r.a.createElement("div",{className:"resume-card"},r.a.createElement("button",null,r.a.createElement("a",{className:"link",href:"https://drive.google.com/file/d/1TuEUxaJHyiaz4SVyjLEzUuuqmxlJBvIq/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fas fa-file"}),"Download PDF")),r.a.createElement("a",{href:"https://drive.google.com/file/d/1TuEUxaJHyiaz4SVyjLEzUuuqmxlJBvIq/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"./img/Justin_Oliver_Lee_Resume.jpg",alt:"My Resume"}))))}}]),n}(a.Component);function C(){var e=Object(d.a)(["\n  min-height: 100vh;\n  background-image: linear-gradient(to bottom, rgb(25, 24, 43), rgb(40, 36, 119));\n  background-size: cover;\n  background-attachment: fix;\n  color: rgb(250, 250, 250);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  z-index: 100;\n  font-size: 1.2rem;\n  font-family: 'Chakra Petch', sans-serif;\n\ta {\n\t\tmargin: 10px;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n    align-items: center;\n    text-decoration: none;\n    color: rgb(250, 250, 250);\n\t\ttransition: border-color 0.5s ease-in-out, color 0.5s ease-in-out;\n\t}\n\taside {\n    font-size: 0rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\t}\n\ta i {\n\t\ttext-align: center;\n\t\tborder-radius: 50%;\n    border 3px solid rgb(250, 250, 250);\n    overflow: hidden;\n    font-size: 4rem;\n\t\twidth: 6rem;\n\t\theight: 5rem;\n    padding-top: 1rem;\n    transition: background-color .4s ease-in-out, color .4s ease-in-out;\n\t}\n\th1 {\n\t\tmargin-bottom: .5rem;\n\t}\n\tp {\n\t\tmargin: 0 0 1rem 0;\n\t\tpadding: 0 1.5rem;\n\t}\n  .contact-card {\n    position:relative;\n    font-family: 'Chakra Petch', sans-serif;\n  }\n  .i-link {\n    max-width: 6rem;\n    margin: 0;\n  }\n  @media (min-width: 500px) {\n    display: flex;\n    justify-content: flex-start;\n\t\t.contact-card {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n      flex-wrap: wrap;\n     \n\t\t}\n\t\ta {\n\t\t\tmargin: 0 3rem .4rem 3rem;\n\t\t}\n\t\taside {\n\t\t\tfont-size: 1.1rem;\n\t\t\ttext-align: center;\n\t\t}\n\t\th1 {\n\t\t\tfont-size: 2rem;\n\t\t}\n\t\tp {\n      font-size: 1.3rem;\n      max-width: 500px;\n\t\t\tmargin: 2rem 0 8rem 0;\n    }\n    a i {\n    font-size: 4rem;\n\t\twidth: 6rem;\n\t\theight: 5rem;\n    padding-top: 1rem;\n    }\n    i:hover {\n      background-color: rgb(139, 0, 0);\n      transition: background-color .4s ease-in-out;\n    }\n    .text-link:hover {\n      color: rgb(139, 0, 0);\n\n    }\n    .text-link {\n      margin-top: 1rem;\n      transition: color 0.5s ease-in-out;\n    }\n  }\n"]);return C=function(){return e},e}var N=g.a.div(C()),I=function(e){function n(){return Object(l.a)(this,n),Object(c.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(N,{className:"last"},r.a.createElement("h1",null,"Contact Me"),r.a.createElement("p",null,"Start a Conversation, Looking to fill a developer position or just want a web site built, let's talk."),r.a.createElement("div",{className:"contact-card"},r.a.createElement("aside",null,r.a.createElement("a",{className:"i-link",href:"tel://19044729516"},r.a.createElement("i",{className:"fas fa-mobile-alt"})),r.a.createElement("a",{className:"text-link",href:"tel://19044729516"},"(904) 472-9516")),r.a.createElement("aside",null,r.a.createElement("a",{className:"i-link",href:"mailto:lee.justin.oliver@gmail.com?subject=Hi%20Justin,%20Nice%20Website"},r.a.createElement("i",{className:"fas fa-envelope"})),r.a.createElement("a",{className:"text-link",href:"mailto:lee.justin.oliver@gmail.com?subject=Hi%20Justin,%20Nice%20Website"},"lee.justin.oliver@gmail.com")),r.a.createElement("aside",null,r.a.createElement("a",{className:"i-link",href:"https://www.linkedin.com/in/justin-oliver-lee/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-linkedin"})),r.a.createElement("a",{className:"text-link",href:"https://www.linkedin.com/in/justin-oliver-lee/"},"LinkedIn"))))}}]),n}(a.Component);function _(){var e=Object(d.a)(["\n  min-height: 100vh;\n  // overflow: visible;\n\n  background-color: rgb(40, 36, 119);\n  background-image: url(./img/background/SeattleSkylineSilohetteMobile.png);\n  background-position: bottom; \n  background-size: 100%;\n  background-repeat: no-repeat;\n  color: rgb(250, 250, 250);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  z-index: 100;\n  justify-content: center;\n  font-family: 'Chakra Petch', sans-serif;\n  .end-card {\n    position:relative;\n  \tdisplay: flex;\n\t\tjustify-content: center;\n    align-items: center;\n    flex: 1;\n  }\n  @media (min-width: 500px) {\n    min-height: 100vh;\n\n    // padding-top: 3rem;\n    background-image: url(./img/background/SeattleSkylineSilohette.png);\n\t\th1 {\n      font-size: 2rem;\n\t\t}\n  }\n  @media (min-width: 1200px) {\n    min-height: 75vh;\n\n    // padding-top: 3rem;\n    background-image: url(./img/background/SeattleSkylineSilohette3.png);\n\n\t\th1 {\n      font-size: 2rem;\n\t\t}\n  }\n"]);return _=function(){return e},e}var R=g.a.div(_()),T=function(e){function n(){return Object(l.a)(this,n),Object(c.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(R,{className:"very-last"},r.a.createElement("div",{className:"end-card"},r.a.createElement("h1",null,"The End")))}}]),n}(a.Component),P=function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(c.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(r))))._scrollTop=function(){document.querySelector(".top").scrollIntoView()},t._scrollSecond=function(){document.querySelector(".second").scrollIntoView()},t._scrollThird=function(){document.querySelector(".third").scrollIntoView()},t._scrollFourth=function(){document.querySelector(".fourth").scrollIntoView()},t._scrollLast=function(){document.querySelector(".last").scrollIntoView()},t._scrollVeryLast=function(){document.querySelector(".very-last").scrollIntoView()},t}return Object(u.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{home:this._scrollTop,second:this._scrollSecond,third:this._scrollThird,fourth:this._scrollFourth,last:this._scrollLast}),r.a.createElement(b,null),r.a.createElement(w,null),r.a.createElement(S,null),r.a.createElement(z,null),r.a.createElement(I,null),r.a.createElement(T,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,2,1]]]);
//# sourceMappingURL=main.bad14445.chunk.js.map