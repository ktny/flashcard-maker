import styles from "../styles/card.module.scss";
import { ICard } from "../interfaces/main";

export default function Card({
  card,
  open,
  onClick,
}: {
  card: ICard;
  open: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`${styles.card} ${open ? styles.open : ""}`}
      onClick={onClick}
    >
      <div className={styles.front}>{card.front}</div>
      <div className={styles.back}>{card.back}</div>
    </div>
  );
}
