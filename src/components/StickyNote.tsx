import { Sticky } from "./types";
import StickyText from "./StickyText";
import StickyList from "./StickyList";
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
      {!sticky.isList ? (
        <StickyText
          text={sticky.text}
          onTextChange={onTextChange}
          onDelete={onDelete}
        />
      ) : (
        <StickyList list={sticky.list} />
      )}
      <StickyButtons
        onChangeColor={onChangeColor}
        onToggleList={onToggleList}
        onDelete={onDelete}
      />
    </div>
  );
};

export default StickyNote;
