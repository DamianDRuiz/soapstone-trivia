import { teamSwitcher } from 'src/app/hooks/useSwitchTeam/useSwitchTeam';
import Player from '../Player/Player';

export function Players({
  players,
  setPlayers,
  switchHandler,
  setTeamScore,
}: PlayersProps) {
  const playerElements = players.map((player, i) => {
    const scoreHandler = () => {
      setPlayers((draft: Player[]) => {
        const playerObj: any = draft.find(
          (draftObj: Player) => draftObj.name == player.name
        );
        playerObj.score++;
      });
      setTeamScore((prev: number) => prev + 1);
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
  setPlayers: any;
  switchHandler: teamSwitcher;
  setTeamScore: any;
}

export default Players;
