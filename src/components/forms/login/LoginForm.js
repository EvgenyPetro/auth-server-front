import formStyles from '../../../styles/forms.module.scss'
import LoginUsernameField from './field/LoginUsernameField'
import LoginPasswordField from './field/LoginPasswordField'
import Button from '../../buttons/Button'
import buttonStyles from '../../../styles/button.module.scss'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'

const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    return (
        <form className={formStyles.registerLoginForm} onSubmit={handleSubmit(onSubmit)}>
            <LoginUsernameField register={register} error={errors.username} />
            <LoginPasswordField register={register} error={errors.password} />
            <Button className={buttonStyles.defaultButton}>Login</Button>
            <div className={formStyles.footerText}>
                <span>Don't have an account? </span>
                <Link to='/registration'>
                <span>Create</span>
                </Link>
            </div>
        </form>
    )
}
export default RegisterForm