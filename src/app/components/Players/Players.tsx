import { teamSwitcher } from 'src/app/hooks/useSwitchTeam/useSwitchTeam';
import Player from '../Player/Player';

export function Players({ players, switchHandler }: PlayersProps) {
  const playerElements = players.map((player, i) => (
    <Player key={i} name={player.name} switchHandler={switchHandler} />
  ));
  return <div>{playerElements}</div>;
}

export interface PlayersProps {
  players: Player[];
  switchHandler: teamSwitcher;
}

export default Players;
