import './App.css';
import React, { useRef, useState, useEffect } from "react"
import ScrollToTop from "react-scroll-to-top"
import About from "./About"
import Lessons from "./Lessons"
import Gigs from "./Gigs"
import Repertoire from './Repertoire';
import Contact from "./Contact"
import Header from "./Header";
import arrow from "./assets/arrow.png"

const mediaQuery = "(min-width: 600px)";

function App() {

  const mql = window.matchMedia(mediaQuery);
  const [isDesktop, setIsDesktop] = useState(mql.matches);

  useEffect(() => {
    const handleMediaChange = function (MediaQueryList) {
      setIsDesktop(this.matches);
    };
    mql.addEventListener("change", handleMediaChange);
    setIsDesktop(mql.matches);

    return () => {
      mql.removeEventListener("change", handleMediaChange);
    };
  }, [mql]);
  
  const aboutRef = useRef()
  const lessonsRef = useRef()
  const gigsRef = useRef()
  const contactRef = useRef()

  return (
    <div className="App">
      <Header
        isDesktop={isDesktop} 
        refs={{aboutRef, lessonsRef, gigsRef, contactRef}}
      />
      <About isDesktop={isDesktop} aboutRef={aboutRef}/>
      <Lessons lessonsRef={lessonsRef} contactRef={contactRef}/>
      <Gigs gigsRef={gigsRef}/>
      <Repertoire />
      <Contact contactRef={contactRef}/>

      <ScrollToTop  
        smooth
        top={700}
        className='scroll-button'
        component={<img src={arrow} alt="" width={40}/>}
      />
      <p id="copyright">Copyright {new Date().getFullYear()} Sophie Stanley, all rights reserved.</p>
    </div>
  );
}

export default App;
