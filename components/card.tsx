import styles from "../styles/card.module.scss";

export default function Card() {
  return (
    <div className={`${styles.card}`}>
      <div className={styles.front}>quote</div>
      <div className={styles.back}>見積もり</div>
    </div>
  );
}
