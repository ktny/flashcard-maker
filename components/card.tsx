import { useState } from "react";

import styles from "../styles/card.module.scss";

export default function Card() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`${styles.card} ${open ? styles.open : ""}`}
      onClick={() => setOpen(!open)}
    >
      <div className={styles.front}>quote</div>
      <div className={styles.back}>見積もり</div>
    </div>
  );
}
