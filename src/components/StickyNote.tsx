import { Sticky } from "./types";
import StickyText from "./StickyText";
import StickyButtons from "./StickyButtons";
import "./StickyNote.css";

interface Props {
  sticky: Sticky;
  onTextChange: (text: string) => void;
  onChangeColor: () => void;
  onToggleList: () => void;
  onDelete: () => void;
}

const StickyNote = ({
  sticky,
  onTextChange,
  onChangeColor,
  onToggleList,
  onDelete,
}: Props) => {
  return (
    <div className={sticky.color}>
      <StickyText
        text={sticky.text}
        onTextChange={onTextChange}
        onDelete={onDelete}
      />
      <StickyButtons
        onChangeColor={onChangeColor}
        onToggleList={onToggleList}
        onDelete={onDelete}
      />
    </div>
  );
};

export default StickyNote;
