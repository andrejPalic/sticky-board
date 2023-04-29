interface Props {
  onNewSticky: () => void;
  onUndo: () => void;
  onReset: () => void;
}

const BoardButtons = ({ onNewSticky, onUndo, onReset }: Props) => {
  return (
    <div id="boardButtons">
      <button onClick={onNewSticky}>New Sticky</button>
      <button onClick={onUndo}>Undo</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default BoardButtons;
