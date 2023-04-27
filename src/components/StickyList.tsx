import { Sticky } from "./types";

interface Props {
  list: Sticky["list"];
}

const StickyList = ({ list }: Props) => {
  return (
    <div>
      {list.map((listItem) => (
        <li key={listItem.id}>{listItem.text}</li>
      ))}
    </div>
  );
};

export default StickyList;
