import ClickToEditInput from '../ClickToEditInput/ClickToEditInput';

function TeamName({ value, setValue }: TeamNameProps) {
  return (
    <h2>
      <ClickToEditInput value={value} setValue={setValue} />
    </h2>
  );
}

interface TeamNameProps {
  value: string;
  setValue: (value: string) => void;
}

export default TeamName;
