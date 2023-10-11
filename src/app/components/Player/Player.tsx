import styles from './Player.module.scss';

export function Player({ name, score = 0 }: PlayerProps) {
  return <div className={styles.name}>{name}</div>;
}

export interface Player {
  name: string;
  score?: number;
}

export interface PlayerProps extends Player {}
export default Player;
