(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){e.exports=t(28)},20:function(e,n,t){},28:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(8),i=t.n(o),l=(t(20),t(1)),s=t(2),c=t(4),m=t(3),d=t(5),u=t(6),h=t(7);function g(){var e=Object(u.a)(["\n  height: 100vh;\n  background-image: url(./img/background/SeattleSkylineMobile.jpg);\n  background-size: cover;\n  color: rgb(250, 250, 250);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  animation: intro 1s ease-in;\n  .title-card {\n    line-height: 3rem;\n    margin-bottom: 10rem;\n  }\n  .name {\n    font-size: 1.8rem;\n    font-family: 'Muli', sans-serif;\n    text-transform: uppercase;\n  }\n  .job {\n    font-size: 1.7rem;\n    font-family: 'Chakra Petch', sans-serif;\n    text-transform: capitalize;\n  }\n  @media (min-width: 500px) {\n    background-image: url(./img/background/SeattleSkyline2.jpg);\n    .title-card {\n      line-height: 6rem;\n\n      text-shadow: -.1rem -.1rem .5rem rgb(25, 25, 25),\n        .1rem .1rem .5rem rgb(25, 25, 25),\n        .1rem .1rem .6rem rgb(25, 25, 25),\n        -.1rem -.1rem .5rem rgb(25, 25, 25);\n    }\n    .name {\n      font-size: 3rem;\n    }\n    .job {\n      font-size: 2.5rem;\n    }\n  }\n  @keyframes intro {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"]);return g=function(){return e},e}var f=h.a.div(g()),p=function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(c.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(r))))._scrollDown=function(){document.querySelector(".second").scrollIntoView()},t}return Object(d.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(f,{className:"top"},r.a.createElement("div",{className:"title-card"},r.a.createElement("div",{className:"name"},"justin oliver lee"),r.a.createElement("div",{className:"job"},"web developer")))}}]),n}(a.Component);function b(){var e=Object(u.a)(["\n  padding-top: 1rem;\n  min-height: 100vh;\n  background-image: linear-gradient(to bottom, rgb(0, 0, 0), rgb(25, 25, 25));\n  background-size: cover;\n  color: rgb(250, 250, 250);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flexstart ;\n  z-index: 100;\n  font-size: 1.2rem;\n\n  img {\n    max-width:150px;\n    border-radius: 50%;\n    box-shadow: -.05rem -.05rem .1rem rgb(240, 240, 240),\n    .05rem .05rem .1rem rgb(240, 240, 240),\n    .05rem .05rem .1rem rgb(240, 240, 240),\n    -.05rem -.05rem .1rem rgb(240, 240, 240);\n  }\n  .about-card {\n    position:relative;\n    font-family: 'Chakra Petch', sans-serif;\n    padding: 0 2rem;\n  }\n  .read {\n    border: .1rem solid rgb(250, 250, 250);\n    padding: .1rem;\n    max-width: 100px;\n    text-align: center;\n    border-radius: 5%;\n    transition: background-color .4s ease-in-out,\n      border-color.4s ease-in-out,\n      color .4s ease-in-out;\n  }\n  .read:active {\n    background-color: rgb(250, 250, 250);\n    border-color: rgb(0, 0, 0);\n    color: rgb(0, 0, 0);\n  }\n\n  @media (min-width: 500px) {\n    img {\n      margin-top 2%;\n      max-width:300px;\n    }\n    .about-card {\n      max-width: 500px;\n    }\n    \n    .up, .down {\n      display: none;\n    }\n    .read:hover {\n      color: rgb(139, 0, 0);\n      cursor: pointer;\n    }\n    p {\n      font-size: 1.2rem;\n    }\n  }\n"]);return b=function(){return e},e}var w=h.a.div(b()),v=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(c.a)(this,Object(m.a)(n).call(this,e))).ReadMoreAbout=function(){t.setState(function(e){return{ReadMore:!e.ReadMore}})},t.content=function(){return t.state.ReadMore?r.a.createElement("div",null,r.a.createElement("p",null,"I\u2019m Justin Oliver Lee, a Full Stack Web Developer in the Tampa Bay Area. My past experience involved management in the Hospitality Industry, and I\u2019ve studied business management at USF. Recently, I decided to follow my passion for building and creating things which led me to increasing my coding knowledge around how to make user friendly, functional web applications. Through that learning process, I have come to enjoy the process and challenges that creating websites and other applications bring, while increasing my understanding of methods to improve my development skills."),r.a.createElement("p",null,"Although I am more than capable of back-end development, my real passions are in front-end development. My eye for detail has been a real asset in building websites that are not only functional but also appealing to the end user. My current front-end skill set includes HTML5, CSS3, JavaScript, along with frameworks such as React. My back-end skill set includes C# and the .Net framework. At this time I am continuing my development knowledge surrounding React Native, React Redux, and Phaser3. My long term goal is to continue to expand my skill sets into other languages and frameworks."),r.a.createElement("p",null,"Development has proven to fit well with other pieces of my life. When I\u2019m not coding, I enjoy the challenge of doing a puzzle and playing games, along with expressing my creative nature with different arts and crafts. These outside interests help fuel my passion for front-end development."),r.a.createElement("p",null,"All that is missing from my career now is the opportunity to bring my passion for development to the right company. I look forward to hearing from you so that I can share additional examples of my work and show how I will be a great fit for your organization.")):r.a.createElement("div",null,r.a.createElement("p",null,"I\u2019m Justin Oliver Lee, a Full Stack Web Developer in the Tampa Bay Area. My past experience involved..."))},t.state={ReadMore:!1},t}return Object(d.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(w,{className:"second"},r.a.createElement("img",{src:"./img/profilepicture.jpg",alt:"my_profile_picture"}),r.a.createElement("div",{className:"about-card"},r.a.createElement("h1",null,"About Me"),this.content(),r.a.createElement("p",{className:"read",onClick:this.ReadMoreAbout},this.state.ReadMore?"Read Less":"Read More")))}}]),n}(a.Component);function y(){var e=Object(u.a)(["\nposition: fixed;\nwidth: 10%;\n\nbutton {\n  border: none;\n  background-color: transparent;\n  color: rgb(250, 250, 250);\n  font-size: 1.5rem;\n  outline: none;\n  margin: .5rem 0 0 0;\n  cursor: pointer;\n}\na {\n  padding: 1rem;\n  cursor: pointer;\n}\n.hidden, .shown {\n  position: absolute;\n  background-image: linear-gradient(to top, rgb(0, 0, 0), rgb(25, 25, 25));\n  color: rgb(250, 250, 250);\n  display: flex;\n  font-size: 1.3rem;\n  // height: 80vh;\n  width: 100vw;\n  z-index: 99;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  font-family: 'Chakra Petch', sans-serif;\n  \n  box-shadow: -.05rem -.05rem .1rem rgb(240, 240, 240),\n  .05rem .05rem .1rem rgb(240, 240, 240),\n  .05rem .05rem .1rem rgb(240, 240, 240),\n  -.05rem -.05rem .1rem rgb(240, 240, 240);\n  transition: left .4s ease-in-out;\n  z-index: none;\n\n}\n.hidden {\n  left: -1000%;\n  \n}\n.shown {\n  left: 0;\n}\n.full-button {\n  display: none;\n}\n@media (min-width: 700px) {\n \n  .full-button{\n    display: flex;\n    font-family: 'Chakra Petch', sans-serif;\n\n  }\n  .mobile-button {\n    display:none;\n  }\n  .shown, .hidden {\n    font-size:1.3rem;\n    height: 80vh;\n\n    width:150px;\n\n  }\n  .hidden {\n    left: -1000%;\n    \n  }\n  .shown {\n    left: 0;\n  }\n}\n"]);return y=function(){return e},e}var k=h.a.div(y()),x=function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(c.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(r)))).state={popMenu:"hidden"},t._closeMenu=function(){t.setState(function(){return"shown"===t.state.popMenu?{popMenu:"hidden"}:void 0})},t._toggleMenu=function(){t.setState(function(){return"hidden"===t.state.popMenu?{popMenu:"shown"}:{popMenu:"hidden"}})},t}return Object(d.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this._closeMenu)}},{key:"render",value:function(){return r.a.createElement(k,null,r.a.createElement("button",{className:"mobile-button",onClick:this._toggleMenu},"hidden"===this.state.popMenu?r.a.createElement("i",{className:"fas fa-bars"}):r.a.createElement("i",{className:"fas fa-times"})),r.a.createElement("button",{className:"full-button",onClick:this._toggleMenu},"hidden"===this.state.popMenu?"Menu":"Close"),r.a.createElement("div",{className:this.state.popMenu},r.a.createElement("a",{onClick:this.props.home},"Home"),r.a.createElement("a",{onClick:this.props.second},"About Me"),r.a.createElement("a",{onClick:this.props.third},"My Work"),r.a.createElement("a",{onClick:this.props.fourth},"My Resume"),r.a.createElement("a",{onClick:this.props.last},"Contact Me")))}}]),n}(a.Component);function E(){var e=Object(u.a)(["\n  min-height: 100vh;\n  background-image: linear-gradient(to bottom,  rgb(25, 25, 25), rgb(25, 24, 43));\n  background-size: cover;\n  color: rgb(250, 250, 250);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  z-index: 100;\n  font-family: 'Chakra Petch', sans-serif;\n\n  img, p {\n    max-width: 90vw;\n    font-size: 1.2rem;\n\n  }\n  .show {\n    border: .1rem solid rgb(250, 250, 250);\n    padding: .1rem;\n    max-width: 120px;\n    text-align: center;\n    border-radius: 5%;\n    transition: background-color .4s ease-in-out,\n      border-color.4s ease-in-out,\n      color .4s ease-in-out;\n  }\n  .show:active {\n    background-color: rgb(250, 250, 250);\n    border-color: rgb(0, 0, 0);\n    color: rgb(0, 0, 0);\n  }\n\n\n\ta {\n    // text-decoration: none;\n    color: rgb(250, 250, 250);\n\n\t}\n\n\t// a i {\n  //   margin-bottom: 1rem;\n\t// \tfont-size: 3rem;\n\t// \twidth: 4.5rem;\n\t// \theight: 3.75rem;\n\t// \ttext-align: center;\n\t// \tpadding-top: .75rem;\n\t// \tborder-radius: 50%;\n\t// \tborder 3px solid rgb(250, 250, 250);\n\t// \ttransition: border-color 0.5s ease-in-out, color 0.5s ease-in-out;\n\n\t// }\n\n\n\n\n  .work-card {\n    position:relative;\n    \n\n\n  }\n  // .i-link {\n  //   max-width: 6rem;\n  //   margin: 0;\n  // }\n  @media (min-width: 500px) {\n    padding-top: 3rem;\n    img, p{\n      max-width: 50vw;\n    }\t\n\t\t.show:hover {\n      color: rgb(139, 0, 0);\n      cursor: pointer;\n    }\n\t\t// a {\n\t\t// \tmargin: 0 3rem .4rem 3rem;\n\t\t// }\n\t\n\t\t// h1 {\n\t\t// \tfont-size: 2rem;\n\t\t// }\n\t\tp {\n\t\t\tfont-size: 1.3rem;\n\t\t\tmargin-bottom: 6rem;\n    }\n    // a i {\n    // font-size: 4rem;\n\t\t// width: 6rem;\n\t\t// height: 5rem;\n    // padding-top: 1rem;\n    // }\n\t\t// i:hover {\n    //   color: rgb(139, 0, 0);\n\t\t// \tborder-color: rgb(139, 0, 0);\n    // }\n    a:hover {\n      color: rgb(139, 0, 0);\n    }\n    \n\n"]);return E=function(){return e},e}var j=h.a.div(E()),S=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(c.a)(this,Object(m.a)(n).call(this,e))).ShowMoreWork=function(){t.setState(function(e){return{ShowMore:!e.ShowMore}})},t.content=function(){return t.state.ShowMore?r.a.createElement("div",null,r.a.createElement("section",null,r.a.createElement("img",{src:"./img/malibulawns.png"}),r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.malibulawns.com",target:"_blank"},"MalibuLawns.com")," was my first commercial site that I designed and built. I used various resources for the design, and built it using React, React Router, and Styled Components.")),r.a.createElement("section",null,r.a.createElement("img",{src:"./img/minesweeper.png"}),r.a.createElement("p",null,r.a.createElement("a",{href:"http://mine-sweeper-justin.surge.sh/",target:"_blank"},"Mine Sweeper")," is a React based game using an API. This was from my first week of learning React at SDG. API can be slow at times, and have not set up for mobile use yet.")),r.a.createElement("section",null,r.a.createElement("img",{src:"./img/blackjack.png"}),r.a.createElement("p",null,r.a.createElement("a",{href:"http://black-jack-justin.surge.sh/",target:"_blank"},"Black Jack")," is a JavaScript based game. This was the culmination of my first week of learning JavaScript at SDG. Set up the CSS for mobile use, but looks great on large screens as well."),r.a.createElement("p",null," See even more on ",r.a.createElement("a",{className:"git",href:"https://github.com/JOLee83",target:"_blank",rel:"noopener noreferrer"},"GitHub")))):r.a.createElement("section",null,r.a.createElement("img",{src:"./img/malibulawns.png"}),r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.malibulawns.com",target:"_blank"},"MalibuLawns.com")," was my first commercial site that I designed and built. I used various resources for the design, and built it using React, React Router, and Styled Components."))},t.state={ShowMore:!1},t}return Object(d.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(j,{className:"third"},r.a.createElement("h1",null,"My Work"),r.a.createElement("div",{className:"work-card"},this.content(),r.a.createElement("p",{className:"show",onClick:this.ShowMoreWork},this.state.ShowMore?"See Less":"See More")))}}]),n}(a.Component);function M(){var e=Object(u.a)(["\nmin-height: 100vh;\nbackground-image: linear-gradient(to bottom, rgb(25, 24, 43), rgb(25, 24, 43));\nbackground-size: cover;\nbackground-attachment: fix;\ncolor: rgb(250, 250, 250);\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: flex-start;\nz-index: 100;\nfont-family: 'Chakra Petch', sans-serif;\nimg {\n  // max-height: 80vh;\n  max-width: 90vw;\n}\n  \n  \n\n\t.link {\n\t\tmargin: 10px;\n\t\tdisplay: flex;\n\t\t// flex-direction: column;\n    justify-content: center;\n    text-decoration: none;\n    color: rgb(250, 250, 250);\n    \ttransition: color 0.5s ease-in-out;\n\n\t}\n\n\ta i {\n    margin-right: .5rem;\n\t// \tfont-size: 3rem;\n\t// \twidth: 4.5rem;\n\t// \theight: 3.75rem;\n\t// \ttext-align: center;\n\t// \tpadding-top: .75rem;\n\t// \tborder-radius: 50%;\n\t// \tborder 3px solid rgb(250, 250, 250);\n\n\t}\n\n\n\n\n  .resume-card {\n    position:relative;\n    \n\n\n  }\n\n\n  .fa-angle-double-up, .fa-angle-double-down{\n    animation: nextpage 7s infinite linear;\n\n  }\n  \n  @media (min-width: 500px) {\n    padding-top: 3rem;\t\n    img {\n      max-width: 70vw;\n    }\n\t\t\n\t\t\n\t\n\t\n\n    a:hover {\n      color: rgb(139, 0, 0);\n    }\n    \n  \n \n    }\n    @media (min-width: 1200px) {\n      img {\n        max-width: 40vw;\n      }\n    }\n  }\n"]);return M=function(){return e},e}var O=h.a.div(M()),z=function(e){function n(){return Object(l.a)(this,n),Object(c.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(O,{className:"fourth"},r.a.createElement("h1",null,"Resume"),r.a.createElement("div",{className:"resume-card"},r.a.createElement("a",{className:"link",href:"https://drive.google.com/file/d/1TuEUxaJHyiaz4SVyjLEzUuuqmxlJBvIq/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fas fa-file"}),"Download PDF"),r.a.createElement("a",{href:"https://drive.google.com/file/d/1TuEUxaJHyiaz4SVyjLEzUuuqmxlJBvIq/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:"./img/Justin_Oliver_Lee_Resume.jpg",alt:"My Resume"}))))}}]),n}(a.Component);function _(){var e=Object(u.a)(["\n  min-height: 100vh;\n  background-image: linear-gradient(to bottom, rgb(25, 24, 43), rgb(40, 36, 119));\n  background-size: cover;\n  background-attachment: fix;\n  color: rgb(250, 250, 250);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n  justify-content: center;\n  font-size: 1.2rem;\n  font-family: 'Chakra Petch', sans-serif;\n\n\n\ta {\n\t\tmargin: 10px;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n    align-items: center;\n    text-decoration: none;\n    color: rgb(250, 250, 250);\n\t\ttransition: border-color 0.5s ease-in-out, color 0.5s ease-in-out;\n\n\t}\n\taside {\n    font-size: 0rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\t}\n\ta i {\n    // margin-bottom: 1rem;\n\t\ttext-align: center;\n\t\tborder-radius: 50%;\n\t\tborder 3px solid rgb(250, 250, 250);\n    font-size: 4rem;\n\t\twidth: 6rem;\n\t\theight: 5rem;\n    padding-top: 1rem;\n\t}\n\th1 {\n\t\t// margin: 1rem;\n\t\t// text-align: center;\n\t\t// font-size: 1.5rem;\n\t\t// font-style: italic;\n\t\t// font-weight: normal;\n\t\tmargin-bottom: .5rem;\n\t}\n\tp {\n\t\tmargin: 0 0 0 0;\n\t\tpadding: 0 1.5rem;\n\t\t// text-align: center;\n\t}\n  .contact-card {\n    position:relative;\n    font-family: 'Chakra Petch', sans-serif;\n  }\n  .up {\n    display: flex;\n    justify-content: center;\n    align-items:flex-start;\n    font-size:3rem;\n  }\n  .down {\n    display: flex;\n    justify-content: center;\n    align-items:flex-start;\n    flex: 1;\n    font-size:3rem;\n    // margin-bottom: 3rem;\n\n  }\n\n  .fa-angle-double-up, .fa-angle-double-down{\n    animation: nextpage 7s infinite linear;\n\n  }\n  .i-link {\n    max-width: 6rem;\n    // max-height: 6rem;\n    margin: 0;\n  }\n  @media (min-width: 500px) {\n    padding-top: 3rem;\t\n\t\tdiv {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\tflex-wrap: wrap;\n\t\t}\n\t\ta {\n\t\t\tmargin: 0 3rem .4rem 3rem;\n\t\t}\n\t\taside {\n\t\t\tfont-size: 1.1rem;\n\t\t\ttext-align: center;\n\t\t}\n\t\th1 {\n\t\t\tfont-size: 2rem;\n\t\t}\n\t\tp {\n      font-size: 1.3rem;\n      max-width: 500px;\n\t\t\tmargin-bottom: 6rem;\n    }\n    a i {\n    font-size: 4rem;\n\t\twidth: 6rem;\n\t\theight: 5rem;\n    padding-top: 1rem;\n    }\n\t\t// i:hover {\n    //   color: rgb(139, 0, 0);\n\t\t// \tborder-color: rgb(139, 0, 0);\n    // }\n    a:hover {\n      color: rgb(139, 0, 0);\n      border-color: rgb(139, 0, 0);\n\n    }\n    \n    .up, .down {\n      display: none;\n \n    }\n    .text-link {\n      margin-top: 1rem;\n      transition: color 0.5s ease-in-out;\n    }\n    \n  @keyframes nextpage {\n    0% {\n      opacity: 1;\n      transform: scale(.5);\n\n    }\n    50% {\n      opacity: .2;\n      transform: scale(1);\n    }\n    100% {\n      opacity: 1;\n      transform: scale(.5);\n\n\n    }\n  }\n"]);return _=function(){return e},e}var N=h.a.div(_()),C=function(e){function n(){return Object(l.a)(this,n),Object(c.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(N,{className:"last"},r.a.createElement("h1",null,"Contact Me"),r.a.createElement("p",null,"Start a Conversation, Looking to fill a developer position or just want a web site built, let's talk."),r.a.createElement("div",{className:"contact-card"},r.a.createElement("aside",null,r.a.createElement("a",{className:"i-link",href:"tel://19044729516"},r.a.createElement("i",{className:"fas fa-mobile-alt"})),r.a.createElement("a",{className:"text-link",href:"tel://19044729516"},"(904) 472-9516")),r.a.createElement("aside",null,r.a.createElement("a",{className:"i-link",href:"mailto:lee.justin.oliver@gmail.com?subject=Hi%20Justin,%20Nice%20Website"},r.a.createElement("i",{className:"fas fa-envelope"})),r.a.createElement("a",{className:"text-link",href:"mailto:lee.justin.oliver@gmail.com?subject=Hi%20Justin,%20Nice%20Website"},"lee.justin.oliver@gmail.com")),r.a.createElement("aside",null,r.a.createElement("a",{className:"i-link",href:"https://www.linkedin.com/in/justin-oliver-lee/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-linkedin"})),r.a.createElement("a",{className:"text-link",href:"https://www.linkedin.com/in/justin-oliver-lee/"},"LinkedIn"))))}}]),n}(a.Component);function I(){var e=Object(u.a)(["\n  min-height: 100vh;\n  background-color: rgb(40, 36, 119);\n  background-image: url(./img/background/SeattleSkylineSilohetteMobile.png);\n  background-position: bottom; \n  background-size: 100%;\n  background-repeat: no-repeat;\n\n  color: rgb(250, 250, 250);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  z-index: 100;\n  justify-content: center;\n  font-family: 'Chakra Petch', sans-serif;\n  .end-card {\n    position:relative;\n  \tdisplay: flex;\n\t\tjustify-content: center;\n    align-items: center;\n    flex: 1;\n  }\n  @media (min-width: 500px) {\n    padding-top: 3rem;\n    background-image: url(./img/background/SeattleSkylineSilohette3.png);\n\n\t\th1 {\n\t\t\tfont-size: 2rem;\n\t\t}\n  }\n"]);return I=function(){return e},e}var R=h.a.div(I()),L=function(e){function n(){return Object(l.a)(this,n),Object(c.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(R,{className:"very-last"},r.a.createElement("div",{className:"end-card"},r.a.createElement("h1",null,"THE END")))}}]),n}(a.Component),T=function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(c.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(r)))).state={end:"normal"},t._breakThePage=function(){t.setState(function(){return"normal"===t.state.end?{end:"break"}:{end:"normal"}})},t._scrollTop=function(){document.querySelector(".top").scrollIntoView()},t._scrollSecond=function(){document.querySelector(".second").scrollIntoView()},t._scrollThird=function(){document.querySelector(".third").scrollIntoView()},t._scrollFourth=function(){document.querySelector(".fourth").scrollIntoView()},t._scrollLast=function(){document.querySelector(".last").scrollIntoView()},t._scrollVeryLast=function(){document.querySelector(".very-last").scrollIntoView()},t}return Object(d.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:this.state.end},r.a.createElement("h1",null,"Who Turned Off The Lights?"),r.a.createElement("label",{class:"switch"},r.a.createElement("input",{type:"checkbox",onClick:this._breakThePage}),r.a.createElement("span",{class:"slider round"}))),r.a.createElement(x,{home:this._scrollTop,second:this._scrollSecond,third:this._scrollThird,fourth:this._scrollFourth,last:this._scrollLast}),r.a.createElement(p,{second:this._scrollSecond}),r.a.createElement(v,{home:this._scrollTop,third:this._scrollThird}),r.a.createElement(S,{second:this._scrollSecond,fourth:this._scrollFourth}),r.a.createElement(z,{third:this._scrollThird,last:this._scrollLast}),r.a.createElement(C,{fourth:this._scrollFourth,veryLast:this._scrollVeryLast}),r.a.createElement(L,{last:this._scrollLast,break:this._breakThePage}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,2,1]]]);
//# sourceMappingURL=main.dac8b378.chunk.js.map