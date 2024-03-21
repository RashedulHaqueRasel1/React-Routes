import { NavLink } from "react-router-dom";
import './NavBar.css'

export default function NavBar() {
    return (
        <div>

            <ul className="text-center space-x-8 mt-10 font-semibold text-blue-600">

                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/contact'}>Contact</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
               

            </ul>

        </div>
    )
}
