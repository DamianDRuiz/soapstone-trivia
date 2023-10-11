import { useState } from 'react';
import Player from './components/Player/Player';
import Players from './components/Players/Players';
import Score from './components/Score/Score';
import Team from './components/Team/Team';
import TeamName from './components/TeamName/TeamName';
import Trivia from './components/Trivia/Trivia';

export function App() {
  const [teamLeftName, setTeamLeftName] = useState<string>('Lefty-Lucy');
  const [teamRightName, setTeamRightName] = useState<string>('Righty-Tighty');

  const [scoreLeft, setScoreLeft] = useState<number>(0);
  const [scoreRight, setScoreRight] = useState<number>(0);

  const [playersLeft, setPlayersLeft] = useState<Player[]>([
    { name: 'SassyNoodle' },
  ]);
  const [playersRight, setPlayersRight] = useState<Player[]>([
    { name: 'Justini_Tourtellini' },
  ]);

  return (
    <Trivia>
      <Team>
        <TeamName value={teamLeftName} setValue={setTeamLeftName} />
        <Score score={scoreLeft} setScore={setScoreLeft} />
        <hr />
        <Players players={playersLeft} />
      </Team>
      <Team>
        <TeamName value={teamRightName} setValue={setTeamRightName} />
        <Score score={scoreRight} setScore={setScoreRight} />
        <hr />
        <Players players={playersRight} />
      </Team>
    </Trivia>
  );
}

export default App;
