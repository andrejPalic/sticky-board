import { Sticky } from "./types";
import ListItem from "./ListItem";

interface Props {
  list: Sticky["list"];
  isDragged: boolean;
  onLiChange: (itemId: number, text: string) => void;
  onLiDelete: (itemId: number) => void;
  onDelete: () => void;
}

const StickyList = ({
  list,
  isDragged,
  onLiChange,
  onLiDelete,
  onDelete,
}: Props) => {
  let lastId = list[list.length - 1].itemId;

  const handleLiDelete = (itemId: number) => {
    (itemId === lastId && list.length === 1) ||
    (itemId !== lastId && list.length === 2)
      ? onDelete()
      : itemId !== lastId
      ? onLiDelete(itemId)
      : null;
  };

  return (
    <ul>
      {list.map((listItem) => (
        <ListItem
          key={listItem.itemId}
          text={listItem.text.toString()}
          isDragged={isDragged}
          isLast={listItem.itemId === lastId}
          onLiChange={(text) => onLiChange(listItem.itemId, text)}
          onLiDelete={() => handleLiDelete(listItem.itemId)}
        />
      ))}
    </ul>
  );
};

export default StickyList;
