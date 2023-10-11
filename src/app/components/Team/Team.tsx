function Team({ children }: TeamProps) {
  return <div>{children}</div>;
}

interface TeamProps {
  children: JSX.Element[] | JSX.Element;
}

export default Team;
