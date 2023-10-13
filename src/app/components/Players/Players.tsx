import { teamSwitcher } from 'src/app/hooks/useSwitchTeam/useSwitchTeam';
import Player from '../Player/Player';

export function Players({ players, setPlayers, switchHandler }: PlayersProps) {
  const playerElements = players.map((player, i) => {
    const scoreHandler = () => {
      setPlayers((draft) => {
        draft.find((draftObj) => draftObj.name == player.name).score++;
      });
    };
    return (
      <Player
        key={i}
        name={player.name}
        score={player.score}
        switchHandler={switchHandler}
        scoreHandler={scoreHandler}
      />
    );
  });
  return <div>{playerElements}</div>;
}

export interface PlayersProps {
  players: Player[];
  switchHandler: teamSwitcher;
}

export default Players;
