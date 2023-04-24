import StickyButtons from "./StickyButtons";
import "./StickyNote.css";

interface Props {
  text: string;
  color: string;
  onChangeColor: () => void;
  onToggleList: () => void;
  onDelete: () => void;
}

const StickyNote = ({
  text,
  color,
  onChangeColor,
  onToggleList,
  onDelete,
}: Props) => {
  return (
    <div className={color}>
      {text}
      <StickyButtons
        onChangeColor={onChangeColor}
        onToggleList={onToggleList}
        onDelete={onDelete}
      />
    </div>
  );
};

export default StickyNote;
