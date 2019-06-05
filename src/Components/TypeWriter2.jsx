import React, { useState } from 'react';
// type writer with hook
// work in progress
TypeWriter2 = () => {
  const titles = [
    "Problem Solver",
    "Up For A Challenge",
    "Web Developer",
    "Problem Solver",
    "Up For A Challenge",
    "Web Developer",
    "Na Na Na Batman!"
  ]
  const [title, setTitle] = useState(0)
  const [cursor, setCursor] = useState(0)
  const [erase, setErase] = useState(false)
  const [currentTitle, setCurrent] = useState("")
}

export default TypeWriter2;