import "./Gigs.css"

const Gigs = ({gigsRef}) => {

  return (
    <div ref={gigsRef} className="block" id="gigs">
      <h2>Gigs</h2>
      <p>Need a guitarist for your wedding? Need some soothing background noise at your holiday work party? 
        Contact me with any commissions or requests for your special event!</p>

      <b>Rate: $100 per hour</b>

    </div>
  )
}

export default Gigs