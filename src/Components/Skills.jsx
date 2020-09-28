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
			max-width: 800px;
		}
	}
`;

class Skills extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    return (
      <SkillsDiv className="skills">
        <h1>My Skills</h1>
        <p>Project experience with</p>
        <div className="list" id='skills-list'>
          {MySkills.map((skill, index) => {
            return <Skill key={`skill-key-${index}`} skill={skill} index={index} />;
          })}
        </div>
      </SkillsDiv>
    )
  }
}
export default Skills
