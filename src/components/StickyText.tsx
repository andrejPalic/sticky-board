import { useState, useRef, useEffect } from "react";

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
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isInitialized, setInitialized] = useState<boolean>(false);
  const displayText = text ? text : isInitialized ? "" : "Note here";

  const handleFocus = () => {
    setInitialized(true);
    trackFocus(true);
  };

  useEffect(() => {
    handleFontSize();
  }, []);

  const handleFontSize = () => {
    const fontSize = ["large", "x-large", "xx-large"];

    while (
      (textRef.current!.clientHeight === textRef.current!.scrollHeight ||
        textRef.current!.clientWidth !== textRef.current!.scrollWidth) &&
      textRef.current!.style.fontSize !== "xx-large"
    ) {
      textRef.current!.style.fontSize =
        fontSize[fontSize.indexOf(textRef.current!.style.fontSize) + 1];
    }
    while (
      (textRef.current!.clientHeight !== textRef.current!.scrollHeight ||
        textRef.current!.clientWidth !== textRef.current!.scrollWidth) &&
      textRef.current!.style.fontSize !== "large"
    ) {
      textRef.current!.style.fontSize =
        fontSize[fontSize.indexOf(textRef.current!.style.fontSize) - 1];
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLParagraphElement>) => {
    e.key === "Enter" && !e.shiftKey
      ? (e.preventDefault(), e.currentTarget.blur())
      : e.currentTarget.innerHTML + "<br>";
  };

  const handleBlur = () => {
    textRef.current!.innerHTML === ""
      ? onDelete()
      : textRef.current!.innerHTML !== text
      ? onTextChange(textRef.current!.innerHTML.toString())
      : null;
    trackFocus(false);
  };

  return (
    <p
      className={text !== "" || isInitialized ? "" : "placeholder"}
      ref={textRef}
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
