import { Sticky } from "./types";
import StickyText from "./StickyText";
import StickyList from "./StickyList";
import StickyButtons from "./StickyButtons";
import "./StickyNote.css";

interface Props {
  sticky: Sticky;
  onTextChange: (text: string) => void;
  onLiChange: (itemId: number, text: string) => void;
  onLiDelete: (itemId: number) => void;
  onChangeColor: () => void;
  onToggleList: () => void;
  onDelete: () => void;
}

const StickyNote = ({
  sticky,
  onTextChange,
  onLiChange,
  onLiDelete,
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
        <StickyList
          list={sticky.list}
          onLiChange={onLiChange}
          onLiDelete={onLiDelete}
          onDelete={onDelete}
        />
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
