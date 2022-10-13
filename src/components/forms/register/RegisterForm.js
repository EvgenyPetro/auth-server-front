import FirstNameField from "./field/FirsNameField"
import LastNameField from "./field/LastNameField"
import RegisterUsernameField from "./field/RegisterUsernameField"
import RegisterPasswordField from "./field/RegisterPasswordField"
import formStyles from '../../../styles/forms.module.scss'
import Button from '../../buttons/Button'
import buttonStyles from '../../../styles/button.module.scss'
import { Link } from "react-router-dom"
import { useForm } from 'react-hook-form'

const RegisterForm = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={formStyles.registerLoginForm}>
            <div className={formStyles.formNameContainer}>
                <FirstNameField register={register} error={errors.firsName} />
                <LastNameField register={register} error={errors.lastName} />
            </div>
            <RegisterUsernameField register={register} error={errors.username} />
            <RegisterPasswordField register={register} error={errors.password} />
            <Button className={buttonStyles.defaultButton}> Create Account</Button>
            <div className={formStyles.footerText}>
                <span>Alredy hawe an account? </span>
                <Link to='/login'>
                    <span>Login</span>
                </Link>
            </div>
        </form>
    )
}
export default RegisterForm