import { MySkills } from '../Constants/MySkills';
import Skill from './Skill';

const Skills = () => {
  return (
    <div tabIndex={-1} className="skills outline-none z-100 flex min-h-screen flex-col items-center justify-start bg-linear-to-b from-charcoal to-midnight bg-cover py-[10px] font-chakra text-[1.2rem] text-snow">
      <h1 className="mt-0 mb-2">My Skills</h1>
      <p className="mt-0 mb-2">Project experience with</p>
      <div className="flex flex-wrap justify-center text-base sm:max-w-[70vw] xl:max-w-[800px]" id='skills-list'>
        {MySkills.map((skill, index) => {
          return <Skill key={`skill-key-${index}`} skill={skill} />;
        })}
      </div>
    </div>
  )
}
export default Skills
