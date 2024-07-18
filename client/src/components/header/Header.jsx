import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <h1>Beta Blog</h1>
      <nav>
        <Link to="/" className={styles.navLink}>
          Accueil
        </Link>
        <Link to="/articles" className={styles.navLink}>
          Articles
        </Link>
      </nav>
    </header>
  );
}

export default Header;
