import Link from "next/link";
import { IPlayList } from "../interfaces/main";

import styles from "../styles/play-lists.module.scss";

export default function PlayLists({ playLists }: { playLists: IPlayList[] }) {
  return (
    <section className={styles.playLists}>
      {playLists.map((playList) => {
        return (
          <div key={playList.id} className={styles.playList}>
            <Link href="/play-list">{playList.name}</Link>
          </div>
        );
      })}
    </section>
  );
}
