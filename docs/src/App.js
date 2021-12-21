import './App.css';
import React, { useRef } from "react"
import About from "./About"
import Lessons from "./Lessons"
import Gigs from "./Gigs"
import Contact from "./Contact"
import Header from "./Header";


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
      <Lessons lessonsRef={lessonsRef} contactRef={contactRef}/>
      <Gigs gigsRef={gigsRef}/>
      <Contact contactRef={contactRef}/>
    </div>
  );
}

export default App;
