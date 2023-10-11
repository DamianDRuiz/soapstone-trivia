import styles from './Team.module.scss';

function Team({ children }: TeamProps) {
  return <div className={styles.team}>{children}</div>;
}

interface TeamProps {
  children: JSX.Element[] | JSX.Element;
}

export default Team;
