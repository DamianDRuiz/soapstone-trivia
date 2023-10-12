import { SetStateAction } from 'react';
import Player from 'src/app/components/Player/Player';

export function useSwitchTeam(
  teamFirst: TeamState,
  teamSecond: TeamState
): SwitchTeamHook {
  const firstSwitcher: teamSwitcher = (name) =>
    switchTeam(name, teamFirst[0], teamSecond[0], teamFirst[1], teamSecond[1]);

  const secondSwitcher: teamSwitcher = (name) =>
    switchTeam(name, teamSecond[0], teamFirst[0], teamSecond[1], teamFirst[1]);

  const SwitchTeamStates: SwitchTeamHook = [firstSwitcher, secondSwitcher];

  return SwitchTeamStates;
}

function switchTeam(
  player: string,
  fromTeam: Player[],
  toTeam: Player[],
  setFrom: React.Dispatch<SetStateAction<Player[]>>,
  setTo: React.Dispatch<SetStateAction<Player[]>>
) {
  const playerObject: Player | undefined = fromTeam.find(
    (obj) => obj.name == player
  );

  if (playerObject == undefined) return;

  const fromTeamRemovedPlayer: Player[] = fromTeam.filter(
    (obj) => obj.name != player
  );

  const toTeamAddedPlayer = [...toTeam, playerObject];

  setFrom(fromTeamRemovedPlayer);
  setTo(toTeamAddedPlayer);
}

type TeamState = [Player[], React.Dispatch<SetStateAction<Player[]>>];
type SwitchTeamHook = [teamSwitcher, teamSwitcher];
export type teamSwitcher = (name: string) => void;

export default useSwitchTeam;
