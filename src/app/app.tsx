import { useEffect, useState } from 'react';
import { useImmer } from 'use-immer';
import styles from './app.module.scss';
import AddPlayer from './components/AddPlayer/AddPlayer';
import FuturePlans from './components/FuturePlans/FuturePlans';
import Player from './components/Player/Player';
import Players from './components/Players/Players';
import Question from './components/Question/Question';
import Score from './components/Score/Score';
import Team from './components/Team/Team';
import TeamName from './components/TeamName/TeamName';
import Trivia from './components/Trivia/Trivia';
import { DEFAULT_LEFT, DEFAULT_RIGHT } from './contants';
import useSwitchTeam from './hooks/useSwitchTeam/useSwitchTeam';
import { setSwitchDirections } from './utils/setSwitchDirections';

export function App() {
  const [teamLeftName, setTeamLeftName] = useState<string>('Lefty-Loosey');
  const [teamRightName, setTeamRightName] = useState<string>('Righty-Tighty');
  const [scoreLeft, setScoreLeft] = useState<number>(0);
  const [scoreRight, setScoreRight] = useState<number>(0);
  const [playersLeft, setPlayersLeft] = useImmer<Player[]>(DEFAULT_LEFT);
  const [playersRight, setPlayersRight] = useImmer<Player[]>(DEFAULT_RIGHT);

  const [handleSwitchTeamLeft, handleSwitchTeamRight] = useSwitchTeam(
    [playersLeft, setPlayersLeft],
    [playersRight, setPlayersRight]
  );

  useEffect(setSwitchDirections, [playersLeft, playersRight]);

  function compare(a: Player, b: Player) {
    if (a.score < b.score) {
      return 1;
    }
    if (a.score > b.score) {
      return -1;
    }
    return 0;
  }

  useEffect(() => {
    setPlayersLeft((prev) => prev.sort(compare));
  }, [playersLeft]);
  useEffect(() => {
    setPlayersRight((prev) => prev.sort(compare));
  }, [playersRight]);

  return (
    <div className={styles.container}>
      <FuturePlans />
      <Trivia>
        <Team>
          <TeamName value={teamLeftName} setValue={setTeamLeftName} />
          <Score
            score={scoreLeft}
            setScore={() => setScoreLeft((prev) => prev + 1)}
            minimal={false}
          />
          <hr />
          <Players
            players={playersLeft}
            setPlayers={setPlayersLeft}
            switchHandler={handleSwitchTeamLeft}
            setTeamScore={setScoreLeft}
          />
          <AddPlayer setPlayers={setPlayersLeft} />
        </Team>
        <Team>
          <TeamName value={teamRightName} setValue={setTeamRightName} />
          <Score
            score={scoreRight}
            setScore={() => setScoreRight((prev) => prev + 1)}
            minimal={false}
          />
          <hr />
          <Players
            players={playersRight}
            setPlayers={setPlayersRight}
            switchHandler={handleSwitchTeamRight}
            setTeamScore={setScoreRight}
          />
          <AddPlayer setPlayers={setPlayersRight} />
        </Team>
        <Question />
      </Trivia>
    </div>
  );
}

export default App;
