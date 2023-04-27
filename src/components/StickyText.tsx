import { useRef, useState } from "react";

interface Props {
  text: string;
  onTextChange: (text: any) => void;
  onDelete: () => void;
}

const StickyText = ({ text, onTextChange, onDelete }: Props) => {
  const p = useRef<HTMLParagraphElement>(null);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  const displayText = text ? text : isInitialized ? "" : "Note here";

  const handleFocus = () => {
    setIsInitialized(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLParagraphElement>) => {
    e.key === "Enter" && !e.shiftKey
      ? (e.preventDefault(), p.current?.blur())
      : p.current?.textContent + "<br>";
  };

  const handleBlur = () => {
    p.current?.textContent === ""
      ? onDelete()
      : text !== p.current?.innerHTML
      ? onTextChange(p.current?.innerHTML.toString())
      : null;
  };

  return (
    <p
      ref={p}
      className={text !== "" || isInitialized ? "isInitialized" : "placeholder"}
      dangerouslySetInnerHTML={{ __html: displayText }}
      contentEditable
      spellCheck={false}
      onFocus={handleFocus}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    ></p>
  );
};

export default StickyText;
