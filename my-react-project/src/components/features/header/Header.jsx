export default function Header() {
    
    return(
        <nav className="navbar  navbar-light">

                <ul className="left-links">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">My Games</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">All Games</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Create New Offer</a>
                    </li>

                </ul>

                <ul className="right-links">
                
                    <li className="nav-item">
                        <a className="nav-link" href="#">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Register</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Logout</a>
                    </li>
                </ul>
               
        </nav>
    )
}