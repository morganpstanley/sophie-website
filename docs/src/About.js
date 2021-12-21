import sophie from "./assets/Blue-Wall.jpg"
import "./About.css"

const About = ({aboutRef}) => {

  return (
    <div ref={aboutRef} className="block" id="about">
      <h2>Hi, I'm Sophie!</h2>
      <img src={sophie} alt="" id="sophie" />
      <p><span>I</span>
        started learning the classical guitar when I was six and first heard the Dixie Chicks. 
        Since then, I've had many wonderful opportunities to work and perform with renowned players from around the world, 
        including David Russell, Grisha Goryachev, Benjamin Verdery, and Ana Vidovic. 
        I’ve also had the opportunity to perform in various venues throughout the United States and Spain. 
        I’ve won top prizes in the Utah Symphony Youth Guild Recital, performed several Lobby Fests for the Utah Symphony, 
        and won the Concerto Night Competition at Weber State University playing a movement from the famous Fantasia para un gentilhombre by Rodrigo.

        <br />

        I graduated magna cum laude with a B.A. in Instrumental Performance from Weber State University in 2015 
        and an M.M. in Music Performance from New England Conservatory in 2018, 
        where I studied under the virtuoso Belgian guitarist, Dr. Jerome Mouffe and Eliot Fisk. 
        I currently teach at Weber State University, the University of Utah, 
        and the Gifted Music School in Salt Lake City. I do gigs and performances around the Salt Lake area, 
        and frequently perform with BalletNext in Park City.

        <br />

       I never leave home without "Rodrigo Cervantes Montoya", my guitar. 
       I never trim his strings after putting new ones on, 
       so Rodrigo constantly has that sexy “Fabio” look that drives the ladies wild 
       (my husband has a vendetta against my relationship with my guitar). I’ve won one or two amateur writing contests, 
       enjoy lifting weights, baking things that I shouldn’t eat, and I continually add to my massive shoe collection.

      </p>
    </div>
  )
}

export default About