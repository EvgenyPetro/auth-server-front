import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Outlet} from "react-router";
import styles from './index.module.scss'

const NavBar = () => {
    const [authenticated, setAuthenticated] = useState(true)
    const login = () => {
        if (authenticated) {
            setAuthenticated(false)
        } else setAuthenticated(true)
    }

    return (
        <>
            <div className={styles.navbar}>
                <Link to="/">
                    Social Auth
                </Link>
                <button onClick={login}>Social
                    Auth </button>
                {authenticated ?
                    (
                        <div className={styles.register}>
                            <Link className={styles.ithem} to="/login">Login</Link>
                            <Link  className={styles.ithem} to="/registration">Registration</Link>
                        </div>
                    ) : (
                        <div className={styles.register}>
                            <div className={styles.ithem}>Profile</div>
                            <div className={styles.ithem}>LogOut</div>
                        </div>
                    )
                }
            </div>
            <Outlet/>
        </>

    );
};

export default NavBar;