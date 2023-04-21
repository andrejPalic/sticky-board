interface Props {
  onNewSticky: () => void;
  onUndo: () => void;
  onReset: () => void;
}

const BoardButtons = ({ onNewSticky, onUndo, onReset }: Props) => {
  return (
    <>
      <button onClick={onNewSticky}>New Sticky</button>
      <button onClick={onUndo}>Undo</button>
      <button onClick={onReset}>Reset</button>
    </>
  );
};

export default BoardButtons;
