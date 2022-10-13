import styles from '../../../../styles/input.module.scss'

const LastNameField = ({ register, error }) => {
    return (
        <div className={styles.inputContainer}>
            <div className={styles.inputContainerHeader}>
                <div className={styles.inputLabel}>
                    <label htmlFor='lastName'>Last Name</label>
                </div>
                {error && <div className={styles.inputError}>{error.message}</div>}
            </div>
            <input {...register('lastName',
                {
                    required: 'Required',
                    maxLength: {
                        value: 32,
                        message: "32 Charecters Max"
                    },
                    minLength: {
                        value: 4,
                        message: "4 Charecters Min"
                    }
                })} className={styles.inputField} id='lastName'></input>
        </div>
    );
}

export default LastNameField;