
import { Link } from "react-router-dom"
import style from "./Login.module.css"
import { useContext, useState } from "react"

import AuthContext from "../../../../contexts/authContext"
import useForm from "../../../../hooks/useForm"

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
}

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const [errors, setErrors] = useState({});

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }

      const emailValidator = () => {
        if (!validateEmail(values.email)) {
          setErrors(state => ({
            ...state,
            email: 'Invalid Email Adress',
          }));
        } else {
          if (errors.email) {
            setErrors(state => ({ ...state, email: '' }));
          }
        }
      };

      const passwordValidator = () => {
        if (values.password.length < 5) {
          setErrors(state => ({
            ...state,
            password: 'Your Password Shoul be Atleast 5 symbols',
          }));
        } else {
          if (errors.password) {
            setErrors(state => ({ ...state, password: '' }));
          }
        }
      };

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
                <input type="text" id="email" name="email" placeholder="peter@gmail.com" onChange={onChange} onBlur={emailValidator} value={values[LoginFormKeys.Email]}/>
                {errors.email && (
                    <p className={style.errorMessage}>{errors.email}</p>
                  )}

                <label htmlFor="pass">Password:</label>
                <input type="password" name="password" id="login-password" onChange={onChange} onBlur={passwordValidator} value={values[LoginFormKeys.Password]} />
                {errors.password && (
                    <p className={style.errorMessage}>{errors.password}</p>
                  )}
                  
                <div className={style.loginSubmit}>
                    <input className={style.btnSubmit} disabled={(Object.values(errors).some(x => x)
                      || (Object.values(values).some(x => x == '')))}  type="submit" value="Sign In" />
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