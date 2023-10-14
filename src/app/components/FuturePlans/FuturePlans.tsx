import styles from './FuturePlans.module.scss';

export function FuturePlans(props: FuturePlansProps) {
  return (
    <div className={styles['container']}>
      <h1>Beta Soapstone Trivia Card!</h1>
      <p>
        Use my learning project to keep track of trivia games using your phone's
        or PC's web browser! Here is the run-down:{' '}
      </p>
      <ul>
        <li>
          <strong>Team Names</strong>: Change the <strong>team names</strong> by
          clicking on one and pressing the enter/return key to save.
        </li>
        <li>
          <strong>Scores</strong>: Keep track of{' '}
          <strong>player/team scores</strong> by using the + buttons. Increasing
          a player's score increases their current team's score.
        </li>
        <li>
          <strong>Players</strong>: Use the &#171; and &#187; buttons to{' '}
          <strong>swap a player's team</strong>. This will not affect team
          scores!
        </li>
        <li>
          <strong>The Near Future</strong>: I'll be adding a way to get and
          track trivia questions on the fly, by any category and difficulty!
        </li>
      </ul>
    </div>
  );
}

/* eslint-disable-next-line */
export interface FuturePlansProps {}

export default FuturePlans;
