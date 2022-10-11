import formStyles from '../../../styles/forms.module.scss'
import LoginUsernameField from './field/LoginUsernameField'
import LoginPasswordField from './field/LoginPasswordField'
import Button from '../../buttons/Button'
import buttonStyles from '../../../styles/button.module.scss'

const RegisterForm = () => {
    return (
        <form className={formStyles.registerLoginForm}>
            <LoginUsernameField id='username' label='Username'/>
            <LoginPasswordField id='password' label='Password'/>
            <Button className={buttonStyles.defaultButton}>Login</Button>
        </form>
    )
}
export default RegisterForm