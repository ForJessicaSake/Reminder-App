import React from 'react'
import './Navbar.css';

function Navbar() {
    return (
        <section className ='navbar'>
            <h1>Reminder</h1>
            <ul className='links'>
                <li><a href='/'>Home</a></li>
                <li><a href='/add'>Add</a></li>
            </ul>
        </section>
    )
}

export default Navbar