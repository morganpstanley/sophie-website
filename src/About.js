import sophie from "./assets/Blue-Wall.webp";
import "./About.css";
import { useState } from "react";
const About = ({ isDesktop, aboutRef }) => {
    const [isExpanded, setIsExpanded] = useState(isDesktop);
    return (
        <div ref={aboutRef} className="block" id="about">
            <h1>Hi, I'm Sophie!</h1>
            <img src={sophie} alt="" id="sophie" />
            <p>
                <span id="upcase-letter">I</span>
                began learning the classical guitar when I was six and first heard the Dixie Chicks. Since then, I've
                had many wonderful opportunities to work and perform with renowned players from around the world,
                including David Russell, Grisha Goryachev, Benjamin Verdery, and Ana Vidovic. I’ve also had the
                opportunity to perform in various venues throughout the United States and Spain.
                <span id="show-more-span" className={isExpanded ? "expanded" : "collapsed"}>
                    <br />
                    I graduated magna cum laude with a B.A. in Instrumental Performance from Weber State University in
                    2015 and an M.M. in Music Performance from New England Conservatory in 2018, where I studied under
                    the virtuoso Belgian guitarist Dr. Jerome Mouffe and world-renowned artist Eliot Fisk. I currently
                    teach at Weber State University, Brigham Young University, and the Gifted Music School in Salt Lake
                    City and am available for gigs in the Salt Lake area.

                    <br />I never leave home without my guitar, "Rodrigo Cervantes Montoya", have won one or two amateur writing contests, enjoy lifting weights, baking confections on the weekends, and I continually add to my massive shoe collection.
                </span>
            </p>
            {!isDesktop && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    id="show-more-button"
                >{`Read ${isExpanded ? "Less" : "More"}`}</button>
            )}
        </div>
    );
};
export default About;
