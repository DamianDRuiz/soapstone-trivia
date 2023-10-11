import styles from './Players.module.scss';

/* eslint-disable-next-line */
export interface PlayersProps {}

export function Players(props: PlayersProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Players!</h1>
    </div>
  );
}

export default Players;
