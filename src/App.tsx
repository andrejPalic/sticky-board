import { useState } from "react";
import BoardButtons from "./components/BoardButtons";
import Stickies from "./components/Stickies";

const App = () => {
  const [stickies, setStickies] = useState<number[]>([]);
  const [prevStickies, setPrevStickies] = useState<number[]>([]);

  const handleNewSticky = () => {
    setPrevStickies([...stickies]);
    setStickies([...stickies, Math.random()]);
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
      <Stickies>{stickies}</Stickies>
    </>
  );
};

export default App;
