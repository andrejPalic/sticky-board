import { IoColorPaletteOutline, IoListOutline } from "react-icons/io5";
import { MdOutlineDeleteOutline } from "react-icons/md";

interface Props {
  onChangeColor: () => void;
  onToggleList: () => void;
  onDelete: () => void;
}

const StickyButtons = ({ onChangeColor, onToggleList, onDelete }: Props) => {
  return (
    <div className={"buttonsContainer"}>
      <IoColorPaletteOutline onClick={onChangeColor} />
      <IoListOutline onClick={onToggleList} />
      <MdOutlineDeleteOutline onClick={onDelete} />
    </div>
  );
};

export default StickyButtons;
