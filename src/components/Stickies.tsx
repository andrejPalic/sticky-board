interface Props {
  children: number[];
}

const Stickies = ({ children }: Props) => {
  return (
    <>
      {children.map((child: number) => (
        <div key={child}>{child}</div>
      ))}
    </>
  );
};

export default Stickies;
