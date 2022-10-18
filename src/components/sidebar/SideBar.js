import { Outlet } from "react-router"
import styles from './index.module.scss'


const SideBar = () => {
    return (
        <div className={styles.sideNavContainer}>
            <div className={styles.navUpper}> Social
                <div className={styles.navMenu}>
                    <a className={styles.menuItem} href="#">adsf</a>
                    <a className={styles.menuItem} href="#">adsf</a>
                    <a className={styles.menuItem} href="#">adsf</a>
                </div>
            </div>
            
        </div>
    );
}

export default SideBar;