import React from 'react'
import image from './assets/1000_F_500611919_5wuf1qGRCubiXXxIa7og1fLLCyHi6qP9.jpg'
export default function Nav() {
  return (
    <div>
    <nav>
        <figure class="movie">
            <img src={image} alt=""class="navlogo"/>
        </figure>
        <ul class="nav__lists">
            <li className="nav__list"><a href="">Home</a></li>
           <li className="nav__list"><a href="#movies">Movies</a></li>
           <li className="nav__list"> <a href="#price">Tickets</a></li>
        </ul>
    </nav>
    </div>
  )
}
