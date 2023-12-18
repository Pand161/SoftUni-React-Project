/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"
import style from "./Login.module.css"
import { useContext } from "react"

import AuthContext from "../../../../contexts/authContext"
import useForm from "../../../../hooks/useForm"

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
}

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const {values, onChange, onSubmit} = useForm(loginSubmitHandler ,{
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    })

    return(
        <div id="login-form" className={style.loginForm}>
        <form id="login" onSubmit={onSubmit}>
            <div className={style.loginContainer}>

            <div className={style.loginTitle}>Login</div>

                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" placeholder="peter@gmail.com" onChange={onChange} value={values[LoginFormKeys.Email]}/>

                <label htmlFor="pass">Password:</label>
                <input type="password" name="password" id="login-password" onChange={onChange} value={values[LoginFormKeys.Password]} />

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