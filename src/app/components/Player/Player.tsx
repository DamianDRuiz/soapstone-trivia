import { teamSwitcher } from 'src/app/hooks/useSwitchTeam/useSwitchTeam';
import Score from '../Score/Score';
import styles from './Player.module.scss';

export function Player({
  name,
  score,
  switchHandler,
  scoreHandler,
}: PlayerProps) {
  const handleSwitch = () => {
    switchHandler(name);
  };

  return (
    <div className={styles.name}>
      <button className="switchButton" onClick={handleSwitch}>
        &#171;
      </button>
      {name} (<Score score={score} setScore={scoreHandler} minimal={true} />)
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
