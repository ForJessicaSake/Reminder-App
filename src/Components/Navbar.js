import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <section className ='navbar'>
            <h1>Reminder</h1>
            <ul className='links'>
                <li><Link to ='/'>Home</Link></li>
                <li><Link to='/Reminder'>Add</Link></li>
            </ul>
        </section>
    )
}

export default Navbar