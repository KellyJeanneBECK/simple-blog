import Form from "../../components/form/Form";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <section>
        <h2>Bienvenue, cher•ère lecteur•trice</h2>
        <p>
          Sur ce blog je fais part de mes dernières découvertes sur les thèmes
          du web et du développement en général.
        </p>
      </section>
      <Form />
      <div className={styles.linkSection}>
        <Link to="/articles" className={styles.homeLink}>
          Tous les articles
        </Link>
      </div>
    </>
  );
}

export default Home;
