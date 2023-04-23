import StickyButtons from "./StickyButtons";
import "./Sticky.css";

interface Props {
  text: string;
  color: string;
  onChangeColor: () => void;
  onToggleList: () => void;
  onDelete: () => void;
}

const Sticky = ({
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

export default Sticky;
