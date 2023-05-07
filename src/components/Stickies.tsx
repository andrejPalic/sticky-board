import { useState } from "react";
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
  const [isBlurred, setBlurred] = useState<boolean>(false);
  const setBlur = (blur: boolean) => {
    setBlurred(blur);
  };

  const handleDelete = (id: number) => {
    setBlur(false);
    onDelete(id);
  };

  return (
    <>
      {stickies.map((sticky: Sticky) => (
        <StickyNote
          key={sticky.id}
          sticky={sticky}
          onUpdatePosition={(top, left) =>
            onUpdatePosition(sticky.id, top, left)
          }
          applyBlur={setBlur}
          isBlurred={isBlurred}
          onTextChange={(text) => onTextChange(sticky.id, text)}
          onLiChange={(itemId, text) => onLiChange(sticky.id, itemId, text)}
          onLiDelete={(itemId) => onLiDelete(sticky.id, itemId)}
          onChangeColor={() => onChangeColor(sticky.id)}
          onToggleList={() => onToggleList(sticky.id)}
          onDelete={() => handleDelete(sticky.id)}
        />
      ))}
    </>
  );
};

export default Stickies;
