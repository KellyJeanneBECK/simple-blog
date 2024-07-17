import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Beta Blog</h1>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/articles">Articles</Link>
      </nav>
    </header>
  );
}

export default Header;
