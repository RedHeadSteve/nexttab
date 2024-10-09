import logo from '../../assets/logotemp.png'
import './navbar.css'
import {NavLink} from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt="NextTab Logo"/>
            <ul>
                <li><NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                             to="/">Home</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                             to="/projecten">projecten</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                             to="/over-ons">over ons</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? 'active-menu-link' : 'default-menu-link'}
                             to="/contact">contact</NavLink></li>

            </ul>
        </nav>
    )
}