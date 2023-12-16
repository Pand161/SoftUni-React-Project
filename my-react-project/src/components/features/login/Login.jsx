import { Link } from "react-router-dom"

export default function Login() {
    return(
        <div id="login-form" className="login-form">
        <form id="login">
            <div className="login-container">

            <div className="login-title">Login</div>

                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" placeholder="peter@gmail.com" />

                <label htmlFor="pass">Password:</label>
                <input type="password" name="password" id="login-password" />

                <div className="login-submit">
                    <input className="btn-submit" type="submit" value="Sign In" />
                </div>
                

                <div className="login-div">
                <p className="login-text">
                        If you don't have profile click <Link to="/register">here</Link>
                    </p>
                </div>
        
            </div>
        </form>
    </div>
    )
}