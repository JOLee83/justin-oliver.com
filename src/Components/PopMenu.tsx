import { useCallback, useEffect, useRef, useState } from 'react';
import type { ScrollFn } from '../App';

const menuButton = 'group z-100 cursor-pointer bg-transparent text-center font-chakra text-snow focus-ring transition-[background-color] duration-400 ease-in-out';

// [open, closed] classes for each hamburger bar
const BARS: [string, string][] = [
  ['top-[16px] left-[11px] w-[14px] rounded-l-[5px]', 'top-[18px] left-[11px] w-[18px] rotate-45 rounded-l-[5px]'],
  ['top-[16px] left-[25px] w-[14px] rounded-r-[5px]', 'top-[18px] left-[23px] w-[16px] -rotate-45 rounded-r-[5px]'],
  ['top-[24px] left-[11px] z-101 h-[3px] w-[28px] rounded-[5px]', 'top-[8px] left-[8px] h-[33px] w-[33px] rounded-[5px] opacity-0'],
  ['top-[32px] left-[11px] w-[14px] rounded-l-[5px]', 'top-[30px] left-[11px] w-[16px] -rotate-45 rounded-l-[5px]'],
  ['top-[32px] left-[25px] w-[14px] rounded-r-[5px]', 'top-[30px] left-[23px] w-[16px] rotate-45 rounded-r-[5px]'],
];
const barBase = 'fixed bg-snow transition-all duration-500 ease-linear md:group-hover:bg-accent';
// every bar but the middle one is a 3px line above the button outline
const barLine = 'z-102 h-[3px]';

// inset focus ring: the panel sits flush against the viewport's left edge
const jump = 'mb-4 flex cursor-pointer border-none bg-transparent py-0 pr-8 pl-4 text-left font-chakra text-[1.3rem] text-snow no-underline focus-ring-inset transition-colors duration-400 ease-in-out md:hover:text-accent';
const iconFrame = 'mr-[15px] w-[30px] text-center';

interface Props {
  scroll: ScrollFn;
}

const PopMenu = ({ scroll }: Props) => {
  const [popMenu, setPopMenu] = useState(false);
  // lags popMenu so the button text can fade out before it swaps
  const [labelOpen, setLabelOpen] = useState(false);
  const fading = labelOpen !== popMenu;

  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const desktopToggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // the panel goes inert when closed, which would drop focus from anything inside it,
  // so hand focus back to whichever toggle button is showing at this breakpoint
  const closeMenu = useCallback(() => {
    if (panelRef.current?.contains(document.activeElement)) {
      [mobileToggleRef, desktopToggleRef]
        .find(ref => ref.current?.getClientRects().length)
        ?.current?.focus();
    }
    setPopMenu(false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', closeMenu);

    return () => window.removeEventListener('scroll', closeMenu);
  }, [closeMenu]);

  useEffect(() => {
    if (labelOpen === popMenu) {
      return;
    }
    const timeout = setTimeout(() => setLabelOpen(popMenu), 500);

    return () => clearTimeout(timeout);
  }, [popMenu, labelOpen]);

  const toggleMenu = () => setPopMenu(open => !open);

  const menu = (target: string) => () => {
    scroll(target);
    // move focus to the section so tabbing continues from there; preventScroll keeps
    // the smooth scroll running
    document.querySelector<HTMLElement>(target)?.focus({ preventScroll: true });
    closeMenu();
  }

  const bars = BARS.map(([open, closed], i) => (
    <div key={i} className={`${barBase} ${i === 2 ? '' : barLine} ${popMenu ? closed : open}`} />
  ));

  return (
    <div className='fixed z-101'>
      <button
        ref={mobileToggleRef}
        className={`${menuButton} fixed top-[3px] left-[3px] m-[2px] h-[41px] w-[41px] overflow-visible border-none text-[1.4rem] md:hidden`}
        onClick={toggleMenu}
        aria-label='opens navigation menu'
        aria-expanded={popMenu}
        aria-controls='nav-menu'
      >
        <div className='fixed top-[8px] left-[8px] z-99 h-[31px] w-[31px] rounded-[5px] border-[.1rem] border-snow bg-black-50 shadow-menu-button' />
        {bars}
      </button>
      <button
        ref={desktopToggleRef}
        className={`${menuButton} hidden md:fixed md:top-[8px] md:left-[6px] md:flex md:h-[35px] md:w-[102px] md:overflow-visible md:rounded-none md:border-none md:p-0 md:text-[1.5rem]`}
        onClick={toggleMenu}
        aria-label='opens navigation menu'
        aria-expanded={popMenu}
        aria-controls='nav-menu'
      >
        <div className='fixed top-[8px] left-[6px] w-[60px] rounded-[5px] border-[.1rem] border-snow py-0 pr-[.3rem] pl-[34px] transition-all duration-400 ease-linear group-hover:bg-snow group-hover:text-accent'>
          {bars}

          <div className={`text-center transition-opacity duration-400 ease-in-out ${fading ? 'opacity-0' : 'opacity-100'}`}>
            {labelOpen ? 'Close' : 'Menu'}
          </div>
        </div>
      </button>
      <div id='nav-menu' ref={panelRef} inert={!popMenu} className={`fixed z-99 h-[calc(100vh-45px)] w-fit bg-linear-to-t from-black to-charcoal px-0 py-20 font-chakra text-[1.3rem] text-snow shadow-glow transition-all duration-500 ease-in-out ${popMenu ? 'left-0' : '-left-[150%]'}`}>
        <div className='flex h-[calc(100vh-125px)] max-h-[450px] flex-col justify-between'>
          <button
            className={jump}
            onClick={menu('.home')}
          >
            <div className={iconFrame}>
              <i className='fas fa-home' />
            </div>
          Home
        </button>
          <button
            className={jump}
            onClick={menu('.about')}
          >
            <div className={iconFrame}>
              <i className='fas fa-user' />
            </div>
          About Me
        </button>
          <button
            className={jump}
            onClick={menu('.skills')}
          >
            <div className={iconFrame}>
              <i className='fas fa-list-ul' />
            </div>
          My Skills
        </button >
          <button
            className={jump}
            onClick={menu('.work')}
          >
            <div className={iconFrame}>
              <i className='fas fa-bookmark' />
            </div>
          My Work
        </button >
          <button
            className={jump}
            onClick={menu('.contact')}
          >
            <div className={iconFrame}>
              <i className='fas fa-address-card' />
            </div>
          Contact Me
        </button >
          <a className={jump}
            href='https://drive.google.com/file/d/13DDGPebrTjKaTiu8gJsrjU576D46lp6Q/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
            onClick={closeMenu}
          >
            <div className={iconFrame}>
              <i className='fab fa-google-drive' />
            </div>
          My Resume
        </a>
        </div>
      </div>
      <div
        className={`fixed z-98 h-screen w-screen bg-black transition-opacity duration-400 ease-in-out ${popMenu ? 'opacity-50' : 'pointer-events-none opacity-0'}`}
        onClick={closeMenu}
      />
    </div>
  );
}

export default PopMenu;
