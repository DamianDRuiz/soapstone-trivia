function Trivia({ children }: TriviaProps) {
  return <div>{children}</div>;
}

interface TriviaProps {
  children: JSX.Element[];
}

export default Trivia;
