import { SetStateAction } from 'react';
import styles from './Score.module.scss';

export function Score({ score, setScore }: ScoreProps) {
  const handleClick = () => setScore((prev) => prev + 1);

  return (
    <div>
      <span className={styles.score}>Score: {score}</span>
      <button className={styles.button} onClick={handleClick}>
        +
      </button>
    </div>
  );
}

interface ScoreProps {
  score: number;
  setScore: React.Dispatch<SetStateAction<number>>;
}

export default Score;
