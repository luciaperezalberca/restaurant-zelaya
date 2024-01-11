import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import imageLogo from "../../assets/logo-negro.png"
import { NavLink, Link } from 'react-router-dom' 

const NavBar = () => {
        return (
                <nav className="NavBar">
                        <Link to='/'>
                                <figure>
                                        <img src={imageLogo} alt="logo restaurant zelaya" className='logo'/>
                                </figure>
                        </Link>
                        <div className="Categories">
                                <NavLink to={`/category/entradas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}> ENTRADAS </NavLink>
                                <NavLink to={`/category/principales`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}> PRINCIPALES </NavLink>
                                <NavLink to={`/category/postres`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}> POSTRES </NavLink>
                                <NavLink to={`/category/tragos`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}> TRAGOS </NavLink>
                        </div>
                        <div className="Cart">
                                <CartWidget />
                        </div>
                </nav>
        )
}

export default NavBar