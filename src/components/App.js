import React, { useState, useRef } from 'react';
import { BiChevronDown, BiX, BiMenu } from 'react-icons/bi'
import { anMobileMenu } from './MyAn'
import logo from '../assets/logo.png'
import bgcircle from '../assets/bgcircle.png'
import bicycle from '../assets/bicycle.png'

const App = () => {
	const [ mobileActive, setMobileActive ] = useState(false)
	const navbar = useRef()
	const navbarMobile = useRef()

	const toggleMenu = () => {
		setMobileActive(!mobileActive)
		navbar.current.classList.toggle('mobile-active')
		navbarMobile.current.style.display = (mobileActive) ? "none" : "block"
		anMobileMenu()
	}

	return (
		<>
			<div className="navbar" ref={navbar}>
				<div className="container">
					<a href="#home" className="navbar_logo">
						<img src={logo} alt="logo"/>
					</a>

					<div className="menu_list">
						<a href="#guides" className="menu-item active">Guides</a>
						<a href="#pricing" className="menu-item">Pricing</a>
						<a href="#team" className="menu-item">Team</a>
						<a href="#Stories" className="menu-item">Stories</a>
					</div>

					<a href="#my-acount" className="btn_primary">My Account</a>

					<span onClick={toggleMenu} className="toggle_menu">
						{
							(mobileActive) ?  <BiX /> : <BiMenu />
						}
					</span>
				</div>

				<div className="navbar-mobile" ref={navbarMobile}>
					<a href="#guides" className="navbar-mobile-item">Guides</a>
					<a href="#pricing" className="navbar-mobile-item">Pricing</a>
					<a href="#team" className="navbar-mobile-item">Team</a>
					<a href="#Stories" className="navbar-mobile-item">Stories</a>
				</div>
			</div>
			
			<div className="hero">
				<div className="ill">
					<img src={bgcircle} className="bgcircle" alt="bgcircle"/>
					<img src={bicycle} className="bicycle" alt="bicycle"/>
				</div>

				<a href="https://pixel.buildwithangga.com/details/bycircle-header-website" target="_blank" rel="noreferrer" className="hero-footer"><BiChevronDown className="bid"/>	Resource from buildwithangga</a>
			</div>
		</>
	)
}

export default App
