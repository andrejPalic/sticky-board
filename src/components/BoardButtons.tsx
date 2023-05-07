import { CiStickyNote } from "react-icons/ci";
import { AiOutlineUndo } from "react-icons/ai";
import { MdOutlineDeleteOutline } from "react-icons/md";

interface Props {
  onNewSticky: () => void;
  onUndo: () => void;
  onReset: () => void;
}

const BoardButtons = ({ onNewSticky, onUndo, onReset }: Props) => {
  return (
    <div id="boardButtons">
      <CiStickyNote onClick={onNewSticky} style={{ strokeWidth: "1px" }} />
      <AiOutlineUndo onClick={onUndo} />
      <MdOutlineDeleteOutline onClick={onReset} />
    </div>
  );
};

export default BoardButtons;
