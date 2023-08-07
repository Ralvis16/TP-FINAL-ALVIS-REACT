import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
      <Link to="/">
            <img className='logo' src="/public/img/RalvisGaming.png" alt="Logo" />
        </Link>

      <nav className='navbar'>
        <ul>
          <li>
            <NavLink className="miBtn" to="/categoria/2"> Consolas </NavLink>
          </li>

          <li>
            <NavLink className="miBtn" to="/categoria/3"> Juegos </NavLink>
          </li>

        </ul>
      </nav>

      <CartWidget />
    </header>
  )
}

export default NavBar