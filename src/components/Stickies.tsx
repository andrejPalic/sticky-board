import Sticky from "./Sticky";

interface Props {
  stickies: {}[];
  onChangeColor: (id: number) => void;
  onToggleList: (id: number) => void;
  onDelete: (id: number) => void;
}

const Stickies = ({
  stickies,
  onChangeColor,
  onToggleList,
  onDelete,
}: Props) => {
  return (
    <>
      {stickies.map((sticky: any) => (
        <Sticky
          key={sticky.id}
          text={sticky.text}
          color={sticky.color}
          onChangeColor={() => onChangeColor(sticky.id)}
          onToggleList={() => onToggleList(sticky.id)}
          onDelete={() => onDelete(sticky.id)}
        />
      ))}
    </>
  );
};

export default Stickies;
