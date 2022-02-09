import React from 'react'
// import { NavLink } from 'react-router-dom'
import { Scrollchor, linear } from 'react-scrollchor'

function NavLinks() {
  return (
    <ul className=" text-white font-bold text-lg flex mr-10">
      <li>
        <Scrollchor to="Home">Home</Scrollchor>
      </li>
      <li>
        <Scrollchor
          to="competences"
          animate={{ duration: 1000, easing: linear }}
        >
          Competences
        </Scrollchor>
      </li>
      <li>
        <Scrollchor
          to="#portfolio"
          animate={{ duration: 1000, easing: linear }}
        >
          Projets
        </Scrollchor>
      </li>
      <li>
        <Scrollchor to="#contact" animate={{ duration: 1000, easing: linear }}>
          Contact
        </Scrollchor>
      </li>
    </ul>
  )
}

export default NavLinks
