import "./Lessons.css"
import bugSearching from "./assets/bug-searching.webp"

const Lessons = ({lessonsRef, contactRef}) => {

  const jumpToRef = () => {
    console.log('hit me')
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div ref={lessonsRef} className="block" id="lessons" >
      <h2>🎶Lessons</h2>
      <p>I am currently on faculty at Weber State University and Gifted Music School in Salt Lake City, Utah. 
        I also maintain an active private guitar studio in the Salt Lake area. I teach both classical 
        and fingerstyle guitar, as well as ukulele and ensemble classes. Lessons are offered Tuesday-Thursday.</p>
        
      <p><button onClick={jumpToRef}>Contact me</button> for more information.</p>

      <b>Rate: $35 per half-hour lesson</b>
      <img src={bugSearching} alt="" id="bug-photo"/>
    </div>
  )
}

export default Lessons


