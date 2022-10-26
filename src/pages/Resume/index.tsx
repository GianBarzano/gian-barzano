import Header from "components/Header";
import SideBar from "components/SideBar";
import styles from "./index.module.scss";
import About from "./About";
import Experiences from "./Experiences";
import Grades from "./Grades";

export default function Resume() {
  return (
    <div className={styles.Resume}>
      <Header className={styles.Header}/>
      <main className={styles.Main}>
        <About />
        <Experiences />
        <Grades />
      </main>
      <SideBar className={styles.SideBar}/>
    </div>
  );
}
