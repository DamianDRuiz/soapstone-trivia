import styles from './Player.module.scss';

/* eslint-disable-next-line */
export interface PlayerProps {}

export function Player(props: PlayerProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Player!</h1>
    </div>
  );
}

export default Player;
