import { useEffect, useRef, useState } from 'react';
import type { Skill as SkillType } from '../Constants/MySkills';

interface Props {
  skill: SkillType;
}

const Skill = ({ skill }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getPosition = () => {
      if (ref.current) {
        setIsVisible((ref.current.getBoundingClientRect().y - window.innerHeight + 100) < 0);
      }
    }

    document.addEventListener('scroll', getPosition);
    const timeout = setTimeout(getPosition, 1000);

    return () => {
      document.removeEventListener('scroll', getPosition);
      clearTimeout(timeout);
    }
  }, []);

  return (
    <div
      className={`m-[10px] flex w-[160px] flex-col items-center justify-center rounded-[10px] text-center text-[17px] transition-all duration-1000 ease-[ease] ${isVisible ? '' : 'scale-0'}`}
      ref={ref}
    >
      <div className='mb-[10px] flex h-[150px] max-w-[150px] items-center justify-center'>
        <img
          className={`max-h-[150px] max-w-[150px] transition-all duration-1000 ease-[ease] ${isVisible ? '' : 'rotate-180'}`}
          src={skill.imgSrc}
          alt=''
        />
      </div>
      {skill.title}
    </div>
  );
}

export default Skill;
