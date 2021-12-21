import './App.css';
import React, { useRef } from "react"
import ScrollToTop from "react-scroll-up"
import About from "./About"
import Lessons from "./Lessons"
import Gigs from "./Gigs"
import Repertoire from './Repertoire';
import Contact from "./Contact"
import Header from "./Header";


function App() {

  const scrollStyleProps = {
    fontSize: "2rem", 
    backgroundColor: "cornflowerblue",
    borderRadius: "30px"
  }
  
  const aboutRef = useRef()
  const lessonsRef = useRef()
  const gigsRef = useRef()
  const contactRef = useRef()

  return (
    <div className="App">
      <Header 
        aboutRef={aboutRef} 
        lessonsRef={lessonsRef} 
        gigsRef={gigsRef}
        contactRef={contactRef}
      />
      <About aboutRef={aboutRef}/>
      <Lessons lessonsRef={lessonsRef} contactRef={contactRef}/>
      <Gigs gigsRef={gigsRef}/>
      <Repertoire />
      <Contact contactRef={contactRef}/>

      <ScrollToTop showUnder={800} duration={500} style={scrollStyleProps}>
        <span>🔝</span>
      </ScrollToTop>
      <p id="copyright">Copyright {new Date().getFullYear()} Sophie Stanley, all rights reserved.</p>
    </div>
  );
}

export default App;
