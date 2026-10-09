import { useExpandable } from '../hooks/useExpandable'

interface Props {
  scroll: ScrollFn;
}

const About = ({ scroll }: Props) => {
  const { expanded, labelExpanded, fading, toggle, containerRef, previewRef, contentId } =
    useExpandable<HTMLParagraphElement>(() => scroll(".about"));

  return (
    <div tabIndex={-1} className="about outline-none z-100 flex min-h-screen flex-col items-center bg-linear-to-b from-black to-charcoal bg-cover py-[10px] text-[1.2rem] text-snow">
      <img className="max-w-[150px] rounded-full shadow-glow sm:mt-[2%] sm:max-w-[300px]" src="./img/profilepicture.jpeg" alt="Justin Oliver Lee" />
      <div className="relative max-w-[90vw] font-chakra sm:max-w-[70vw] xl:max-w-[800px]">
        <h1>About Me</h1>
        <div id={contentId} className="overflow-hidden transition-all duration-1500 ease-in-out [&_p]:mb-0 [&_p]:pb-[1em]" ref={containerRef}>
          <p ref={previewRef}>
            A Software Engineer from Florida, currently living in the Greater Seattle Area. Looking for my next challenge, along with ways to get involved and give back to the local developer community.
          </p>
          <div className={`transition-all ease-in-out ${expanded ? "opacity-100 duration-1000" : "opacity-0 duration-2000"}`} inert={!expanded}>
            <p>
              In 2018, I decided to follow my passion for building and creating things, which led me to increase my coding knowledge around how to make user-friendly, functional web applications. Through that learning process, I have come to enjoy the challenges that creating websites and other applications bring, while increasing my understanding of methods to improve my development skills.
            </p>

            <p>
              When I first arrived in Seattle, I became involved with local meetup groups like Seattle JS, Seattle JS Hackers, and Bellevue JS. I have been an organizer, host, and speaker for several events. Since becoming involved with meetup groups in early 2019, I have been hosting a monthly event called Code Katas, where I present the participants (developers of all skill levels) with a series of coding challenges. They then work with other participants or on their own to solve the challenges. Between each round in the series, the participants present their solutions to the group and talk about the code and how they came to find the solutions; it is good practice for any developer to prepare for interviews or see the different ways a single challenge can be solved. Along with Code Katas, I have been involved with events like open codes, lean coffees, and hackathons; I was even the MC and stage manager for the forum stage at Cascadia JS in 2019 and 2025.
            </p>

            <p>
              Since arriving in Seattle, I have gained experience and grown as a front-end engineer. My first job as a front-end engineer was working as a subcontractor for Stackend Solutions (a SaaS company for startups). During my time at Stackend Solutions, I worked on and even led the front-end development for multiple clients. The first project I led was rebuilding a client's web page as a React app, then connecting it to the Firebase backend from the iOS app they had already launched. I also led the initial build of the front end of a React Native app that would serve as a concierge app for a startup based in Chicago.
            </p>

            <p>
              I next took a full-time position as the primary front-end developer for pubGENIUS (an ad tech startup that offers ad ops as a service). My time at pubGENIUS was primarily spent working on internal and external web apps for managing ad stacks. The apps were built with TypeScript, using React, Node, Redux, and MySQL, along with various packages. Although my title was front-end developer, I was involved in back-end development as well; this mostly involved connecting the front end and making additions and changes to the apps' services, routes, and database when needed.
            </p>

            <p>
              I next landed at Microsoft as a Software Design Engineer for the Universal Human Relevance System (UHRS). During my time at Microsoft, I worked on a new version of UHRS, translating the existing UI built with C# Razor Pages to a modern PWA using TypeScript and React.
            </p>

            <p>
              Most recently, I spent a little more than four years at SeekOut, an HR tech company based in Bellevue. I started as a Software Engineer 2 and the primary front-end engineer for the platform team, and was later promoted to Senior Software Engineer, helping the company bring AI-powered recruiting tools to enterprise customers. Over that time, agentic AI became a core part of how I got my work done: I used AI agents to plan, write, test, and review code, which let me take on larger pieces of work and ship faster while staying focused on design decisions and quality.
            </p>

            <p>
              During my time working as a software engineer, I have gained an in-depth understanding of various languages, frameworks, and technologies, along with computer science fundamentals and the practice of building software alongside AI agents. I am looking forward to continuing my journey of learning and growing as a software engineer.
            </p>

            <p>
              If you think I may be a good fit for your team, have a need for a freelance developer, or would like to become involved with the local developer community as a sponsor, host, speaker, or even just attend an event, I am ready for any challenge and more than happy to help in any way. I look forward to hearing from you or your organization.
            </p>
          </div>
        </div>
        <button className="mt-6 cursor-pointer rounded-[5%] border-[.1rem] border-snow bg-transparent p-[.2rem] font-chakra text-[1.2rem] text-snow focus-ring transition-all duration-500 ease-in-out sm:hover:bg-snow sm:hover:text-accent" onClick={toggle} aria-expanded={expanded} aria-controls={contentId}>
          <div className={`text-center transition-opacity duration-1000 ease-in-out ${fading ? "opacity-0" : "opacity-100"}`}>
            {labelExpanded ? "Read Less" : "Read More"}
          </div>
        </button>
      </div>
    </div>
  );
}
export default About;
