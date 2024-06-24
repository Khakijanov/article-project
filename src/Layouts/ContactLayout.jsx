import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function ContactLayout() {
  return (
    <div>
        <h1>Contact</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident odit odio alias tempora dolorum, officia temporibus ab hic inventore? Molestiae, beatae velit. Itaque, harum debitis accusantium ducimus fugit sit et?</p>

        <nav>
            <NavLink className={'mr-8 btn btn-primary px-8' } to='faq' >FaQ</NavLink>
            <NavLink className={'btn btn-secondary px-8'} to='form' >Send Message</NavLink>
        </nav>
        <Outlet></Outlet>
    </div>
  )
}

export default ContactLayout