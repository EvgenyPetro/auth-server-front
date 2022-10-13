import styles from './index.module.scss';

 const DashboardLayout = ({ children }) => (
  <div className={styles.layout}>
    <NavigationSidebar />
    <main className={styles.main}>{children}</main>
  </div>
);


export default DashboardLayout;