import { useState } from "react";

import Card from "./card";

import styles from "../styles/play-area.module.scss";
import { ICard } from "../interfaces/main";

const cards: ICard[] = [
  {
    id: 1,
    front: "command",
    back: "見渡す",
    checked: false,
  },
  {
    id: 2,
    front: "intriguing",
    back: "魅力のある",
    checked: false,
  },
  {
    id: 3,
    front: "overdue",
    back: "未払いの",
    checked: true,
  },
];

export default function PlayArea() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const prev = () => {
    setIndex(index - 1);
    setOpen(false);
  };

  const next = () => {
    setIndex(index + 1);
    setOpen(false);
  };

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <section className={styles.playArea}>
      <div className={styles.mixer}>
        <div>Shuffle</div>
        <button disabled={index === 0} onClick={prev}>
          Prev
        </button>
        <div className={styles.cardArea}>
          <Card card={cards[index]} open={open} onClick={toggle} />
        </div>
        <button disabled={index === cards.length - 1} onClick={next}>
          Next
        </button>
        <div>Repeat</div>
      </div>
    </section>
  );
}
