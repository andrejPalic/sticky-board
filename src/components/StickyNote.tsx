import { useState, useRef, useEffect } from "react";
import { Sticky } from "./types";
import StickyText from "./StickyText";
import StickyList from "./StickyList";
import StickyButtons from "./StickyButtons";
import "./StickyNote.css";

interface Props {
  sticky: Sticky;
  applyBlur: (isDragged: boolean) => void;
  isBlurred: boolean;
  onUpdatePosition: (top: string, left: string) => void;
  onTextChange: (text: string) => void;
  onLiChange: (itemId: number, text: string) => void;
  onLiDelete: (itemId: number) => void;
  onChangeColor: () => void;
  onToggleList: () => void;
  onDelete: () => void;
}

const StickyNote = ({
  sticky,
  applyBlur,
  isBlurred,
  onUpdatePosition,
  onTextChange,
  onLiChange,
  onLiDelete,
  onChangeColor,
  onToggleList,
  onDelete,
}: Props) => {
  const [isDragged, setDragged] = useState<boolean>(false);
  const stickyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stickyRef.current || isDragged) return;

    onUpdatePosition(stickyRef.current.style.top, stickyRef.current.style.left);
  }, [stickyRef.current, isDragged]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.shiftKey || (e.target as Element).tagName === "BUTTON") return;

    const stickyCurr = stickyRef.current!;
    const stickyRect = stickyCurr.getBoundingClientRect();
    e.clientY = stickyRect.top;
    e.clientX = stickyRect.left;

    const handleMouseMove = (e: any) => {
      setDragged(true);

      const newStickyY = (e.clientY / window.innerHeight) * 100;
      const newStickyX = (e.clientX / window.innerWidth) * 100;

      stickyCurr.style.top = `${newStickyY}%`;
      stickyCurr.style.left = `${newStickyX}%`;
    };

    const handleMouseUp = () => {
      setDragged(false);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      className={`sticky ${sticky.color} ${isBlurred ? "isBlurred" : ""}`}
      ref={stickyRef}
      style={{
        top: sticky.position.top,
        left: sticky.position.left,
      }}
      onMouseEnter={() => applyBlur(true)}
      onMouseDown={handleMouseDown}
      onMouseLeave={() => applyBlur(false)}
    >
      {!sticky.isList ? (
        <StickyText
          text={sticky.text}
          isDragged={isDragged}
          onTextChange={onTextChange}
          onDelete={onDelete}
        />
      ) : (
        <StickyList
          list={sticky.list}
          isDragged={isDragged}
          onLiChange={onLiChange}
          onLiDelete={onLiDelete}
          onDelete={onDelete}
        />
      )}
      <StickyButtons
        onChangeColor={onChangeColor}
        onToggleList={onToggleList}
        onDelete={onDelete}
      />
    </div>
  );
};

export default StickyNote;
