import { useState } from "react";

interface Props {
  text: string;
  isDragged: boolean;
  onTextChange: (text: string) => void;
  onDelete: () => void;
}

const StickyText = ({ text, isDragged, onTextChange, onDelete }: Props) => {
  const [isInitialized, setInitialized] = useState<boolean>(false);

  const displayText = text ? text : isInitialized ? "" : "Note here";

  const handleKeyDown = (e: React.KeyboardEvent<HTMLParagraphElement>) => {
    e.key === "Enter" && !e.shiftKey
      ? (e.preventDefault(), e.currentTarget.blur())
      : e.currentTarget.innerHTML + "<br>";
  };

  const handleBlur = (e: React.FocusEvent<HTMLParagraphElement>) => {
    e.currentTarget.innerHTML === ""
      ? onDelete()
      : e.currentTarget.innerHTML !== text
      ? onTextChange(e.currentTarget.innerHTML.toString())
      : null;
  };

  return (
    <p
      className={text !== "" || isInitialized ? "" : "placeholder"}
      dangerouslySetInnerHTML={{ __html: displayText }}
      contentEditable={!isDragged}
      spellCheck={false}
      onFocus={() => setInitialized(true)}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    />
  );
};

export default StickyText;
