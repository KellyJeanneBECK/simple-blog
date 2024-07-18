import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <p className={styles.footerText}>
        <a href="#">LinkedIn</a> • <a href="#">GitHub</a>
      </p>
    </footer>
  );
}

export default Footer;
