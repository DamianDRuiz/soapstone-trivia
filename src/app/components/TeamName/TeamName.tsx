import ClickToEditInput from '../ClickToEditInput/ClickToEditInput';

function TeamName({ value, setValue }: TeamNameProps) {
  return <ClickToEditInput value={value} setValue={setValue} />;
}

interface TeamNameProps {
  value: string;
  setValue: (value: string) => void;
}

export default TeamName;
