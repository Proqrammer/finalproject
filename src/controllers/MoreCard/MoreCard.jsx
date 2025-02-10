import styles from "./MoreCard.module.scss";

const MoreCard = () => {
  return (
    <section className={styles.moreCard}>
      <div className={styles.content}>
        <h1>
          The <span>#1</span> Free Online <br /> Address Book
        </h1>
        <p>
          The easiest way to get all of your friends’ mailing addresses.
        </p>
        <button className={styles.button}>Get address book</button>
      </div>
      <div className={styles.imageContainer}>
        <img src="https://png.pngtree.com/png-vector/20220816/ourmid/pngtree-chat-box-windows-bubbles-phone-message-template-png-image_6112836.png" alt="Phone Mockup" />
      </div>
    </section>
  );
};

export default MoreCard;

