import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styles from './Login.module.css'
import { Element } from '../common/FormControls/FormControls'
import { required, maxLengthCreator } from '../../utils/validators/validators'

const maxLength30 = maxLengthCreator(30);
const maxLength50 = maxLengthCreator(50);
const Input = Element('input');

const LoginForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'Login'}
                validate={[required, maxLength50]}
                name={'login'} component={Input} /></div>
            <div><Field type={'password'} placeholder={'Password'}
                validate={[required, maxLength30]}
                name={'password'} component={Input} /></div>
            <div><Field type={'checkbox'}
                validate={[required]}
                name={'rememberMe'} component={Input} /><span>remember me</span></div>
            <div><button>Log in</button></div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div className={styles.loginFormWrapper}>
        <h2>Login</h2>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

export default Login;