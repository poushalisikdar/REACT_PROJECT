import React from 'react'
import "./Nav.css"



export default function Navbar() {

    return (
        <div>
            <div >
                <nav >
                    <ul >
                        <a >Home</a>
                        <a>Contact</a>
                        <a>About Us</a>
                        <a className='log'>Log In</a>
                        <a>Log Out</a>
                    </ul>
                </nav>
            </div>
        </div>
        
    )
}
