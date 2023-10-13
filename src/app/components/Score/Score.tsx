import styles from './Score.module.scss';

export function Score({ score, setScore, minimal }: ScoreProps) {
  return (
    <div className={`${minimal ? styles.minimal : ''}`}>
      <span className={styles.score}>
        {minimal ? '' : 'Score: '}
        {score}
      </span>
      <button className={`${styles.button} roundButton`} onClick={setScore}>
        +
      </button>
    </div>
  );
}

interface ScoreProps {
  score: number;
  setScore: any;
  minimal: boolean;
}

export default Score;
