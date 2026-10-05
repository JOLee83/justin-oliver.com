import type { ScrollFn } from '../App';
import { Projects } from '../Constants/Projects';
import { useExpandable } from '../hooks/useExpandable';

const maxWidth = 'max-w-[90vw] sm:max-w-[70vw] xl:max-w-[800px]';
const cardText = `${maxWidth} text-[1.2rem] sm:mb-8 sm:text-[1.3rem]`;
const sectionShown = 'opacity-100 transition-all duration-1000 ease-in-out';
const sectionHidden = 'opacity-0 transition-all duration-2000 ease-in-out';
const link = 'cursor-pointer text-snow focus-ring transition-all duration-500 ease-in-out sm:hover:text-accent';
// block so the focus ring wraps the image instead of the text line; inset so the
// container's overflow-hidden doesn't clip it
const imageLink = 'block cursor-pointer focus-ring-inset';

interface Props {
  scroll: ScrollFn;
}

const MyWork = ({ scroll }: Props) => {
  const { expanded, labelExpanded, fading, toggle, containerRef, previewRef, contentId } =
    useExpandable<HTMLElement>(() => scroll(".work"));

  return (
    <div tabIndex={-1} className="work outline-none z-100 flex min-h-screen flex-col items-center justify-start bg-midnight bg-cover font-chakra text-[1.2rem] text-snow">
      <h1 className="mt-0 mb-2">My Work</h1>
      <p className={`mt-0 mb-2 text-[1.2rem] ${maxWidth}`}>Some of my professional and personal projects</p>
      <div className="relative sm:max-w-[70vw] xl:max-w-[800px]">
        <div id={contentId} className="-mx-1 flex flex-col overflow-hidden px-1 transition-all duration-1500 ease-in-out" ref={containerRef}>
          {Projects.map((proj, i) => {
            const className = i === 0 ? undefined : expanded ? sectionShown : sectionHidden;

            return (
              <section key={i} className={className} ref={i === 0 ? previewRef : undefined} inert={i !== 0 && !expanded}>
                <a className={imageLink}
                  href={proj.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className={`block ${maxWidth}`} src={proj.imgSrc} alt={proj.imgAlt} />
                </a>
                {proj.description.split('\n').map((line, index) => (
                  <p key={`${i}-${index}`} className={cardText}>{index === 0 ? (
                    <a className={link}
                      href={proj.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {proj.title}
                    </a>
                  ) : ''}{line}
                  </p>
                ))}
              </section>
            )
          })}
          <section className={expanded ? sectionShown : sectionHidden} inert={!expanded}>
            <p className={cardText}> See even more on <a
              className={link}
              href="https://github.com/JOLee83"
              target="_blank"
              rel="noopener noreferrer"
            >GitHub</a>
            </p>
          </section>
        </div>
        <button className="m-0 cursor-pointer rounded-[5%] border-[.1rem] border-snow bg-transparent p-[.2rem] font-chakra text-[1.2rem] text-snow focus-ring transition-all duration-500 ease-in-out sm:hover:bg-snow sm:hover:text-accent" onClick={toggle} aria-expanded={expanded} aria-controls={contentId}>
          <div className={`text-center transition-opacity duration-1000 ease-in-out ${fading ? "opacity-0" : "opacity-100"}`}>
            {labelExpanded ? "Less Projects" : "More Projects"}
          </div>
        </button>
      </div>
    </div>
  );
}
export default MyWork;
