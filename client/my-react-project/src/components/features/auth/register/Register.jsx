import { Link } from "react-router-dom"
import style from "./Register.module.css"
import { useContext, useState } from "react"
import AuthContext from "../../../../contexts/authContext"
import useForm from "../../../../hooks/useForm"

const LoginFormKeys = {
    Username: 'username',
    Email: 'email',
    Password: 'password',
    RepeatPassword: 'rePassword'
}

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);
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
    
      
  const usernameValidator = () => {
    if (values.username.length < 4) {
      setErrors(state => ({
        ...state,
        username: 'Username Should be Atleast 4 symbols',
      }));
    } else {
      if (errors.username) {
        setErrors(state => ({ ...state, username: '' }));
      }
    }
  };

  const passwordValidator = () => {
    if (values.password.length < 5) {
      setErrors(state => ({
        ...state,
        password: 'Password Should be Atleast 5 symbols',
      }));
    } else {
      if (errors.password) {
        setErrors(state => ({ ...state, password: '' }));
      }
    }
  };


  const rePasswordValidator = () => {
    if (values.rePassword != values.password) {
      setErrors(state => ({
        ...state,
        rePassword: 'Passwords Should Match',
      }));
    } else {
      if (errors.rePassword) {
        setErrors(state => ({ ...state, rePassword: '' }));
      }
    }
  };
    
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
                <input type="text" id="username" name="username" placeholder="Peter..." onChange={onChange} onBlur={usernameValidator} value={values[LoginFormKeys.Username]}/>
                {errors.username && (
                    <p className={style.errorMessage}>{errors.username}</p>
                  )}

                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" placeholder="peter@gmail.com" onChange={onChange} onBlur={emailValidator} value={values[LoginFormKeys.Email]}/>
                {errors.email && (
                    <p className={style.errorMessage}>{errors.email}</p>
                  )}

                <label htmlFor="pass">Password:</label>
                <input type="password" name="password" id="register-password" onChange={onChange} onBlur={passwordValidator} value={values[LoginFormKeys.Password]}/>
                {errors.password && (
                    <p className={style.errorMessage}>{errors.password}</p>
                  )}

                <label htmlFor="rePassword">Confirm Password:</label>
                <input type="password" name="rePassword" id="rePassword" onChange={onChange} onBlur={rePasswordValidator} value={values[LoginFormKeys.RepeatPassword]}/>
                {errors.rePassword && (
                    <p className={style.errorMessage}>{errors.rePassword}</p>
                  )}


                <div className={style.registerSubmit}>
                    <input className={style.btnSubmit} disabled={(Object.values(errors).some(x => x)
                      || (Object.values(values).some(x => x == '')))} type="submit" value="Sign Up" />
                </div>
                

                <div className={style.registerDiv}>
                <p className={style.registerText}>
                        If you already have profile click <Link to="/login">here</Link>
                    </p>
                </div>
            </div>
        </form>
    </div>
    )
}
