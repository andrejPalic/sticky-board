interface Props {
  onChangeColor: () => void;
  onToggleList: () => void;
  onDelete: () => void;
}

const StickyButtons = ({ onChangeColor, onToggleList, onDelete }: Props) => {
  return (
    <div className="stickyButtons">
      <button onClick={onChangeColor}>Change Color</button>
      <button onClick={onToggleList}>Toggle List</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default StickyButtons;
