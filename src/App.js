import './App.css';
import About from "./About"
import Lessons from "./Lessons"
import Gigs from "./Gigs"
import Header from "./Header";
import React, { useRef } from "react"

function App() {
  
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
      <Lessons lessonsRef={lessonsRef}/>
      <Gigs gigsRef={gigsRef}/>
    </div>
  );
}

export default App;
