import { Link } from "react-router-dom"
import { IoArrowBack } from "react-icons/io5"
import './NotFound.css'

const NotFound = () => {

  return (
    <div className="notFound">
      <h1> 404 Not Found </h1>
      <Link to="/" className="arrowBack"><IoArrowBack/></Link>
    </div>
  )
}

export default NotFound