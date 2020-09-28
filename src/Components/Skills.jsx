import React, { Component } from 'react'
import styled from 'styled-components'
import { MySkills } from '../Constants/MySkills';
import Skill from './Skill';

const SkillsDiv = styled.div`
	min-height: 100vh;
	background-image: linear-gradient(
		to bottom,
		rgb(25, 25, 25),
		rgb(25, 24, 43)
	);
	background-size: cover;
	color: rgb(250, 250, 250);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	z-index: 100;
	font-family: 'Chakra Petch', sans-serif;
	font-size: 1.2rem;
  padding: 10px 0;

	h1, p {
		margin: 0 0 0.5rem 0;
	}

	.list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		font-size: 1rem;

		.skill {
			display: flex;
      flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
			margin: 10px;
      font-size: 17px;
			width: 160px;
			border-radius: 10px;
      transition: all 1s ease;

      .img-frame {
        height: 150px;
        max-width: 150px;
        margin-bottom: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          max-width: 150px;
          max-height: 150px;
          transition: all 1s ease;
        }
      }
		}

		.unpop {
			transform: scale(0);

      img {
        transform: rotate(180deg);
      }
		}
	}

	@media (min-width: 500px) {
		.list {
			max-width: 70vw;
		}
	}

	@media (min-width: 1200px) {
		.list {
			max-width: 50vw;
		}
	}
`;

class Skills extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // skills: [
      //   'HTML',
      //   'CSS',
      //   'JavaScript',
      //   'TypeScript',
      //   'C#',
      //   'SQL',
      //   'Git',
      //   'RESTful API',
      //   'SASS',
      //   'LESS',
      //   'Styled Components',
      //   'Flex Box',
      //   'BootStrap',
      //   'Bulma',
      //   'Material UI',
      //   'React',
      //   'Redux',
      //   'React Native',
      //   'Node',
      //   '.Net',
      //   'Postgres',
      //   'MySQL',
      //   'GitHub',
      //   'GitLab',
      //   'Azure Devops',
      // ],
      // yOffset: 0,
      // threshold: 0,
      // postThreshold: 0,
      // pass: true
    }
  }
  // _getOffset = () => {
  //   let el = document.querySelector('.skills')
  //   let top = 0
  //   do {
  //     top += el.offsetTop
  //     el = el.offsetParent
  //   } while (el)
  //   return top
  // }
  // _setYOffset = () => {
  //   let yOffset = window.pageYOffset

  //   this.setState(() => ({
  //     yOffset: yOffset
  //   }))
  // }
  // _setThreshold = () => {
  //   let clientHeight = document.querySelector('.skills').clientHeight * 0.3
  //   // console.log(document.querySelector('.skill').getBoundingClientRect().y - window.innerHeight)
  //   let threshold = this._getOffset() - window.innerHeight + clientHeight

  //   this.setState(() => ({
  //     threshold: threshold
  //   }))
  // }
  // _pass = () => {
  //   const { threshold, yOffset, postThreshold } = this.state
  //   if (yOffset < threshold) {
  //     this.setState(() => ({
  //       pass: true
  //     }))
  //   }
  //   if (yOffset > postThreshold) {
  //     this.setState(() => ({
  //       pass: false
  //     }))
  //   }
  // }

  // _setPostThreshold = () => {
  //   let clientHeight = document.querySelector('.skills').clientHeight * 1.5
  //   let postThreshold = this._getOffset() - window.innerHeight + clientHeight
  //   this.setState(() => ({
  //     postThreshold: postThreshold
  //   }))
  // }

  // _set = () => {
  //   this._setYOffset()
  //   this._setThreshold()
  //   this._setPostThreshold()
  //   this._pass()
  // }

  // componentDidMount = () => {
  //   setTimeout(this._set, 500)
  //   window.addEventListener('resize', this._set)
  //   window.addEventListener('scroll', this._set)
  // }

  render() {
    const containmentDOMRect = document.getElementById("skills-list");

    return (
      <SkillsDiv className="skills">
        <h1>My Skills</h1>
        <p>Project experience with</p>
        <div className="list" id='skills-list'>
          {MySkills.map((skill, index) => {
            // const {
            //   skills,
            //   threshold,
            //   yOffset,
            //   postThreshold,
            //   pass
            // } = this.state;

            // const delay = pass ? index * 0.05 : (skills.length - index - 1) * 0.05;
            // const styles = { transition: `all 1s ${delay}s ease-in` };

            return (
              <Skill key={`skill-key-${index}`} skill={skill} index={index} containmentDOMRect={containmentDOMRect} />
              // <div
              //   style={styles}
              //   className={`skill${yOffset > pos ? '' : ' unpop'} item-${index}`}
              //   key={index}
              // >
              //   <div className='img-frame'>
              //     <img src={skill.imgSrc} alt='' style={styles} />
              //   </div>
              //   {skill.title}
              // </div>
            );
          })}
        </div>
      </SkillsDiv>
    )
  }
}
export default Skills
