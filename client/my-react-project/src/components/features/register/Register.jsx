import { Link } from "react-router-dom"
import style from "./Register.module.css"

export default function Register() {
    return(
    <div id="register-form" className={style.registerForm}>
        <form id="register">
            <div className={style.registerContainer}>

            <div className={style.registerTitle}>Register</div>

                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="Peter..." />

                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" placeholder="peter@gmail.com" />

                <label htmlFor="pass">Password:</label>
                <input type="password" name="password" id="register-password" />

                <label htmlFor="con-pass">Confirm Password:</label>
                <input type="password" name="confirm-password" id="confirm-password" />
                
                <div className={style.registerSubmit}>
                    <input className={style.btnSubmit} type="submit" value="Sign Up" />
                </div>
                

                <div className={style.registerDiv}>
                <p className={style.registerText}>
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
