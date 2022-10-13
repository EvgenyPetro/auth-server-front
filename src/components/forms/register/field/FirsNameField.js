import styles from '../../../../styles/input.module.scss'

const FirstNameField = ({register, error}) => {
    return (
        <div className={styles.inputContainer}>
            <div className={styles.inputContainerHeader}>
                <div className={styles.inputLabel}>
                    <label htmlFor='firsName'>First Name</label>
                </div>
                {error && <div className={styles.inputError}>{error.message}</div>}
            </div>
            <input {...register('firsName', {
                required : 'require',
                maxLength:{
                    value: 32,
                    message : '32 Characters Max'
                },
                minLength:{
                    value: 4,
                    message : '4 Characters Min'
                }
                })}  className={styles.inputField} id='firsName'></input>
        </div>
    );
}

export default FirstNameField;