import styles from '../../../../styles/input.module.scss'

const LastNameField = ({id, label}) => {
    return (
        <div className={styles.inputContainer}>
            <div className={styles.inputContainerHeader}>
                <div className={styles.inputLabel}>
                    <label htmlFor={id}>{label}</label>
                </div>
                <div className={styles.inputError}>Error</div>
            </div>
            <input className={styles.inputField} id={id}></input>
        </div>
    );
}

export default LastNameField;