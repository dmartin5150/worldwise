import Sidebar from "../components/Sidebar";
import styles from './AppLayout.module.css';
import Map from "../components/Map";

function AppLayout() {
  return (
    <nav className={styles.app}>
      <Sidebar />
      <Map />
    </nav>
  )
}

export default AppLayout
