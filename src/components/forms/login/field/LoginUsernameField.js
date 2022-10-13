import styles from '../../../../styles/input.module.scss'

const LoginUsernameField = ({ register, error }) => {
    return (
        <div className={styles.inputContainer}>
            <div className={styles.inputContainerHeader}>
                <div className={styles.inputLabel}>
                    <label htmlFor='username'>Username</label>
                </div>
                {error && <div className={styles.inputError}>{error.message}</div>}
            </div>
            <input {...register('username', {
                required: 'Required',
                maxLength: {
                    value: 32,
                    message: '32 Characters Max',
                },
                minLength: {
                    value: 4,
                    message: '4 Characters Min'
                }
            })} className={styles.inputField} id='username'></input>
        </div>
    );
}

export default LoginUsernameField;