import { Link } from 'react-router-dom'
import './Footer.css'
import { SiInstagram } from "react-icons/si"
import { BsFacebook } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";

const Footer = () => {
        return (
                <nav className="Footer">
                        <div className="adress">
                             <p> Peña 2300 </p>
                             <p> Buenos Aires, Argentina </p>
                             <p> Copyright © 2024 Zelaya </p>   
                        </div>
                        <div className="socialMedia">
                                <Link to={'https://www.instagram.com/'} target='blank'> <SiInstagram/> </Link>
                                <Link to={'https://www.facebook.com/'} target='blank'> <BsFacebook/>  </Link>
                                <Link to={'https://web.whatsapp.com/'} target='blank'> <SiWhatsapp/> </Link>
                        </div>
                </nav>
        )
}

export default Footer