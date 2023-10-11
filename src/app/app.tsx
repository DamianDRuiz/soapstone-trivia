import { useState } from 'react';
import Score from './components/Score/Score';
import Team from './components/Team/Team';
import TeamName from './components/TeamName/TeamName';
import Trivia from './components/Trivia/Trivia';

export function App() {
  const [teamLeftName, setTeamLeftName] = useState<string>('Lefty-Lucy');
  const [teamRightName, setTeamRightName] = useState<string>('Righty-Tighty');

  return (
    <Trivia>
      <Team>
        <TeamName value={teamLeftName} setValue={setTeamLeftName} />
        <Score />
      </Team>
      <Team>
        <TeamName value={teamRightName} setValue={setTeamRightName} />
        <Score />
      </Team>
    </Trivia>
  );
}

export default App;
