import { Sticky } from "./types";
import StickyNote from "./StickyNote";

interface Props {
  stickies: Sticky[];
  onTextChange: (id: number, text: string) => void;
  onLiChange: (id: number, itemId: number, text: string) => void;
  onLiDelete: (id: number, itemId: number) => void;
  onChangeColor: (id: number) => void;
  onToggleList: (id: number) => void;
  onDelete: (id: number) => void;
}

const Stickies = ({
  stickies,
  onTextChange,
  onLiChange,
  onLiDelete,
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
          onTextChange={(text) => onTextChange(sticky.id, text)}
          onLiChange={(itemId, text) => onLiChange(sticky.id, itemId, text)}
          onLiDelete={(itemId) => onLiDelete(sticky.id, itemId)}
          onChangeColor={() => onChangeColor(sticky.id)}
          onToggleList={() => onToggleList(sticky.id)}
          onDelete={() => onDelete(sticky.id)}
        />
      ))}
    </>
  );
};

export default Stickies;
