type ScrollFn = (target: string) => void;

interface Project {
  title: string;
  imgSrc: string;
  imgAlt: string;
  href: string;
  description: string;
}

interface Skill {
  title: string;
  link: string;
  imgSrc: string;
}

interface TypeState { title: number; cursor: number; erase: boolean }
