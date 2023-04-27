import { useState } from "react";

interface Props {
  text: string;
  onTextChange: (text: string) => void;
  onDelete: () => void;
}

const StickyText = ({ text, onTextChange, onDelete }: Props) => {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

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
      contentEditable
      spellCheck={false}
      onFocus={() => setIsInitialized(true)}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    />
  );
};

export default StickyText;
