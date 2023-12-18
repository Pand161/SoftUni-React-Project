import { Link } from "react-router-dom"
import style from "./Register.module.css"
import { useContext } from "react"
import AuthContext from "../../../../contexts/authContext"
import useForm from "../../../../hooks/useForm"

const LoginFormKeys = {
    Username: 'username',
    Email: 'email',
    Password: 'password',
    RepeatPassword: 'rePass'
}

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);
    const {values, onChange, onSubmit} = useForm(registerSubmitHandler, {
        [LoginFormKeys.Username]: '',
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
        [LoginFormKeys.RepeatPassword]: '',
    })

    return(
    <div id="register-form" className={style.registerForm}>
        <form id="register" onSubmit={onSubmit}>
            <div className={style.registerContainer}>

            <div className={style.registerTitle}>Register</div>

                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="Peter..." onChange={onChange} value={values[LoginFormKeys.Username]}/>

                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" placeholder="peter@gmail.com" onChange={onChange} value={values[LoginFormKeys.Email]}/>

                <label htmlFor="pass">Password:</label>
                <input type="password" name="password" id="register-password" onChange={onChange} value={values[LoginFormKeys.Password]}/>

                <label htmlFor="rePass">Confirm Password:</label>
                <input type="password" name="rePass" id="rePass" onChange={onChange} value={values[LoginFormKeys.RepeatPassword]}/>
                
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
