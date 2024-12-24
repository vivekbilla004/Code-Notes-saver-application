import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex-row gap-2 bg-blue-950 p-2 rounded-lg w-full mt-10 flex justify-center' >
      <NavLink to="/"
      className="w-150px p-2 rounded-md text-white hover:text-white ">
      Home
      </NavLink>
      <NavLink to="/pastes"
      className="w-150px p-2 rounded-md  text-white hover:text-white">
      pastes
      </NavLink>

    </div>
  )
}

export default Navbar
