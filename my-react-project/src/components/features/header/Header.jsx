import { Link } from "react-router-dom"

export default function Header() {
    
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/my-games">My Games</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/all-games">All Games</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/create-game">Create New Offer</Link>
                </li>
            </ul>

            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <Link className="nav-link" to="/profile">User's Profile</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Logout</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}