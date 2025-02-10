import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.logo}>
        <img src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F02ef731e-d1f8-45d6-99d0-b4cdc1ce27c2_1200x1200.jpeg" alt="Logo" />
        <span>postable</span>
      </div>
      <ul className={styles.navLinks}>
        <li><Link to="/">Cards</Link></li>
        <li><Link to="/upload">Upload your own</Link></li>
        <li><Link to="/gifts">Gifts</Link></li>
        <li><Link to="/addresses">Addresses</Link></li>
        <li><Link to="/business">Business</Link></li>
      </ul>
      <div className={styles.navActions}>
        <Link to="/login" className={styles.login}>Log in</Link>
        <Link to="/signup" className={styles.signup}>Sign up</Link>
        <button className={styles.iconButton}>❤️</button>
        <button className={styles.iconButton}>🔍</button>
      </div>
    </nav>
  );
};

export default Header;
