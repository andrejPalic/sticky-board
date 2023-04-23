import StickyButtons from "./StickyButtons";

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
    <div style={{ color: color }}>
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
