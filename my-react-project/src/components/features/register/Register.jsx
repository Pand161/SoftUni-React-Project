import { Link } from "react-router-dom"

export default function Register() {
    return(
    <div id="register-form" className="register-form">
        <form id="register">
            <div className="register-container">

            <div className="register-title">Register</div>

                <label htmlFor="username">Username:</label>
                <input type="username" id="username" name="username" placeholder="Peter..." />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="peter@gmail.com" />

                <label htmlFor="pass">Password:</label>
                <input type="password" name="password" id="register-password" />

                <label htmlFor="con-pass">Confirm Password:</label>
                <input type="password" name="confirm-password" id="confirm-password" />
                
                <div className="register-submit">
                    <input className="btn-submit" type="submit" value="Sign Up" />
                </div>
                

                <div className="register-div">
                <p className="register-text">
                        If you already have profile click <Link to="/login">here</Link>
                    </p>
                </div>
                    {/* <p>
                        <span>If you already have profile click <Link to="/login">here</Link></span>
                    </p> */}
            </div>
        </form>
    </div>
    )
}
