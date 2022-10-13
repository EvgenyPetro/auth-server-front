import styles from './index.module.scss';
import { NavigationSidebarItem } from './items/NavigationSidebarItem';

export const NavigationSidebar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navItemContainer}>
          <NavigationSidebarItem />
      </div>
    </nav>
  );
};