import "./Lessons.css"

const Lessons = ({lessonsRef, contactRef}) => {

  const jumpToRef = () => {
    console.log('hit me')
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div ref={lessonsRef} className="block" id="lessons" >
      <h2>Lessons</h2>
      <p> I am currently on faculty at the University of Utah,  Weber State University, and Gifted Music School in Salt Lake City, Utah. I also maintain an active private guitar studio in the Salt Lake area
        I teach both classical and fingerstyle guitar, as well as ukulele and ensemble classes.</p>
        
      <p><button onClick={jumpToRef}>Contact me</button>for more information about lessons. </p>

      <b>Rate: $35 per half-hour lesson</b>
    </div>
  )
}

export default Lessons