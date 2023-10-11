import { useState } from 'react';
import Score from '../Score/Score';
import styles from './Player.module.scss';

export function Player({ name }: PlayerProps) {
  const [score, setScore] = useState<number>(0);

  return (
    <div className={styles.name}>
      {name} (<Score score={score} setScore={setScore} minimal={true} />)
    </div>
  );
}

export interface Player {
  name: string;
  score?: number;
}

export interface PlayerProps extends Player {}
export default Player;
