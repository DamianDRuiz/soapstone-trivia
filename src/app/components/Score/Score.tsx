import styles from './Score.module.scss';

/* eslint-disable-next-line */
export interface ScoreProps {}

export function Score(props: ScoreProps) {
  return (
    <div className={styles['container']}>
      <span>Score: 0</span>
    </div>
  );
}

export default Score;
