import { useState } from "react";
import BoardButtons from "./components/BoardButtons";
import Stickies from "./components/Stickies";

const App = () => {
  const [stickies, setStickies] = useState<{}[]>([]);
  const [prevStickies, setPrevStickies] = useState<{}[]>([]);

  const newSticky = () => {
    const id = Math.random();
    return { id: id, text: id.toString(), color: "orange" };
  };

  const handleNewSticky = () => {
    setPrevStickies([...stickies]);
    setStickies([...stickies, newSticky()]);
  };

  const handleUndo = () => {
    setPrevStickies([...stickies]);
    setStickies([...prevStickies]);
  };

  const handleReset = () => {
    setPrevStickies([]);
    setStickies([]);
  };

  return (
    <>
      <BoardButtons
        onNewSticky={handleNewSticky}
        onUndo={handleUndo}
        onReset={handleReset}
      />
      <Stickies stickies={stickies} />
    </>
  );
};

export default App;
