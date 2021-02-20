import Image from "next/image";

import styles from "../styles/header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Image priority src="/icon.png" height={44} width={44} />
      </div>
    </header>
  );
}
