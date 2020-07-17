import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styles from './Login.module.css'

const LoginForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'Login'} name={'login'} component={'input'}/></div>
            <div><Field type={'password'} placeholder={'Password'} name={'password'} component={'input'}/></div>
            <div><Field type={'checkbox'} name={'rememberMe'} component={'input'}/><span>remember me</span></div>
            <div><button>Log in</button></div>
            
        </form>
    </div>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div className={styles.loginFormWrapper}>
        <h2>Login</h2>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;