import ClickToEditInput from '../ClickToEditInput/ClickToEditInput';

function TeamName({ value, setValue }: TeamNameProps) {
  return (
    <>
      <small>(Click team name to edit it)</small>
      <h2>
        <ClickToEditInput value={value} setValue={setValue} />
      </h2>
    </>
  );
}

interface TeamNameProps {
  value: string;
  setValue: (value: string) => void;
}

export default TeamName;
