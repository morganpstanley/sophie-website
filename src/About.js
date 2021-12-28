import sophie from "./assets/Blue-Wall.webp"
import "./About.css"
import { useState } from "react"


const About = ({isDesktop, aboutRef}) => {

  const [isExpanded, setIsExpanded] = useState(isDesktop)
  console.log(isDesktop)

  return (
    <div ref={aboutRef} className="block" id="about">
      <h2>Hi, I'm Sophie!</h2>
      <img src={sophie} alt="" id="sophie" />
      <p><span id="upcase-letter">I</span>
        began learning the classical guitar when I was six and first heard the Dixie Chicks. Since then, I've had many wonderful opportunities to work and perform with renowned players from around the world, including David Russell, Grisha Goryachev, Benjamin Verdery, and Ana Vidovic. I’ve also had the opportunity to perform in various venues throughout the United States and Spain. I’ve won top prizes in the Utah Symphony Youth Guild Recital, performed several Lobby Fests for the Utah Symphony, and won the Concerto Night Competition at Weber State University playing a movement from the famous Fantasia para un gentilhombre by Rodrigo.
        <span id="show-more-span" className={isExpanded ? "expanded" : "collapsed"}>
        <br />
        I graduated magna cum laude with a B.A. in Instrumental Performance from Weber State University in 2015 and an M.M. in Music Performance from New England Conservatory in 2018, where I studied under the virtuoso Belgian guitarist Dr. Jerome Mouffe and world-renowned artist Eliot Fisk. I currently teach at Weber State University, the University of Utah, and the Gifted Music School in Salt Lake City. I do gigs and performances around the Salt Lake area, and frequently perform with BalletNext in Park City.
        <br />
        I never leave home without my guitar, "Rodrigo Cervantes Montoya", known for his untrimmed strings and sexy “Fabio” look that drives the ladies wild (my husband has a vendetta against my guitar). I’ve won one or two amateur writing contests, enjoy lifting weights, baking things that I shouldn’t eat, and I continually add to my massive shoe collection.
        </span>
      </p>
      {!isDesktop && <button onClick={() => setIsExpanded(!isExpanded)} id="show-more-button">{`Read ${isExpanded ? "Less" : "More"}`}</button>}
    </div>
  )
}

export default About