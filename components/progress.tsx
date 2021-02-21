import styles from "../styles/progress.module.scss";

export default function Progress({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  return (
    <div>
      <progress className={styles.progress} value={current} max={total} />
      <div>
        {current}/{total}
      </div>
    </div>
  );
}
