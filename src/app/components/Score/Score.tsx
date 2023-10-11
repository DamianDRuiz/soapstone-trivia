import { SetStateAction } from 'react';

export function Score({ score, setScore }: ScoreProps) {
  const handleClick = () => setScore((prev) => prev + 1);

  return (
    <div>
      <span>Score: {score}</span>
      <button onClick={handleClick}>+</button>
    </div>
  );
}

interface ScoreProps {
  score: number;
  setScore: React.Dispatch<SetStateAction<number>>;
}

export default Score;
