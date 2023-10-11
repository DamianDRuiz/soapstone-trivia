import Player from '../Player/Player';

export function Players({ players }: PlayersProps) {
  const playerElements = players.map((player, i) => (
    <Player key={i} name={player.name} />
  ));
  return <div>{playerElements}</div>;
}

export interface PlayersProps {
  players: Player[];
}

export default Players;
