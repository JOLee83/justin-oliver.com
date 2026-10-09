import { useCallback, useEffect } from 'react';
import Home from './Components/Home'
import About from './Components/About'
import PopMenu from './Components/PopMenu'
import MyWork from './Components/MyWork'
import Skills from './Components/Skills'
import Contact from './Components/Contact'

const App = () => {
  const scroll = useCallback<ScrollFn>(target => {
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" })
  }, [])

  useEffect(() => {
    console.log("Welcome to my portfolio")
  }, [])

  return (
    <>
      <PopMenu scroll={scroll} />
      <Home />
      <About scroll={scroll} />
      <Skills />
      <MyWork scroll={scroll} />
      <Contact />
    </>
  );
}

export default App;
