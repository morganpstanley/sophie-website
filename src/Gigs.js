import { useState } from "react"
import "./Gigs.css"
import Repertoire from "./Repertoire"

const Gigs = ({gigsRef}) => {

  const [repertoire, toggleRepertoire] = useState(false)

  return (
    <div ref={gigsRef} className="block" id="gigs">
      <h2>Gigs</h2>
      <p>Need a guitarist for your wedding? Need some soothing background noise at your holiday work party? 
        Contact me with any commissions or requests for your special event!</p>

      <b>Rate: $100 per hour</b>

      <br />

      <button onClick={() => toggleRepertoire(!repertoire)}>Click here for my repertoire</button>

      <div id="repertoire-list" className={(repertoire) ? "visible" : ""}>
        <Repertoire />
      </div>
    </div>
  )
}

export default Gigs