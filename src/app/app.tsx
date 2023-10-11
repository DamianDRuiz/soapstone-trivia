import { useState } from 'react';
import Score from './components/Score/Score';
import Team from './components/Team/Team';
import TeamName from './components/TeamName/TeamName';
import Trivia from './components/Trivia/Trivia';

export function App() {
  const [teamLeftName, setTeamLeftName] = useState<string>('Lefty-Lucy');
  const [teamRightName, setTeamRightName] = useState<string>('Righty-Tighty');

  const [scoreLeft, setScoreLeft] = useState<number>(0);
  const [scoreRight, setScoreRight] = useState<number>(0);

  return (
    <Trivia>
      <Team>
        <TeamName value={teamLeftName} setValue={setTeamLeftName} />
        <Score score={scoreLeft} setScore={setScoreLeft} />
      </Team>
      <Team>
        <TeamName value={teamRightName} setValue={setTeamRightName} />
        <Score score={scoreRight} setScore={setScoreRight} />
      </Team>
    </Trivia>
  );
}

export default App;
