import { useState } from 'react';
import ClickToEditInput from './components/ClickToEditInput/ClickToEditInput';
export function App() {
  const [teamLeftName, setTeamLeftName] = useState<string>('Lefty-Lucy');
  const [teamRightName, setTeamRightName] = useState<string>('Righty-Tighty');
  return (
    <Trivia>
      <Team>
        <TeamName value={teamLeftName} setValue={setTeamLeftName} />
      </Team>
      <Team>
        <TeamName value={teamRightName} setValue={setTeamRightName} />
      </Team>
    </Trivia>
  );
}

function Trivia({ children }: any) {
  return children;
}

function Team({ children }: any) {
  return children;
}
function TeamName({ value, setValue }: TeamNameProps) {
  return <ClickToEditInput value={value} setValue={setValue} />;
}

interface TeamNameProps {
  value: string;
  setValue: (value: string) => void;
}

export default App;
