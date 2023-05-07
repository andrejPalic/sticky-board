import { useState } from "react";

interface Props {
  text: string;
  isDragged: boolean;
  trackFocus: (focus: boolean) => void;
  onTextChange: (text: string) => void;
  onDelete: () => void;
}

const StickyText = ({
  text,
  isDragged,
  trackFocus,
  onTextChange,
  onDelete,
}: Props) => {
  const [isInitialized, setInitialized] = useState<boolean>(false);

  const displayText = text ? text : isInitialized ? "" : "Note here";

  const handleFocus = () => {
    setInitialized(true);
    trackFocus(true);
  };

  const handleFontSize = (e: React.KeyboardEvent<HTMLParagraphElement>) => {
    const fontSize = ["large", "x-large", "xx-large"];
    const p = e.currentTarget;

    while (
      (p.clientHeight === p.scrollHeight || p.clientWidth !== p.scrollWidth) &&
      p.style.fontSize !== "xx-large"
    ) {
      p.style.fontSize = fontSize[fontSize.indexOf(p.style.fontSize) + 1];
    }
    while (
      (p.clientHeight !== p.scrollHeight || p.clientWidth !== p.scrollWidth) &&
      p.style.fontSize !== "large"
    ) {
      p.style.fontSize =
        fontSize[fontSize.indexOf(e.currentTarget.style.fontSize) - 1];
    }
  };

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
    trackFocus(false);
  };

  return (
    <p
      className={text !== "" || isInitialized ? "" : "placeholder"}
      dangerouslySetInnerHTML={{ __html: displayText }}
      contentEditable={!isDragged}
      spellCheck={false}
      onFocus={handleFocus}
      onInput={handleFontSize}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    />
  );
};

export default StickyText;
