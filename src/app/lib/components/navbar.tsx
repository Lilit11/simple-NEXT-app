import {NavLink} from "./navLink"

export const Navbar = ()=>{
    return <>
    <nav className="navbar">
        <NavLink className="navbar-item" href ='/'>home</NavLink>
        <NavLink className="navbar-item" href="/add">add</NavLink>
        <NavLink className="navbar-item" href="/signup">signup</NavLink>
        <NavLink className="navbar-item" href="/login">login</NavLink>
    </nav>
    </>
}