import { useEffect, useRef, useState } from 'react';

const TITLES = ["Problem Solver", "Up For A Challenge", "Software Engineer", "Problem Solver", "Up For A Challenge", "Software Engineer", "Na Na Na Batman!"]

const START_DELAY = 500
const TYPE_DELAY = 125
const ERASE_DELAY = 75
const PAUSE_FULL = 3000
const PAUSE_EMPTY = 1000

const TypeWriter = () => {
  const [{ title, cursor, erase }, setState] = useState<TypeState>({ title: 0, cursor: 0, erase: false })
  const started = useRef(false)

  useEffect(() => {
    const word = TITLES[title]
    let delay: number
    let next: TypeState

    if (!erase && cursor < word.length) {
      delay = cursor === 0 ? (started.current ? TYPE_DELAY : START_DELAY) + PAUSE_EMPTY : TYPE_DELAY
      next = { title, cursor: cursor + 1, erase: false }
    } else if (!erase) {
      delay = ERASE_DELAY + PAUSE_FULL
      next = { title, cursor: cursor - 1, erase: true }
    } else if (cursor > 1) {
      delay = ERASE_DELAY
      next = { title, cursor: cursor - 1, erase: true }
    } else {
      delay = ERASE_DELAY
      next = { title: (title + 1) % TITLES.length, cursor: 0, erase: false }
    }

    const timeout = setTimeout(() => {
      started.current = true
      setState(next)
    }, delay)

    return () => clearTimeout(timeout)
  }, [title, cursor, erase])

  return (
    <div className="font-chakra text-[1.7rem] sm:text-[2.5rem]">
      {TITLES[title].slice(0, cursor)}
      <span aria-hidden="true" className="ml-[0.1em] inline-block h-[1em] w-[0.08em] animate-blink bg-current align-[-0.1em]" />
    </div>
  );
}
export default TypeWriter;
