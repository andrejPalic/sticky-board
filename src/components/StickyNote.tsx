import { Sticky } from "./types";

import StickyButtons from "./StickyButtons";
import "./StickyNote.css";

interface Props {
  sticky: Sticky;
  onChangeColor: () => void;
  onToggleList: () => void;
  onDelete: () => void;
}

const StickyNote = ({
  sticky,
  onChangeColor,
  onToggleList,
  onDelete,
}: Props) => {
  return (
    <div className={sticky.color}>
      {sticky.text}
      <StickyButtons
        onChangeColor={onChangeColor}
        onToggleList={onToggleList}
        onDelete={onDelete}
      />
    </div>
  );
};

export default StickyNote;
