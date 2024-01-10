import { Link } from "react-router-dom"
import { IoArrowBack } from "react-icons/io5"
import './NotFound.css'

const NotFound = ({errorMessage}) => {

  return (
    <div className="containerNotFound">
      <div className="notFound">
        <h1>{errorMessage || "404 Not Found"}</h1>
        <Link to="/" className="arrowBack"><IoArrowBack/></Link>
      </div>
    </div>
  )
}

export default NotFound