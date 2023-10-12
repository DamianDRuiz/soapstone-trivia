import { useEffect, useState } from 'react';
import { useImmer } from 'use-immer';
import AddPlayer from './components/AddPlayer/AddPlayer';
import Player from './components/Player/Player';
import Players from './components/Players/Players';
import Score from './components/Score/Score';
import Team from './components/Team/Team';
import TeamName from './components/TeamName/TeamName';
import Trivia from './components/Trivia/Trivia';
import { DEFAULT_TEAM_LEFT, DEFAULT_TEAM_RIGHT } from './contants';
import useSwitchTeam from './hooks/useSwitchTeam/useSwitchTeam';

export function App() {
  const [teamLeftName, setTeamLeftName] = useState<string>('Lefty-Lucy');
  const [teamRightName, setTeamRightName] = useState<string>('Righty-Tighty');
  const [scoreLeft, setScoreLeft] = useState<number>(0);
  const [scoreRight, setScoreRight] = useState<number>(0);
  const [playersLeft, setPlayersLeft] = useImmer<Player[]>(DEFAULT_TEAM_LEFT);
  const [playersRight, setPlayersRight] =
    useImmer<Player[]>(DEFAULT_TEAM_RIGHT);

  const setSwitchDirections = () =>
    document
      .querySelectorAll('.team:first-of-type .switchButton')
      .forEach((button) => (button.innerHTML = '&#187')); //&#187; >> || &#171; <<

  useEffect(setSwitchDirections, [playersLeft, playersRight]);

  const [handleSwitchTeamLeft, handleSwitchTeamRight] = useSwitchTeam(
    [playersLeft, setPlayersLeft],
    [playersRight, setPlayersRight]
  );

  return (
    <Trivia>
      <Team>
        <TeamName value={teamLeftName} setValue={setTeamLeftName} />
        <Score score={scoreLeft} setScore={setScoreLeft} minimal={false} />
        <hr />
        <Players players={playersLeft} switchHandler={handleSwitchTeamLeft} />
        <AddPlayer setPlayers={setPlayersLeft} />
      </Team>
      <Team>
        <TeamName value={teamRightName} setValue={setTeamRightName} />
        <Score score={scoreRight} setScore={setScoreRight} minimal={false} />
        <hr />
        <Players players={playersRight} switchHandler={handleSwitchTeamRight} />
        <AddPlayer setPlayers={setPlayersRight} />
      </Team>
    </Trivia>
  );
}

export default App;
