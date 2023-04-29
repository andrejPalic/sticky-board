import { Sticky } from "./types";
import StickyNote from "./StickyNote";

interface Props {
  stickies: Sticky[];
  onUpdatePosition: (id: number, top: string, left: string) => void;
  onTextChange: (id: number, text: string) => void;
  onLiChange: (id: number, itemId: number, text: string) => void;
  onLiDelete: (id: number, itemId: number) => void;
  onChangeColor: (id: number) => void;
  onToggleList: (id: number) => void;
  onDelete: (id: number) => void;
}

const Stickies = ({
  stickies,
  onUpdatePosition,
  onTextChange,
  onLiChange,
  onLiDelete,
  onChangeColor,
  onToggleList,
  onDelete,
}: Props) => {
  return (
    <div id="stickies">
      {stickies.map((sticky: Sticky) => (
        <StickyNote
          key={sticky.id}
          sticky={sticky}
          onUpdatePosition={(top, left) =>
            onUpdatePosition(sticky.id, top, left)
          }
          onTextChange={(text) => onTextChange(sticky.id, text)}
          onLiChange={(itemId, text) => onLiChange(sticky.id, itemId, text)}
          onLiDelete={(itemId) => onLiDelete(sticky.id, itemId)}
          onChangeColor={() => onChangeColor(sticky.id)}
          onToggleList={() => onToggleList(sticky.id)}
          onDelete={() => onDelete(sticky.id)}
        />
      ))}
    </div>
  );
};

export default Stickies;
