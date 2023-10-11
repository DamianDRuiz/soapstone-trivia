import { useState } from 'react';
import { useImmer } from 'use-immer';
import AddPlayer from './components/AddPlayer/AddPlayer';
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

  const [playersLeft, setPlayersLeft] = useImmer<Player[]>([
    { name: 'SassyNoodle' },
  ]);
  const [playersRight, setPlayersRight] = useImmer<Player[]>([
    { name: 'Justini_Tourtellini' },
  ]);

  return (
    <Trivia>
      <Team>
        <TeamName value={teamLeftName} setValue={setTeamLeftName} />
        <Score score={scoreLeft} setScore={setScoreLeft} minimal={false} />
        <hr />
        <Players players={playersLeft} />
        <AddPlayer setPlayers={setPlayersLeft} />
      </Team>
      <Team>
        <TeamName value={teamRightName} setValue={setTeamRightName} />
        <Score score={scoreRight} setScore={setScoreRight} minimal={false} />
        <hr />
        <Players players={playersRight} />
        <AddPlayer setPlayers={setPlayersRight} />
      </Team>
    </Trivia>
  );
}

export default App;
