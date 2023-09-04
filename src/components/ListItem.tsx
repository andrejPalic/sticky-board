import { useState } from "react";

interface Props {
  text: string;
  isLast: boolean;
  isDragged: boolean;
  trackFocus: (focus: boolean) => void;
  onLiChange: (text: string) => void;
  onLiDelete: () => void;
}

const ListItem = ({
  text,
  isLast,
  isDragged,
  trackFocus,
  onLiChange,
  onLiDelete,
}: Props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setIsFocused(true);
    trackFocus(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    e.key === "Enter" && (e.preventDefault(), e.currentTarget.blur());
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLLIElement>) => {
    e.preventDefault();

    const pastedText = e.clipboardData.getData("text/plain");
    document.execCommand("insertText", false, pastedText);
  };

  const handleBlur = (e: React.FocusEvent<HTMLLIElement>) => {
    setIsFocused(false);
    trackFocus(false);

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
      contentEditable={!isDragged}
      style={{ userSelect: isDragged ? "none" : "auto" }}
      spellCheck={false}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
      onPaste={handlePaste}
      onBlur={handleBlur}
    />
  );
};

export default ListItem;
