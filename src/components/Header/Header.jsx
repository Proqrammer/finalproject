import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Address Book</h1>
      <p>Kişilerinizi kolayca yönetin ve düzenleyin.</p>
    </header>
  );
};

export default Header;
