import React, { useState } from 'react'
import CartWidget from "../CartWidget/CartWidget"
import imageLogo from "../../assets/logo-negro.png"
import { NavLink, Link } from 'react-router-dom'
import './NavBar.css'
import { FiMenu } from "react-icons/fi"

const NavBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (
        <nav className="NavBar">
            <Link to='/' onClick={closeMenu} className='containerLogo'>
                <figure>
                    <img src={imageLogo} alt="logo restaurant zelaya" className='logo'/>
                </figure>
            </Link>
            
            <div className={`Categories ${isMenuOpen ? 'open' : ''}`}>
                <NavLink to={`/category/entradas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} onClick={closeMenu}> ENTRADAS </NavLink>
                <NavLink to={`/category/principales`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} onClick={closeMenu}> PRINCIPALES </NavLink>
                <NavLink to={`/category/postres`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} onClick={closeMenu}> POSTRES </NavLink>
                <NavLink to={`/category/tragos`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} onClick={closeMenu}> TRAGOS </NavLink>
            </div>

            <button className="MenuButton" onClick={toggleMenu}>
                <div className={`MenuIcon ${isMenuOpen ? 'open' : ''}`}><FiMenu className='icon'/></div>
            </button>

            <div className="Cart">
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar