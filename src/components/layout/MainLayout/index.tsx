import { Outlet } from 'react-router-dom';
import Header from '../../features/Header';
import Footer from '../../features/Footer';
import styles from './styles.module.css';

export const MainLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
