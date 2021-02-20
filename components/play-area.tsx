import Card from "./card";

import styles from "../styles/play-area.module.scss";

export default function PlayArea() {
  return (
    <section className={styles.playArea}>
      <div className={styles.mixer}>
        <div>Shuffle</div>
        <div>Prev</div>
        <div className={styles.cardArea}>
          <Card />
        </div>
        <div>Next</div>
        <div>Repeat</div>
      </div>
    </section>
  );
}
