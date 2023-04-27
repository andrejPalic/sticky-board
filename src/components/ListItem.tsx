import { useState } from "react";

interface Props {
  text: string;
  isLast: boolean;
  onLiChange: (text: string) => void;
  onLiDelete: () => void;
}

const ListItem = ({ text, isLast, onLiChange, onLiDelete }: Props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    e.key === "Enter" && (e.preventDefault(), e.currentTarget.blur());
  };

  const handleBlur = (e: React.FocusEvent<HTMLLIElement>) => {
    setIsFocused(false);

    e.currentTarget.innerHTML === ""
      ? onLiDelete()
      : e.currentTarget.innerHTML !== text
      ? onLiChange(e.currentTarget.innerHTML)
      : null;
  };

  return (
    <li
      className={text === "" && isLast && !isFocused ? "placeholder" : ""}
      dangerouslySetInnerHTML={{ __html: text }}
      contentEditable
      spellCheck={false}
      onFocus={() => setIsFocused(true)}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    />
  );
};

export default ListItem;
