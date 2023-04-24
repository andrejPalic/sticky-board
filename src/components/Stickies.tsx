import { Sticky } from "./types";
import StickyNote from "./StickyNote";

interface Props {
  stickies: Sticky[];
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
      {stickies.map((sticky: Sticky) => (
        <StickyNote
          key={sticky.id}
          sticky={sticky}
          onChangeColor={() => onChangeColor(sticky.id)}
          onToggleList={() => onToggleList(sticky.id)}
          onDelete={() => onDelete(sticky.id)}
        />
      ))}
    </>
  );
};

export default Stickies;
