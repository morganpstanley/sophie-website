import "./Lessons.css"
import bugSearching from "./assets/bug-searching.webp"

const Lessons = ({lessonsRef, contactRef}) => {

  const jumpToRef = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div ref={lessonsRef} className="block" id="lessons" >
      <h1>🎶Lessons</h1>
      <p>I am currently on faculty at Weber State University, Brigham Young University, and the Gifted Music School in Salt Lake City, Utah. 
        I also maintain an active private guitar studio in the Salt Lake area. I teach both classical 
        and fingerstyle guitar, as well as ukulele and ensemble classes. Private lessons are offered Wednesday-Thursday.
      </p>       
      <p><button onClick={jumpToRef}>Contact me</button> for more information.</p>
      <b>Rate: $40 per half-hour lesson</b>

      <br />
      <img src={bugSearching} alt="" id="bug-photo"/>
    </div>
  )
}

export default Lessons


