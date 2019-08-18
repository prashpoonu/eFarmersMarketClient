import React from 'react'
import SignInComponent from './SignInComponent'
import SignUpComponent from './SignUpComponent'
const logo = require('../Assets/Images/LogoNav.jpg')
// import ReactDOM from 'react-dom'

 
     function NavComponent () {
        return (
            
            
            <nav>
                <div className="navWide">
                <img className="logoImg" src={logo} alt="logo"></img>
                <SignUpComponent/>
                <SignInComponent/>
                </div>
            </nav>
           
        )
    }

export default NavComponent;