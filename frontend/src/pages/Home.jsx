import { Link } from "react-router-dom"
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa"

function Home() {
  return (
    <>
      <section className="heading">
        <h1>What do you need help with?</h1>
        <p>Please choose from an option below</p>
      </section>

      <Link to='/new-doodle' className="btn btn-reverse btn-block">
        <FaQuestionCircle /> Create a new Monster
      </Link>

      <Link to='/doodles' className="btn btn-block">
        <FaTicketAlt /> View My Monsters
      </Link>
    </>
  )
}

export default Home
