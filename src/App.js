import './App.css';
import React, { useRef } from "react"
import About from "./About"
import Lessons from "./Lessons"
import Gigs from "./Gigs"
import Contact from "./Contact"
import Header from "./Header";


function App() {

  const audio = new Audio("/sound.wav")
  
  const aboutRef = useRef()
  const lessonsRef = useRef()
  const gigsRef = useRef()
  const contactRef = useRef()

  const playAudio = () => {
    audio.play()
  }

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
      <Contact contactRef={contactRef}/>

      <button onClick={playAudio}>sound</button>
    </div>
  );
}

export default App;
