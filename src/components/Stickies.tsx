import Sticky from "./Sticky";

interface Props {
  stickies: {}[];
}

const Stickies = ({ stickies }: Props) => {
  return (
    <>
      {stickies.map((sticky: any) => (
        <Sticky key={sticky.id} text={sticky.text} color={sticky.color} />
      ))}
    </>
  );
};

export default Stickies;
