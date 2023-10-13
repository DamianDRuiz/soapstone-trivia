import { SetStateAction } from 'react';
import styles from './Score.module.scss';

export function Score({ score, setScore, minimal }: ScoreProps) {
  return (
    <div className={`${minimal ? styles.minimal : ''}`}>
      <span className={styles.score}>
        {minimal ? '' : 'Score: '}
        {score}
      </span>
      <button className={styles.button} onClick={setScore}>
        +
      </button>
    </div>
  );
}

interface ScoreProps {
  score: number;
  setScore: React.Dispatch<SetStateAction<number>>;
  minimal: boolean;
}

export default Score;
