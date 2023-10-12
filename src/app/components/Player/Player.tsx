import { useState } from 'react';
import { teamSwitcher } from 'src/app/hooks/useSwitchTeam/useSwitchTeam';
import Score from '../Score/Score';
import styles from './Player.module.scss';

export function Player({ name, switchHandler }: PlayerProps) {
  const [score, setScore] = useState<number>(0);
  const handleSwitch = () => {
    switchHandler(name);
  };

  return (
    <div className={styles.name}>
      <button className="switchButton" onClick={handleSwitch}>
        &#171;
      </button>
      {name} (<Score score={score} setScore={setScore} minimal={true} />)
    </div>
  );
}

export interface Player {
  name: string;
  score?: number;
}

export interface PlayerProps extends Player {
  switchHandler: teamSwitcher;
}
export default Player;
