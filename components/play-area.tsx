import { useState } from "react";

import Card from "./card";
import Progress from "./progress";

import styles from "../styles/play-area.module.scss";
import { ICard } from "../interfaces/main";

const originalCards: ICard[] = [
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
  {
    id: 4,
    front: "subsidy",
    back: "助成金",
    checked: false,
  },
  {
    id: 5,
    front: "dispute",
    back: "争い",
    checked: false,
  },
];

export default function PlayArea() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [shuffled, setShuffled] = useState(false);

  let cards = originalCards.concat();

  const shuffle = () => {
    setShuffled(!shuffled);
    if (shuffled) {
      for (let i = cards.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
      }
    } else {
      cards = originalCards.concat();
    }
    console.log(cards, shuffled);
  };

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
      <div className={styles.inner}>
        <div className={styles.mixer}>
          <button
            className={`${shuffled ? styles.shuffled : ""}`}
            onClick={shuffle}
          >
            Shuffle
          </button>
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
        <Progress current={index + 1} total={cards.length} />
      </div>
    </section>
  );
}
