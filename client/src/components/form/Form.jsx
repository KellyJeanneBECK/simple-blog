import styles from "./Form.module.css";

function Form() {
  return (
    <article className={styles.sectionForm}>
      <h3 className={styles.titleForm}>
        C&apos;est ici que j&apos;écris mes articles
      </h3>
      <form>
        <label htmlFor="title">Titre de l&apos;article :</label>
        <input type="text" id="title" name="title" required />

        <label htmlFor="publish">Date</label>
        <input type="date" id="publish" name="publish" required />

        <label htmlFor="intro">Une petite introduction :</label>
        <textarea id="intro" name="intro" required rows="4"></textarea>

        <label htmlFor="content">Contenu :</label>
        <textarea id="content" name="content" required rows="12"></textarea>

        <button type="submit" className={styles.btnForm}>
          Publier
        </button>
      </form>
    </article>
  );
}

export default Form;
