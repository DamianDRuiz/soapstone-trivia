import styles from './Trivia.module.scss';
function Trivia({ children }: TriviaProps) {
  return <div className={styles.trivia}>{children}</div>;
}

interface TriviaProps {
  children: JSX.Element[];
}

export default Trivia;
