import { Link } from "react-router-dom"
import style from "./Login.module.css"

export default function Login() {
    return(
        <div id="login-form" className={style.loginForm}>
        <form id="login">
            <div className={style.loginContainer}>

            <div className={style.loginTitle}>Login</div>

                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" placeholder="peter@gmail.com" />

                <label htmlFor="pass">Password:</label>
                <input type="password" name="password" id="login-password" />

                <div className={style.loginSubmit}>
                    <input className={style.btnSubmit} type="submit" value="Sign In" />
                </div>
                

                <div className={style.loginDiv}>
                <p className={style.loginText}>
                        If you don't have profile click <Link to="/register">here</Link>
                    </p>
                </div>
        
            </div>
        </form>
    </div>
    )
}