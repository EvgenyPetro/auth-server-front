import FirstNameField from "./field/FirsNameField"
import LastNameField from "./field/LastNameField"
import RegisterUsernameField from "./field/RegisterUsernameField"
import RegisterPasswordField from "./field/RegisterPasswordField"
import formStyles from '../../../styles/forms.module.scss'
import Button from '../../buttons/Button'
import buttonStyles from '../../../styles/button.module.scss'

const RegisterForm = () => {
    return (
        <form className={formStyles.registerLoginForm}>
            <div className={formStyles.formNameContainer}>
            <FirstNameField id='firsName' label='First Name'/>
            <LastNameField id='lastName' label='Last Name'/>
            </div>
            <RegisterUsernameField id='username' label='Username'/>
            <RegisterPasswordField id='password' label='Password'/>
            <Button className={buttonStyles.defaultButton}> Create Account</Button>
        </form>
    )
}
export default RegisterForm